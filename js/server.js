const http = require('http');
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const port = process.env.PORT || 5500;

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.pdf': 'application/pdf',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.csv': 'text/csv; charset=utf-8',
};

function isIgnoredName(name) {
  return ['.git', 'node_modules', '.vscode'].includes(name);
}

function buildTree(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true })
    .filter((entry) => !isIgnoredName(entry.name))
    .sort((a, b) => a.name.localeCompare(b.name));

  const children = entries.map((entry) => {
    const fullPath = path.join(dirPath, entry.name);
    const relativePath = path.relative(rootDir, fullPath).replace(/\\/g, '/');

    const node = {
      name: entry.name,
      path: relativePath,
      type: entry.isDirectory() ? 'directory' : 'file',
    };

    if (entry.isDirectory()) {
      node.children = buildTree(fullPath);
    }

    return node;
  });

  return {
    name: path.basename(dirPath) || 'root',
    path: path.relative(rootDir, dirPath).replace(/\\/g, '/') || '',
    type: 'directory',
    children,
  };
}

function serveFile(res, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('File not found');
      return;
    }

    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
}

function parseRequestedPath(rawPath) {
  const url = new URL(rawPath, 'http://localhost');
  const relativePath = url.searchParams.get('path');

  if (!relativePath) {
    return null;
  }

  const safePath = path.resolve(rootDir, decodeURIComponent(relativePath));
  if (!safePath.startsWith(rootDir)) {
    return null;
  }

  return safePath;
}

function sendJson(res, payload) {
  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(payload));
}

function readMarkdownToHtml(markdownText) {
  const lines = markdownText.replace(/\r\n/g, '\n').split('\n');
  const escapeHtml = (text) =>
    text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');

  const parseInline = (text) => {
    let output = escapeHtml(text);
    output = output.replace(/\[(.+?)\]\((https?:\/\/[^\s)]+|[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
    output = output.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    output = output.replace(/\*(.+?)\*/g, '<em>$1</em>');
    output = output.replace(/`([^`]+)`/g, '<code>$1</code>');
    return output;
  };

  const flushList = (listState, htmlParts) => {
    if (!listState.active) return htmlParts;
    htmlParts.push(`</${listState.type}>`);
    listState.active = false;
    listState.type = null;
    return htmlParts;
  };

  const htmlParts = [];
  let listState = { active: false, type: null };
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];
    const trimmedLine = line.trim();

    if (!trimmedLine) {
      htmlParts.push(flushList(listState, [])?.join('') || '');
      index += 1;
      continue;
    }

    if (/^#{1,6}\s+/.test(trimmedLine)) {
      flushList(listState, htmlParts);
      const match = trimmedLine.match(/^(#{1,6})\s+(.*)$/);
      const level = match[1].length;
      htmlParts.push(`<h${level}>${parseInline(match[2])}</h${level}>`);
      index += 1;
      continue;
    }

    if (/^\|.*\|$/.test(trimmedLine)) {
      flushList(listState, htmlParts);
      const tableRows = [];
      while (index < lines.length && /^\|.*\|$/.test(lines[index].trim())) {
        tableRows.push(lines[index].trim());
        index += 1;
      }

      if (tableRows.length >= 2) {
        const headers = tableRows[0].split('|').slice(1, -1).map((cell) => parseInline(cell.trim()));
        const rows = tableRows.slice(1).map((row) => row.split('|').slice(1, -1).map((cell) => parseInline(cell.trim())));

        htmlParts.push('<table><thead><tr>' + headers.map((cell) => `<th>${cell}</th>`).join('') + '</tr></thead><tbody>');
        rows.forEach((row) => {
          htmlParts.push('<tr>' + row.map((cell) => `<td>${cell}</td>`).join('') + '</tr>');
        });
        htmlParts.push('</tbody></table>');
        continue;
      }
    }

    if (/^[-*+]\s+/.test(trimmedLine)) {
      if (!listState.active || listState.type !== 'ul') {
        flushList(listState, htmlParts);
        htmlParts.push('<ul>');
        listState.active = true;
        listState.type = 'ul';
      }
      htmlParts.push(`<li>${parseInline(trimmedLine.replace(/^[-*+]\s+/, ''))}</li>`);
      index += 1;
      continue;
    }

    if (/^\d+\.\s+/.test(trimmedLine)) {
      if (!listState.active || listState.type !== 'ol') {
        flushList(listState, htmlParts);
        htmlParts.push('<ol>');
        listState.active = true;
        listState.type = 'ol';
      }
      htmlParts.push(`<li>${parseInline(trimmedLine.replace(/^\d+\.\s+/, ''))}</li>`);
      index += 1;
      continue;
    }

    if (/^---+$/.test(trimmedLine)) {
      flushList(listState, htmlParts);
      htmlParts.push('<hr>');
      index += 1;
      continue;
    }

    flushList(listState, htmlParts);
    htmlParts.push(`<p>${parseInline(trimmedLine)}</p>`);
    index += 1;
  }

  flushList(listState, htmlParts);
  return htmlParts.join('');
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');

  if (req.method !== 'GET') {
    res.writeHead(405, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Method not allowed');
    return;
  }

  if (url.pathname === '/') {
    serveFile(res, path.join(rootDir, 'index.html'));
    return;
  }

  if (url.pathname === '/api/tree') {
    sendJson(res, buildTree(rootDir));
    return;
  }

  if (url.pathname === '/api/readme') {
    const readmePath = path.join(rootDir, 'README.md');
    fs.readFile(readmePath, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('README not found');
        return;
      }

      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(readMarkdownToHtml(data));
    });
    return;
  }

  if (url.pathname === '/file') {
    const filePath = parseRequestedPath(req.url);
    if (!filePath) {
      res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Invalid file path');
      return;
    }

    if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('File not found');
      return;
    }

    serveFile(res, filePath);
    return;
  }

  const requestedFilePath = path.resolve(rootDir, '.' + url.pathname);
  if (requestedFilePath.startsWith(rootDir) && fs.existsSync(requestedFilePath)) {
    const fileStat = fs.statSync(requestedFilePath);
    if (fileStat.isFile()) {
      serveFile(res, requestedFilePath);
      return;
    }
  }

  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Not found');
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

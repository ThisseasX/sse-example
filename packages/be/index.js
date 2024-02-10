const { createServer } = require('http');

createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'text/event-stream');

  setInterval(() => {
    res.write(`data: ${JSON.stringify({ message: 'Hello, world!' })}\n\n`);
  }, 500);
}).listen(3000);

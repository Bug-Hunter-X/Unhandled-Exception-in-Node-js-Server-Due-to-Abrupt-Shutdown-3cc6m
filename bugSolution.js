const http = require('http');

const server = http.createServer((req, res) => {
  // Handle request
  console.log('Request received');
  res.end();
});

let isShuttingDown = false;

const shutdown = () => {
  if (isShuttingDown) return;
  isShuttingDown = true;
  console.log('Shutting down...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
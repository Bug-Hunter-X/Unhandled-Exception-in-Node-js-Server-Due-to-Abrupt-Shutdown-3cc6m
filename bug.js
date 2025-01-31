const http = require('http');

const server = http.createServer((req, res) => {
  // Handle request
  console.log('Request received');
  res.end();
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// This will cause an error if the server is stopped abruptly before completing the request
// This is a race condition where multiple requests might be handled at once
// This is an uncommon bug and it's hard to catch it.

// This code is designed to cause an error, it should not be used in a production environment.
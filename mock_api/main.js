import http from 'http';
import app from './app.js';


// Config
const ipv6_on = process.env.IPV6_ON || false;  // Enable using IPv6
const port = normalizePort(process.env.PORT || '3000');  // Port to listen on

app.set('port', port);


// Create HTTP server.
let server = http.createServer(app);

// Listen on provided port, on all network interfaces.
if (ipv6_on) {
  server.listen(port);
} else {
  server.listen(port, '0.0.0.0');
}
server.on('error', onError);
server.on('listening', onListening);


// Normalize a port into a number, string, or false.
function normalizePort(val) {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;   // named pipe
  } else if (port >= 0) {
    return port;  // port number
  }
  return false;
}


function onListening() {
  let addr = server.address();
  let bind = null;
  let url = null;

  if (typeof addr === 'string') {
    bind = `pipe ${addr}`
  } else {
    bind = `port ${addr.port}`
    if (addr.family === 'IPv6') {
      url = `http://[::1]:${addr.port}`
    } else {
      url = `http://127.0.0.1:${addr.port}`
    }
  }

  console.log(`Listening on ${bind}`);
  if (url) {
    console.log(`URL: ${url}`)
  }
}


function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  let bind = (typeof port === 'string')
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`[ERROR] ${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`[ERROR] ${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

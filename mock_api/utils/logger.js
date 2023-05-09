
function logger_middleware(req, res, next) {
  if (res.headersSent) {
    console.log(`${req.method}  ${req.originalUrl}  ${res.statusCode}`);
  } else {
    res.on('finish', () => {
      console.log(`${req.method}  ${req.originalUrl}  ${res.statusCode}`)
    });
  }
  next();
}


export default logger_middleware;

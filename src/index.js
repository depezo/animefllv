const app = require('./app');
const port = process.env.PORT || 4000;
const addr = isNaN(port) ?
  '' :
  (process.env.ADDR || '0.0.0.0');

server = app.listen(port, addr, () => {
  /* eslint-disable no-console */
  console.log(`\n🚀 ... Listening: ${addr}${addr ? '\:' : 'unix://'}${port}`);
  /* eslint-enable no-console */
});

function shutdown() {
  server.close(); // socket file is automatically removed here
  process.exit();
}

process.on('SIGINT', shutdown);
process.on('SIGQUIT', shutdown);
process.on('SIGTERM', shutdown);

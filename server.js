const app = require('./app');
const { port, host } = require('./config/index');

const main = async () => {
  // make sure db connection is successful before starting to listen for requests

  app.listen(port, host, () => {
    console.info(`Server listening on http://${host}:${port}`);
  });
}

if(typeof module !== 'undefined' && !module.parent) {
  main();
}
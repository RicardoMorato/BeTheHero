const app = require('./app');

port = process.env.PORT || 3333,

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

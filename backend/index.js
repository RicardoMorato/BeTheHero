const express = require('express');

const app = express();

port = process.env.PORT || 3333,

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

app.get('/', (req, res) => {
  return res.json({
    BeTheHero: 'Done',
    Author: 'Ricardo Morato Rocha'
  });
});

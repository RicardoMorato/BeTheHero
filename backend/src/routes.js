const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

const version = process.env.VERSION || '^1.0.0';

routes.get('/', (req, res) => {
  res.json({
    App: 'Be the hero\'s back-end API',
    Status: 'Development',
    Version: `${version}`,
    Author: 'Ricardo Morato Rocha'
  });
});

routes.post('/session', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes;

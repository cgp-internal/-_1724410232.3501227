const express = require('express');
const flightRequestsRouter = express.Router();
const { handleFlightRequest } = require('../controllers/flightRequestController');

flightRequestsRouter.post('/flight-requests', (req, res, next) => {
  handleFlightRequest(req, res);
});

module.exports = { flightRequestsRouter };
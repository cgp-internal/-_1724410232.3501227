const flightRequestService = require('./services/flightRequestService');

const handleFlightRequest = (req, res) => {
  const polygonBoundary = req.body;
  flightRequestService.processPolygonBoundary(polygonBoundary, (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Failed to process polygon boundary' });
    } else {
      res.json(results);
    }
  });
};

module.exports = {
  handleFlightRequest
};
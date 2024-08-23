const db = require('./db');

const processPolygonBoundary = (polygonBoundary, callback) => {
  db.getPolygonBoundaryResults(polygonBoundary, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      const flightRequestResults = results.map((row) => ({
        id: row.id,
        location: row.location,
        request_type: row.request_type,
      }));
      callback(null, flightRequestResults);
    }
  });
};

module.exports = {
  processPolygonBoundary
};
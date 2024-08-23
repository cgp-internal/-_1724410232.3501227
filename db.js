const mysql = require('mysql');

let db;

const connectToDB = () => {
  db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'flight_request_db'
  });

  db.connect((err) => {
    if (err) {
      console.error('error connecting:', err);
      return;
    }
    console.log('connected as id ' + db.threadId);
  });
};

const getPolygonBoundaryResults = (polygonBoundary, callback) => {
  const query = `SELECT * FROM flight_requests WHERE ST_Intersects(ST_GeomFromGeoJSON(?), location)`;
  db.query(query, JSON.stringify(polygonBoundary), (err, rows) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, rows);
    }
  });
};

connectToDB();

module.exports = {
  getPolygonBoundaryResults
};
const express = require('express');
const app = express();
const { flightRequestsRouter } = require('./routes/flightRequests');

app.use(express.json());
app.use('/api', flightRequestsRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
const express = require('express');
const router = require('./routers/router.js');
const sqlConn = require('./config/sqlConnection');

const app = express();

app.use('/', router);
app.listen(7000, () => {
  console.log('Server started on port 7000');
});

const mysql2 = require('mysql2/promise');

const readPool = mysql2.createPool({
  host: 'classplus-staging.ccbjnqiu5qm8.ap-south-1.rds.amazonaws.com',
  user: 'root',
  password: '2b91c492803820c8ea117b2399b65d48',
  database: 'classplus-staging',
  multipleStatements: true,
  timezone: 'ist',
  charset: 'utf8mb4',
});

module.exports = {
  readPool,
};

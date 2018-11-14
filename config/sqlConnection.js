const mysql2 = require('mysql2/promise');

module.exports = async function getSqlConnection() {
  const con = await mysql2.createConnection({
    host: 'classplus-staging.ccbjnqiu5qm8.ap-south-1.rds.amazonaws.com',
    user: 'root',
    password: '2b91c492803820c8ea117b2399b65d48',
    database: 'classplus-staging',
  });
  con.connect((err) => {
    if (err) { throw err; } else { console.log('connected!!!'); }
  });
  global.sqlConn = con;
  console.log('sql connection established');
};

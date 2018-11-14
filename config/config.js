const config = {
  PORT: 7000,
  SQLdb: {
    host: 'classplus-staging.ccbjnqiu5qm8.ap-south-1.rds.amazonaws.com',
    port: 3306,
    user: 'root',
    password: '2b91c492803820c8ea117b2399b65d48',
    multipleStatements: true,
    database: 'classplus-staging',
    timezone: 'ist',
    charset: 'utf8mb4',
  },
};
module.exports = config;

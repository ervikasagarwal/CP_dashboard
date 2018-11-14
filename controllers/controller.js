const mysql2 = require('mysql2/promise');
const config = require('../config/config').SQLdb;

const getTest = async () => {
  console.log('getTest() executing..........');
  try {
    const connection = await mysql2.createConnection(config);
    const query = '';
    const resultSet = await connection.execute(query);
    console.log(resultSet[0]);
    connection.end();
    console.log(resultSet[0]);
    return resultSet[0];
  } catch (err) {
    console.log(`Error:- error thrown by getDirectors() method at ( directorController.js ) ${err}`);
    return err;
  }
};
const getNDaysData = (async () => {
  console.log('getNDaysData executing............');
});
const getOrgObject = (async () => {
  const connection = await mysql2.createConnection(config);
  const query = 'select id,orgCode from organizations';
  const resultSet = await connection.execute(query);
  resultSet[0].map((org) => {
    org.value = 0;
  });
});
const getLast7DaysAttendance = (async () => {
  const connection = await mysql2.createConnection(config);
  const query = 'select id,orgCode from organizations';
  const resultSet = await connection.execute(query);
});

module.exports = {
  getTest,
  getNDaysData,
  getOrgObject,
  getLast7DaysAttendance,
};

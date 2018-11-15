const mysql2 = require('mysql2/promise');
const config = require('../config/config').SQLdb;
const connection = require('../config/sqlConnection').readPool;

const getLastNDaysAttendance = (async (days) => {
  console.log('getLastNDaysAttendance() executing..........');
  console.log(global.sqlConn);
  try {
    // const connection = await mysql2.createConnection(config);
    const query = `select orgId ,sum(b.isPresent) as attendance,date(modifiedAt) as date from ( SELECT u.orgId, u.id, u.name, u.mobile, u.type, t.id as tutorId,b.batchId as batchId  FROM users u INNER JOIN  tutors t ON t.userId = u.id INNER JOIN batch_ownership b on b.tutorId  = t.id  ORDER BY orgId) as tutorTable left join batch_attendance b  on b.batchId=tutorTable.batchId where date(modifiedAt) >= DATE(NOW()) - INTERVAL ${days} DAY GROUP BY orgId;`;
    const resultSet = await connection.query(query);
    console.log(resultSet[0]);
    return resultSet[0];
  } catch (err) {
    console.log(`Error:- error thrown by getLastNDaysAttendance() method at ( Controller.js ) ${err}`);
    return err;
  }
});
// getLastNDaysAttendance(7);
const getLastNDaysAttendanceTopics = (async (days) => {
  console.log('getLastNDaysAttendanceTopics() executing..........');
  try {
    // const connection = await mysql2.createConnection(config);
    const query = `select orgId ,count(at.batchId) as topic,date(createdAt) as date from ( SELECT u.orgId, u.id, u.name, u.mobile, u.type, t.id as tutorId,b.batchId as batchId  FROM users u INNER JOIN  tutors t ON t.userId = u.id INNER JOIN batch_ownership b on b.tutorId  = t.id  ORDER BY orgId) as tutorTable left join daily_topics at on at.batchId=tutorTable.batchId where date(createdAt) >= DATE(NOW()) - INTERVAL ${days} DAY GROUP BY orgId`;
    const resultSet = await connection.execute(query);
    console.log(resultSet[0]);
    return resultSet[0];
  } catch (err) {
    console.log(`Error:- error thrown by getLastNDaysAttendance() method at ( Controller.js ) ${err}`);
    return err;
  }
});
// getLastNDaysAttendanceTopics(7);
const getLastNDaysAnnouncement = async (days) => {
  console.log('getNDaysAnnouncement() executing..........');
  try {
    // const connection = await mysql2.createConnection(config);
    const query = `select orgId ,count(a.description) as announcement,date(modifiedAt) as date from ( SELECT u.orgId, u.id, u.name, u.mobile, u.type, t.id as tutorId,b.batchId as batchId  FROM users u INNER JOIN  tutors t ON t.userId = u.id INNER JOIN batch_ownership b on b.tutorId  = t.id  ORDER BY orgId) as tutorTable left join announcements a on a.batchId=tutorTable.batchId where date(modifiedAt) >= DATE(NOW()) - INTERVAL ${days} DAY GROUP BY orgId`;
    const resultSet = await connection.execute(query);
    console.log(resultSet[0]);
    connection.end();
    return resultSet[0];
  } catch (err) {
    console.log(`Error:- error thrown by getNDaysAnnouncement() method at ( Controller.js ) ${err}`);
    return err;
  }
};
// getLastNDaysAnnouncement(30);
const getLastNDaysHomework = async (days) => {
  console.log('getNDaysHomework() executing..........');
  try {
    // const connection = await mysql2.createConnection(config);
    const query = `select orgId ,round(count(hw.batchId)/2) as homeworks,date(hw.createdAt) as date from ( SELECT u.orgId, u.id, u.name, u.mobile, u.type, t.id as tutorId,b.batchId as batchId  FROM users u INNER JOIN  tutors t ON t.userId = u.id INNER JOIN batch_ownership b on b.tutorId  = t.id  ORDER BY orgId) as tutorTable left join homeworks hw on hw.batchId=tutorTable.batchId where date(createdAt) >= DATE(NOW()) - INTERVAL ${days} DAY GROUP BY orgId;`;
    const resultSet = await connection.execute(query);
    console.log(resultSet[0]);
    return resultSet[0];
  } catch (err) {
    console.log(`Error:- error thrown by getNDaysHomework() method at ( Controller.js ) ${err}`);
    return err;
  }
};
// getLastNDaysHomework(7);
const getLastNDaysOnlineTest = async (days) => {
  console.log('getLastNDaysOnlineTest() executing..........');
  try {
    // const connection = await mysql2.createConnection(config);
    const query = `select orgId ,count(c.id) as tests ,date(tr.createdAt) as date from ( SELECT u.orgId, u.id, u.name, u.mobile, u.type, t.id as tutorId,b.batchId as batchId  FROM users u INNER JOIN  tutors t ON t.userId = u.id INNER JOIN batch_ownership b on b.tutorId  = t.id  ORDER BY orgId) as tutorTable left join homeworks hw on hw.batchId=tutorTable.batchId inner join batches bat on bat.batchId=tutorTable.batchId inner join chapters c on c.subjectId=bat.subjectId left join tests test on test.chapterId=c.id inner join test_results tr on tr.batchTestId=test.id where test.onlineTestType IS NOT NULL AND tr.createdAt >= DATE(NOW()) - INTERVAL ${days} DAY GROUP BY orgId`;
    const resultSet = await connection.execute(query);
    console.log(resultSet[0]);
    return resultSet[0];
  } catch (err) {
    console.log(`Error:- error thrown by getLastNDaysOnlineTest() method at ( Controller.js ) ${err}`);
    return err;
  }
};

const getLastNDaysOfflineTest = async (days) => {
  console.log('getLastNDaysOfflineTest() executing..........');
  try {
    // const connection = await mysql2.createConnection(config);
    const query = `select orgId ,count(c.id) as tests ,date(tr.createdAt) as date from ( SELECT u.orgId, u.id, u.name, u.mobile, u.type, t.id as tutorId,b.batchId as batchId  FROM users u INNER JOIN  tutors t ON t.userId = u.id INNER JOIN batch_ownership b on b.tutorId  = t.id  ORDER BY orgId) as tutorTable left join homeworks hw on hw.batchId=tutorTable.batchId inner join batches bat on bat.batchId=tutorTable.batchId inner join chapters c on c.subjectId=bat.subjectId left join tests test on test.chapterId=c.id inner join test_results tr on tr.batchTestId=test.id where test.onlineTestType IS NULL AND tr.createdAt >= DATE(NOW()) - INTERVAL ${days} DAY GROUP BY orgId`;
    const resultSet = await connection.execute(query);
    console.log(resultSet[0]);
    return resultSet[0];
  } catch (err) {
    console.log(`Error:- error thrown by getLastNDaysOfflineTest() method at ( Controller.js ) ${err}`);
    return err;
  }
};

const getOrgs = (async () => {
  try {
    // const connection = await mysql2.createConnection(config);
    const query = 'select id,name,orgCode from organizations';
    const resultSet = await connection.execute(query);
    const orgs = {};
    resultSet[0].map((org) => {
      orgs[org.id] = org;
    });
    return orgs;
  } catch (err) {
    console.log(`Error:- error thrown by indexPageData() method at ( Controller.js ) ${err}`);
    return err;
  }
});
const testFn = (async () => {
  // const connection = await mysql2.createConnection(config);
  const query = 'SELECT u.orgId, u.id, u.name, u.mobile, u.type, t.id as tutorId, b.batchId as batchId  FROM users u INNER JOIN  tutors t ON t.userId = u.id INNER JOIN batch_ownership b on b.tutorId  = t.id  ORDER BY orgId';
  const resultSet = await connection.execute(query);
  return resultSet[0];
});
const getLastNDaysFreeResources = (async (days) => {
  console.log('getLastNDaysFreeResources() executing..........');
  try {
    // const connection = await mysql2.createConnection(config);
    const query = `select count(v.orgId) as free_resources,date(v.createdAt) as date,v.orgId as orgid from videos v  where v.createdAt >= DATE(NOW()) - INTERVAL ${days} DAY GROUP BY orgId`;
    const resultSet = await connection.execute(query);
    console.log(resultSet[0]);
    return resultSet[0];
  } catch (err) {
    console.log(`Error:- error thrown by getLastNDaysFreeResources() method at ( Controller.js ) ${err}`);
    return err;
  }
});

const getTableScoredData = (async (orgs) => {
  console.log('getTableScoredData() executing..........');
  try {

  } catch (err) {
    console.log(`Error:- error thrown by getTableScoredData() method at ( Controller.js ) ${err}`);
    return err;
  }
});

const getTableData = (async (days) => {
  try {
    const attendance = await getLastNDaysAttendance(days);
    const attendanceTopics = await getLastNDaysAttendanceTopics(days);
    const announcements = await getLastNDaysAnnouncement(days);
    const homeWorks = await getLastNDaysHomework(days);
    const onlineTests = await getLastNDaysOnlineTest(days);
    const offlineTests = await getLastNDaysOfflineTest(days);
    const freeResources = await getLastNDaysFreeResources(days);
    const orgs = await getOrgs();
    console.log(attendanceTopics); // object of objects
    for (i in orgs) {
      orgs[i].attendance = 0;
      orgs[i].attendanceTopics = 0;
      orgs[i].announcements = 0;
      orgs[i].homeWorks = 0;
      orgs[i].onlineTests = 0;
      orgs[i].offlineTests = 0;
      orgs[i].freeResources = 0;
    }
    attendance.forEach((i) => {
      const id = i.orgId;
      orgs[id].attendance = i.attendance;
    });
    attendanceTopics.forEach((i) => {
      const id = i.orgId;
      orgs[id].attendanceTopics = i.topic;
    });
    announcements.forEach((i) => {
      const id = i.orgId;
      orgs[id].announcements = i.announcement;
    });
    homeWorks.forEach((i) => {
      const id = i.orgId;
      orgs[id].homeWorks = i.homeworks;
    });
    onlineTests.forEach((i) => {
      const id = i.orgId;
      orgs[id].onlineTests = i.tests;
    });
    offlineTests.forEach((i) => {
      const id = i.orgId;
      orgs[id].onlineTests = i.tests;
    });
    freeResources.forEach((i) => {
      const id = i.orgid;
      console.log(id);
      orgs[id].freeResources = i.free_resources;
    });
    return orgs; //  object  of all objects
  } catch (err) {
    console.log(`Error:- error thrown by getTableData() method at ( Controller.js ) ${err}`);
    return err;
  }
});


module.exports = {
  getOrgs,
  testFn,
  getLastNDaysAttendance,
  getLastNDaysAttendanceTopics,
  getLastNDaysAnnouncement,
  getLastNDaysHomework,
  getLastNDaysOnlineTest,
  getLastNDaysOfflineTest,
  getLastNDaysFreeResources,
  // indexPageData,
  getTableScoredData,
  getTableData,
};

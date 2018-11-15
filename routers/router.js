const express = require('express');

const router = express.Router();
const controller = require('../controllers/controller');

router.get('/', async (_req, res) => {
  try {
    // const result = await controller.getTableData(15);
    const result = await controller.getOrgs();
    console.log('result');
    console.log(result);
    res.render('index.ejs', { result });
  } catch (err) {
    res.send('server error');
    console.log(`err at / router ${err}`);
  }
});
// router.get('/:days', async (req, res) => {
//   try {
//     const day = req.params.days;
//     console.log(day);
//     const result = await controller.getTableData(day);
//     res.render('index.ejs', { result });
//   } catch (err) {
//     res.send('server error');
//     console.log(`err at / router ${err}`);
//   }
// });
router.get('/org/:id', async (req, res) => {
  res.render();
});
module.exports = router;

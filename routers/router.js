const express = require('express');

const router = express.Router();
const controller = require('../controllers/controller');

router.get('/', async (_req, res) => {
  try {
    // const result = await controller.getDafaultData();
    res.render('index.ejs', { result: [] });
  } catch (err) {
    res.send('server error');
    console.log(`err at / router ${err}`);
  }
});
router.get('/:days', async (req, res) => {
  console.log(req.params.days);
  // const result = await controller.getNDaysData();
  res.render('index.ejs', { result: [] });
});
module.exports = router;

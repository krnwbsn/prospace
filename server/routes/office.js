const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const moment = require('moment');
const bodyParser = require('body-parser');
const office = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../data/office.json'), 'utf8')
);
const writeData = (data) =>
  fs.writeFileSync(
    path.resolve(__dirname, '../data/office.json'),
    JSON.stringify(data, null, 2)
  );

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/:companyName', function (req, res) {
  const { companyName } = req.params;
  const data = office.filter(
    (item) => item.companyName.toLowerCase() === companyName.toLowerCase()
  );

  res.status(200).json(data);
});

module.exports = router;

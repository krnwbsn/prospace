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

router.post('/', function (req, res) {
  const id = moment().unix() + 12;
  const { companyName, officeName, lat, log, startDate } = req.body;
  const cap = (text) => {
    return text.replace(/(^\w{1})|(\s{1}\w{1})/g, (match) =>
      match.toUpperCase()
    );
  };

  const item = {
    officeId: id,
    companyName: cap(companyName),
    officeName: cap(officeName),
    location: { lat: parseFloat(lat), log: parseFloat(log) },
    startDate: moment(startDate).format('YYYY-MM-DD'),
    createdDate: moment().format('YYYY-MM-DD'),
    updatedDate: '',
  };

  office.push(item);
  writeData(office);

  res.status(201).json(office);
});

module.exports = router;

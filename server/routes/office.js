const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const office = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../data/office.json'), 'utf8')
);
const writeData = (data) =>
  fs.writeFileSync(
    path.resolve(__dirname, '../data/office.json'),
    JSON.stringify(data, null, 2)
  );
const moment = require('moment');
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/:id', function (req, res) {
  const { id } = req.params;
  const data = office.filter(
    (item) => item.companyId === parseInt(id)
  );

  res.status(200).json(data);
});

router.post('/', function (req, res) {
  const id = moment().unix();
  const { companyId, officeName, lat, log, startDate } = req.body;
  const cap = (text) => {
    return text.replace(/(^\w{1})|(\s{1}\w{1})/g, (match) =>
      match.toUpperCase()
    );
  };

  const item = {
    officeId: id,
    companyId: parseInt(companyId),
    officeName: cap(officeName),
    location: { lat: parseFloat(lat).toFixed(2), log: parseFloat(log).toFixed(2) },
    startDate: moment(startDate).format('YYYY-MM-DD'),
    createdDate: moment().format('YYYY-MM-DD'),
    updatedDate: '',
  };

  office.push(item);
  writeData(office);

  res.status(201).json(office);
});

router.delete('/:officeId', function (req, res) {
  const { officeId } = req.params;
  const data = office.filter((item) => item.officeId !== parseInt(officeId));
  writeData(data);

  res.status(204).json(data);
});

module.exports = router;

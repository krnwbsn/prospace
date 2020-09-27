const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const moment = require('moment');
const bodyParser = require('body-parser');
const company = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../data/company.json'), 'utf8')
);
const writeData = (data) =>
  fs.writeFileSync(
    path.resolve(__dirname, '../data/company.json'),
    JSON.stringify(data, null, 2)
  );

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/', function (req, res) {
  res.status(200).json(company);
});

router.get('/:id', function (req, res) {
  const { id } = req.params;
  const data = company.filter((item) => item.id === parseInt(id));

  res.status(200).json(data);
});

router.post('/', function (req, res) {
  const id = moment().unix();
  const {
    companyName,
    companyAddress,
    companyRevenue,
    code,
    number,
  } = req.body;

  console.log(companyName, companyAddress, companyRevenue, code, number);

  const item = {
    id: id,
    companyName: companyName,
    companyAddress: companyAddress,
    companyRevenue: parseInt(companyRevenue),
    phoneNumber: { code: `(${code})`, number: number },
    createdDate: moment().format('YYYY-MM-DD'),
    updatedDate: '',
  };

  company.push(item);
  writeData(company);

  res.status(201).json(company);
});

router.delete('/:id', function (req, res) {
  const { id } = req.params;
  const data = company.filter((item) => item.id !== parseInt(id));
  writeData(data);

  res.status(204).json(data);
});

module.exports = router;

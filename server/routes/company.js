const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const company = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../data/company.json'), 'utf8')
);
const writeData = (data) =>
  fs.writeFileSync(
    path.resolve(__dirname, '../data/company.json'),
    JSON.stringify(data, null, 2)
  );

router.get('/', function (req, res) {
  res.status(200).json(company);
});

router.get('/:id', function (req, res) {
  const { id } = req.params;
  const data = company.filter((item) => item.id === parseInt(id));

  res.status(200).json(data);
});

module.exports = router;

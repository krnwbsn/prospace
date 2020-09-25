const http = require('http');
const express = require('express');
const companyRouter = require('./routes/company');
const officeRouter = require('./routes/office');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/company', companyRouter);
app.use('/office', officeRouter);

app.use('/', function (req, res) {
  res.send('Server is running');
});

const server = http.createServer(app);
const port = 4000;
server.listen(port);
console.debug('Server listening on port ' + port);

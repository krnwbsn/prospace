const http = require('http');
const express = require('express');
const companyRouter = require('./routes/company');

const app = express();
app.use(express.json());

app.use('/', function (req, res) {
  res.send('Server is running');
});

app.use('/company', companyRouter);

const server = http.createServer(app);
const port = 4000;
server.listen(port);
console.debug('Server listening on port ' + port);

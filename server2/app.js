const express = require('express');
const cors = require('cors');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3003;

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }),
);

app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

app.use(cookieParser());

app.post('/cookie', (req, res) => {
  res.cookie('cookieMonster', req.body.text, {maxAge: 3600});
  res.json({ msg: 'ok' });
});


// API
app.get('/accounts', (req, res) => {
  let allData = fs.readFileSync('./data/accounts.json', 'utf8');
  allData = JSON.parse(allData);
  res.json(allData);
});

app.post('/accounts', (req, res) => {
  let allData = fs.readFileSync('./data/accounts.json', 'utf8');
  allData = JSON.parse(allData);
  const id = uuidv4();
  const data = {
    name: req.body.name,
    lastName: req.body.lastName,
    balance: req.body.balance,
    deleting: req.body.deleting,
    id,
  };
  promiseId = req.body.promiseId;
  allData.push(data);
  allData = JSON.stringify(allData);
  fs.writeFileSync('./data/accounts.json', allData, 'utf8');
  res.json({
    message: 'ok',
    promiseId,
    id,
  });
});

app.delete('/accounts/:id', (req, res) => {
  let allData = fs.readFileSync('./data/accounts.json', 'utf8');
  allData = JSON.parse(allData);
  let deletedData = allData.filter((d) => req.params.id !== d.id);
  deletedData = JSON.stringify(deletedData);
  fs.writeFileSync('./data/accounts.json', deletedData, 'utf8');
  res.json({ message: 'ok' });
});

app.put('/accounts/:id', (req, res) => {
  let allData = fs.readFileSync('./data/accounts.json', 'utf8');
  allData = JSON.parse(allData);

  const data = {
    name: req.body.name,
    lastName: req.body.lastName,
    balance: req.body.balance,
    deleting: req.body.deleting,
  };

  let editedData = allData.map((d) =>
    req.params.id === d.id ? { ...d, ...data } : { ...d },
  );
  editedData = JSON.stringify(editedData);
  fs.writeFileSync('./data/accounts.json', editedData, 'utf8');
  res.json({ message: 'ok' });
});

app.listen(port, () => {
  console.log(`LN is on port number: ${port}`);
});

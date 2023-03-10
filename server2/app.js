const express = require('express');
const cors = require('cors');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = 3003;

app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(express.json());

// API
app.post('/accounts', (req, res) => {
  let allData = fs.readFileSync('./data/accounts.json', 'utf8');
  allData = JSON.parse(allData);
  const data = { ...req.body };
  data.id = uuidv4();
  allData.push(data);
  allData = JSON.stringify(allData);
  fs.writeFileSync('./data/accounts.json', allData, 'utf8');
  res.json({ message: 'ok' });
});

app.get('/accounts', (req, res) => {
  let allData = fs.readFileSync('./data/accounts.json', 'utf8');
  allData = JSON.parse(allData);
  res.json(allData);
});

app.delete('/accounts/:id', (req, res) => {
  let allData = fs.readFileSync('./data/accounts.json', 'utf8');
  allData = JSON.parse(allData);
  let deletedData = allData.filter((d) => req.params.id !== d.id);
  deletedData = JSON.stringify(deletedData);
  fs.writeFileSync('./data/accounts.json', deletedData, 'utf8');
  res.json({ message: 'ok' });
});

app.listen(port, () => {
  console.log(`LN is on port number: ${port}`);
});

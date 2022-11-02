import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import Connections from './db/db.js';

const app = express();
app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

const db = Connections();

app.post('/signup', function (req, res) {
  let lname = req.body.lname;
  let fname = req.body.fname;
  console.log(req.body);
  db.collection('datas').insertOne(req.body);
  console.log('data reacieved');
});

const PORT = 8000;

app.get('');

app.listen(PORT, () => console.log(`running successfully $(PORT)`));

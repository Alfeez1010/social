import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import Connections from './db/db.js';
import userdata from './model/mongoSchema.js';

const app = express();
app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

const db = Connections();

app.post('/signup', async (req, res) => {
  console.log(req.body);
  try {
    await userdata.create({
      lname: req.body.lname,
      email: req.body.email,
      fname: req.body.fname,

      password: req.body.password,
    });
    res.json({ status: 'ok' });
    console.log('succes');
  } catch (error) {
    console.log(error);
    res.json({ status: error });
  }
});

// app.post('/login', fun);

const PORT = 8000;

app.get('');

app.listen(PORT, () => console.log(`running successfully $(PORT)`));

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import Connections from './db/db.js';
import userdata from './model/mongoSchema.js';
import bcrypt from 'bcrypt';
import nodemailer from 'nodemailer';
import path from 'path';

const app = express();
app.use(cors());

app.use(bodyParser.json({ extended: true }));

app.use(bodyParser.urlencoded({ extended: true }));

const db = Connections();
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, '../SocialMedia/front/build')));

app.post('/signup', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    console.log(req.body.password);
    const datas = await userdata.create({
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
      password: hashedPassword,
    });
    res.json({ status: 'ok' });
    console.log(hashedPassword);
    // console.log(req.body);

    // res.redirect('/home');
  } catch (error) {
    console.log(error);
    res.json({ status: error });
    // res.redirect('/home');
  }
});
app.post('/login', async (req, res) => {
  // console.log(dataUser);
  const user = await userdata.findOne({
    email: req.body.email,
    // password: req.body.password,
  });
  if (user) {
    const a = await bcrypt.compare(req.body.password, user.password);
    console.log(a);
    if (a == true) {
      return res.status(201).json({
        status: 'ok',
        user: true,
        message: 'successfully logined',
      });
    } else {
      return res.status(401).json({
        status: 'error',
        user: false,
        message: ' password incorrect',
      });
    }
  } else {
    return res.status(401).json({
      status: 'error',
      user: false,
      message: 'user incorrect',
    });
  }
});
const mail = '';
app.post('/reset', async (req, res) => {
  // console.log(req.body);

  const _otp = Math.floor(100000 + Math.random() * 900000);
  console.log(_otp);

  let user = await userdata.findOne({ email: req.body.email });
  mail: req.body.email;
  if (!user) {
    res.send({ code: 500, message: 'user not found' });
  }
  // else {
  //   return res.status(401).json({
  //     status: 'error',
  //     user: false,
  //     message: 'user not found',
  //   });
  // }
  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  let info = await transporter.sendMail({
    from: 'fakeuser8364@gmail.com',
    to: req.body.email, // list of receivers
    subject: 'OTP', // Subject line
    text: String(_otp),
    html: `<html>
            < body >
            Hello and welcome
        </ >
       </html > `,
  });

  if (info.messageId) {
    console.log(info, 84);
    userdata
      .updateOne({ email: req.body.email }, { otp: _otp })
      .then((result) => {
        res.send({ code: 200, message: 'otp send' });
      })
      .catch((err) => {
        res.send({ code: 500, message: 'Server otp err' });
      });
  } else {
    res.send({ code: 500, message: 'Server err' });
  }
});
console.log(mail);
app.post('/otp', async (req, res) => {
  userdata
    .findOne({ otp: req.body.otp })
    .then((result) => {
      // console.log(result);
      userdata
        .updateOne({ email: result.email }, { password: req.body.password })
        .then((result) => {
          res.send({ code: 200, message: 'Password updated' });
        });
    })
    .catch((err) => {
      console.log(err);
      res.send({
        code: 500,
        message: 'error while updating',
      });
    })
    .catch((err) => {
      res.send({
        code: 500,
        message: 'otp is wrong',
      });
    });
});
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../SocialMedia/front/build/index.html'))
);
const PORT = 8000;

app.listen(PORT, () => console.log(`running successfully $(PORT)`));
// C:\Users\alfee\OneDrive\Desktop\internship\material ui\social\SocialMedia\front\build\index.html

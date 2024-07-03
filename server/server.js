const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const connect=require('./databasegym');
const adminRouter = require('./router/admin.router');
const trainersRouter = require('./router/trainers.router');
const memberRouter = require('./router/members.router');
const bookingRouter = require('./router/booking.router');

const app=express();
dotenv.config();
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 ,
  credentials: true
};
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', trainersRouter);
app.use('/api', memberRouter);
app.use('/api', adminRouter);
app.use('/api', bookingRouter);
connect();

app.listen(process.env.PORT||3000, () => {
  console.log(`running on port ${process.env.PORT}`);
});
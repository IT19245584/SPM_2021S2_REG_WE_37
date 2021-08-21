const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const url = process.env.ATLAS_URI;
global.URL = url;

mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true});

const connection = mongoose.connection;

connection.once('open',()=>{
    console.log("MongoDB connection successfully");
});

const user = require('./routes/user.js');
app.use('/user', user);

const courses = require("./routes/Course.js");
app.use("/course", courses);

const lessons = require("./routes/Lesson.js");
app.use("/lesson", lessons);

const ExamRegistration = require("./routes/ExamRegistration")
app.use("/ExamRegistration", ExamRegistration)

const Payment = require("./routes/Payment")
app.use("/Payment", Payment)


app.listen(port,() =>{
    console.log(`Server is running on port: ${port}`);
});
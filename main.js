const express = require('express')
const mongoose = require('mongoose')
const app = express()

    app.listen(7000)
console.log('App running http://localhost:7000')


//create and/or connect to a db
mongoose.connect("mongodb://localhost:27017/Exams23002", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
//creating schema
const studentSchema = new mongoose.Schema({
    name: String,
    sid: Number
  });

// defining model
const Student = mongoose.model("examrecord", studentSchema);

const arvee = new Student({
    name: "Arvee Flores",
    sid: 300366643
  });

  Student.insertMany([arvee])
  .then(function () {
    console.log("Successfully added student record to DB");
    mongoose.connection.close();
  })
  .catch(function (err) {
    console.log(err);
  });

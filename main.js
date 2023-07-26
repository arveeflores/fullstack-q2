const express = require('express')
const mongoose = require('mongoose')
const app = express()
const dotenv = require('dotenv')

dotenv.config()


    app.listen(7000)
console.log('App running')

//const uri = process.env.ATLAS_URI;
const uri = "mongodb+srv://tempuser:123@cluster0.f9d6o.gcp.mongodb.net/Exams23002?retryWrites=true&w=majority"
//create and/or connect to a db
mongoose.connect(uri, {
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

/*const arvee = new Student({
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
  });*/


  app.get('/', (req, res) => {
    const arvee = new Student({
      name: "Arvee Flores",
      sid: 300366643
    });
  
    Student.insertMany([arvee])
    res.send({entry:arvee});
    });

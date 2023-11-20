const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const multer = require('multer');

const emp = require('./Routes/emp');
const hra = require('./Routes/hra')
const pf = require('./Routes/pf')
const example=require('./Routes/example')
// const upload=require('./Routes/upload');

const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({ extended :  true}));
app.use(bodyparser.json());
app.get('/',(req,res)=>{
    res.send("successs");
})
app.use('/emp', emp);
app.use('/hra',hra);
app.use('/pf',pf);
app.use('/example',example);
// app.use('/upload',upload);

const storage = multer.diskStorage({
    destination: function (req, files, callback) {
        callback(null, __dirname + '/Routes/uploads');
    },
    // Sets file(s) to be saved in uploads folder in same directory
    filename: function (req, files, callback) {
        callback(null, files.originalname);
    }
    // Sets saved filename(s) to be original filename(s)
  })
  
// Set saved storage options:
const upload = multer({ storage: storage })

app.post("/upload", upload.array("files"), (req, res) => {
// Sets multer to intercept files named "files" on uploaded form data

    console.log(req.body); // Logs form body values
    console.log(req.files); // Logs any files
    res.json({ message: "File(s) uploaded successfully" });

});


module.exports = app;
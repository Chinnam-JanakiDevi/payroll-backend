// To upload a file i used the utube Channel 
// link:https://www.youtube.com/watch?v=TZvMLWFVVhE&t=125s
//uploads is a folder i uploaded



// const express = require("express");
// const multer = require('multer');
// const cors = require('cors');
// const Router = express.Router();

// var app = express();
// // app.use(cors()); // Allows incoming requests from any IP

// // Start by creating some disk storage options:
// const storage = multer.diskStorage({
//     destination: function (req, files, callback) {
//         callback(null, __dirname + '/uploads');
//     },
//     // Sets file(s) to be saved in uploads folder in same directory
//     filename: function (req, files, callback) {
//         callback(null, files.originalname);
//     }
//     // Sets saved filename(s) to be original filename(s)
//   })
  
// // Set saved storage options:
// const upload = multer({ storage: storage })

// app.post("/upload", upload.array("files"), (req, res) => {
// // Sets multer to intercept files named "files" on uploaded form data

//     console.log(req.body); // Logs form body values
//     console.log(req.files); // Logs any files
//     res.json({ message: "File(s) uploaded successfully" });

// });

// module.exports=Router;
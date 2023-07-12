const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const emp = require('./Routes/emp');
const hra = require('./Routes/hra')
const pf = require('./Routes/pf')
const example=require('./Routes/example')
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
module.exports = app;
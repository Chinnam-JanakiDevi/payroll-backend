const express = require("express");
const example = require("../database");
// const Mapping = require("./Operations");
const Router = express.Router();
Router.get("/Read:_ID", (req, res) => {
    const Details = req.params._ID;
    example.example("summer", "Read", Details)
      .then((result) => {
        res.send({ Message: result.Message, Result: result.rows });
        console.log(result);
      })
      .catch((err) => {
        res.send(err.message);
      });
  });
  
  module.exports = Router;
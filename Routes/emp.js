const express = require("express");
const empfun = require("../database");
// const Mapping = require("./Operations");
const Router = express.Router();

Router.post("/Insert", (req, res) => {
  let Details = req.body;
  console.log(Details);
  empfun.empfun("emptable", "Insert", Details)
    .then((result) => {
      res.send(result.Message);
      console.log(result);
    })
    .catch((err) => {
      res.send(err.message);
    });
});
Router.delete("/Delete:ID", (req, res) => {
  let Details = req.params.ID;
  empfun.empfun("emp_table", "Delete", Details)
    .then((result) => {
      res.send(result.Message);
      console.log(result);
    })
    .catch((err) => {
      res.send(err.message);
    });
});
Router.put("/Update:ID", (req, res) => {
  let Details = req.params.ID;
  let UpdatedDetails = req.body;
  console.log(UpdatedDetails);
  console.log(Details);
  empfun.empfun("emp_table", "Update", Details, UpdatedDetails)
    .then((result) => {
      res.send(result.Message);
      console.log(result);
    })
    .catch((err) => {
      res.send(err.message);
    });
});
Router.get("/Read:_ID", (req, res) => {
  const Details = req.params._ID;
  empfun.empfun("emp_table", "Read", Details)
    .then((result) => {
      res.send({ Message: result.Message, Result: result.rows });
      console.log(result);
    })
    .catch((err) => {
      res.send(err.message);
    });
});

module.exports = Router;
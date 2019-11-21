var express = require("express");
// Initialize Express
var router = express.Router();
// Require all models
var db = require("../models");

// Route for getting all Articles from the db
router.get("/voucher", function(req, res) {
  // Grab every document in the Articles collection
  db.Voucher.findOne({ displayed: false })
    .then(function(dbVoucher) {
      // If we were able to successfully find Voucher not yet displayed, send them back to the client
      res.json(dbVoucher);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

// Route for saving/updating the Winner's details
router.post("/winner", function(req, res) {
  // Create a new Gamer object and pass the req.body to the entry
  const newGamer = new db.Gamer(req.body);
  db.Gamer.create(newGamer, (err, gamerData) => {
    if (err) return res.status(500).send(err);
    console.log(gamerData);
    return res.status(200).send(gamerData);
  });
});

router.get("/scoreboard", function(req, res) {
  db.Gamer.find({})
    .limit(10)
    .sort({ score: "desc", time: "asc" })
    .then(function(dbGamer) {
      res.json(dbGamer);
      console.log(dbGamer);
    })
    .catch(function(err) {
      res.json(err);
    });
});

module.exports = router;

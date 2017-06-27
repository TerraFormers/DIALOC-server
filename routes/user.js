const express = require("express");
const router = express.Router();
const queries = require("../db/queries");


router.get("/", function(req, res, next) {
  queries.getAll().then(function(users) {
    res.json(users);
  });
});

router.get('/antipodes', (req, res, next) => {
  queries.getAntipodes().then((antipodes) => {
    res.json(antipodes);
  });
});

router.post('/:id', (req, res, next) => {
  queries.createAntipode(req.params.id, req.body).then((result) => {
    res.json(result);
  });
});


module.exports = router;

const express = require('express');
const router = express.Router();

const { listAllSubscrisbers,
  addNewSubscriber } = require('../controllers/subscriber');

router.route('/')
  .get(listAllSubscrisbers)
  .post(addNewSubscriber);

module.exports = router;
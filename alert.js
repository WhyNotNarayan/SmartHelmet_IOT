const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Alert route working');
});

module.exports = router;
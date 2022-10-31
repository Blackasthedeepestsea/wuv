const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({message: 'get challenge'});
});

router.post('/', (req, res) => {
  res.status(200).json({message: 'set challenge'});
});

router.put('/:id', (req, res) => {
  res.status(200).json({message: `update challenge ${req.params.id}`});
});

router.delete('/:id', (req, res) => {
  res.status(200).json({message: `delete challenge ${req.params.id}`});
});

module.exports = router;

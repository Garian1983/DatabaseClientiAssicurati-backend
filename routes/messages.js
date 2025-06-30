const router = require('express').Router();
const Message = require('../models/Message');

// GET all messages
router.get('/', async (req, res) => {
  try {
    const msgs = await Message.find().populate('clientId', 'nome cognome cellulare');
    res.json(msgs);
  } catch (err) { res.status(500).send(err); }
});

// POST create log
router.post('/', async (req, res) => {
  try {
    const msg = await Message.create(req.body);
    res.status(201).json(msg);
  } catch (err) { res.status(400).send(err); }
});

module.exports = router;

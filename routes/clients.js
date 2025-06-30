const router = require('express').Router();
const Client = require('../models/Client');

// GET all
router.get('/', async (req, res) => {
  try {
    const clients = await Client.find().sort({ createdAt: -1 });
    res.json(clients);
  } catch (err) { res.status(500).send(err); }
});

// POST create
router.post('/', async (req, res) => {
  try {
    const client = await Client.create(req.body);
    res.status(201).json(client);
  } catch (err) { res.status(400).send(err); }
});

// PUT update
router.put('/:id', async (req, res) => {
  try {
    const client = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(client);
  } catch (err) { res.status(400).send(err); }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    await Client.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  } catch (err) { res.status(400).send(err); }
});

module.exports = router;

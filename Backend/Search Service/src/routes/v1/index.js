const express = require('express');
const TicketController = require('../../controllers/ticket-controller');

const router = express.Router();

router.post('/ticket', TicketController.create);
router.delete('/ticket/:id', TicketController.destroy);
router.get('/ticket/:id', TicketController.get);
router.get('/tickets/:state', TicketController.getByState);
router.get('/tickets', TicketController.getAll);
router.patch('/ticket/:id', TicketController.update);

module.exports = router;
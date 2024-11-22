const { Router } = require('express');
const router = Router();

const conciertoController = require('../controllers/conciertoController');
const ticketController = require('../controllers/ticketController');

router.get('/conciertos', conciertoController.getConciertos);
router.get('/conciertos/:id', conciertoController.getConciertoPorId);
router.post('/conciertos', conciertoController.crearConcierto);
router.put('/conciertos/:id', conciertoController.actualizarConcierto);
router.put('/conciertos/:id', conciertoController.borrarConcierto);

router.get('/tickets', ticketController.getTickets);
router.get('/tickets/:id', ticketController.getTicketPorId);
router.post('/tickets', ticketController.crearTicket);
router.put('/tickets/:id', ticketController.actualizarTicket);
router.put('/tickets/:id', ticketController.borrarTicket);

module.exports = router;
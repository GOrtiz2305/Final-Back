const Ticket = require('../models/index').Ticket
const Concierto = require('../models/index').Concierto

module.exports = {

    //Get todas los conciertos
    async getTickets(req, res){
        try {
            const tickets = await Ticket.findAll(
                {
                    include: [
                        {
                            model: Concierto,
                            as: 'concierto',
                        }
                    ]
                }
            );
            res.json(tickets);
        } catch (error) {
            console.log(error);
            res.json({ error: "Error en el controlador" });
        }
    },

    async getTicketPorId(req, res){
        try {
            const { id } = req.params;
            const ticket = await Ticket.findByPk(id,
                {
                    include: [
                        {
                            model: Concierto,
                            as: 'concierto',
                        }
                    ]
                }
            );
            res.json(ticket);
        } catch (error) {
            console.log(error);
            res.json({ error: "Error en el controlador" });
        }
    },

    async crearTicket(req, res){
        try {
            const { nombre, telefono, concierto } = req.body;
            const ticket = await Ticket.create({ nombre, telefono, concierto });
            res.json(ticket);
        } catch (error) {
            console.log(error);
            res.json({ error: "Error en el controlador" });
        }
    },

    async actualizarTicket(req, res){
        try {
            const { id } = req.params;
            const { nombre } = req.body;
            const ticket = await Ticket.update({ nombre }, { where: { id } });
            res.json(ticket);
        } catch (error) {
            console.log(error);
            res.json({ error: "Error en el controlador" });
        }
    },

    //Borrado logico
    async borrarTicket(req, res){
        try {
            const { id } = req.params;
            const ticket = await Ticket.update({ estado: false }, { where: { id } });
            res.json(ticket);
        } catch (error) {
            console.log(error);
            res.json({ error: "Error en el controlador" });
        }
    }
}
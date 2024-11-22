const Concierto = require('../models/index').Concierto

module.exports = {

    //Get todas los conciertos
    async getConciertos(req, res){
        try {
            const brands = await Concierto.findAll();
            res.json(brands);
        } catch (error) {
            console.log(error);
            res.json({ error: "Error en el controlador" });
        }
    },

    async getConciertoPorId(req, res){
        try {
            const { id } = req.params;
            const brand = await Concierto.findByPk(id);
            res.json(brand);
        } catch (error) {
            console.log(error);
            res.json({ error: "Error en el controlador" });
        }
    },

    async crearConcierto(req, res){
        try {
            const { nombre } = req.body;
            const concierto = await Concierto.create({ nombre });
            res.json(concierto);
        } catch (error) {
            console.log(error);
            res.json({ error: "Error en el controlador" });
        }
    },

    async actualizarConcierto(req, res){
        try {
            const { id } = req.params;
            const { nombre } = req.body;
            const concierto = await Concierto.update({ nombre }, { where: { id } });
            res.json(concierto);
        } catch (error) {
            console.log(error);
            res.json({ error: "Error en el controlador" });
        }
    },

    //Borrado logico
    async borrarConcierto(req, res){
        try {
            const { id } = req.params;
            const concierto = await Concierto.update({ estado: false }, { where: { id } });
            res.json(concierto);
        } catch (error) {
            console.log(error);
            res.json({ error: "Error en el controlador" });
        }
    }
}
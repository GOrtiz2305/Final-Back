const Ticket = require("./ticketModel");
const Concierto = require("./conciertoModel");

// Define the associations here
Concierto.hasMany(Ticket, {
    foreignKey: 'concierto_id',
    as: 'tickets'
});

Ticket.belongsTo(Concierto, {
    foreignKey: 'concierto_id',
    as: 'concierto'
});

// Export the models
module.exports = {
    Concierto,
    Ticket
};

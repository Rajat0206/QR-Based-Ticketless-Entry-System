const { EntryTicket } = require("../models/index");

class TicketRepository {

    async createTicket({ name, price, state }) { 
        try {
            const entryTicket = await EntryTicket.create({
                monumentName : name,
                price,
                state
            });
            return entryTicket;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async deleteTicket(monumentId) {
        try {
            await EntryTicket.destroy({
                where: {
                    id: monumentId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async updateTicket(monumentId, data) {
        try {
            const entryTicket = await EntryTicket.findByPk(monumentId);

            if(data.name)
            {
                entryTicket.monumentName = data.name;
            }
            
            if(data.price)
            {
                entryTicket.price = data.price;
            }
            
            if(data.state)
            {
                entryTicket.state = data.state;
            }
            
            await entryTicket.save();
            return entryTicket;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getTicket(monumentId) {
        try {
            const entryTicket = await EntryTicket.findByPk(monumentId);
            return entryTicket;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getTicketsByState(state) {
        try {
            const entryTicket = await EntryTicket.findAll({ where: { state } });
            return entryTicket;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getAll() {
        try {
            const entryTicket = await EntryTicket.findAll();
            return entryTicket;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
}

module.exports = TicketRepository;
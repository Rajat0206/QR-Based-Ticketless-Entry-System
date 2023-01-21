const { TicketRepository } = require('../repository/index');

const ticketRepository = new TicketRepository();

class TicketService {
    constructor() {
        this.ticketRepository = ticketRepository;
    }

    async createTicket(data) {
        try {
            const monument = await this.ticketRepository.createTicket(data);
            return monument;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async deleteTicket(monumentId) {
        try {
            const response = await this.ticketRepository.deleteTicket(monumentId);
            return response;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async updateTicket(monumentId, data) {
        try {
            const monument = await this.ticketRepository.updateTicket(monumentId, data);
            return monument;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async getTicket(monumentId) {
        try {
            const monument = await this.ticketRepository.getTicket(monumentId);
            return monument;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async getTicketsByState(state) {
        try {
            const monuments = await this.ticketRepository.getTicketsByState(state);
            return monuments;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async getAll() {
        try {
            const monuments = await this.ticketRepository.getAll();
            return monuments;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }
}

module.exports = TicketService;
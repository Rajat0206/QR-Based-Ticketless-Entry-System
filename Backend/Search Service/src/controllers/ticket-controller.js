const { TicketService } = require('../services/index');

const ticketService = new TicketService();

// POST -> /ticket -> req.body
const create = async (req, res) => {
    try {
        const monument = await ticketService.createTicket(req.body);
        return res.status(201).json({
            data: monument,
            success: true,
            message: 'Successfully created a ticket',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a ticket',
            err: error
        });
    }
}

// DELETE -> /ticket/:id
const destroy = async (req, res) => {
    try {
        const response = await ticketService.deleteTicket(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully deleted a ticket',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to delete the ticket',
            err: error
        });
    }
}

// GET -> /ticket/:id
const get = async (req, res) => {
    try {
        const response = await ticketService.getTicket(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully fetched a ticket',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to get the ticket',
            err: error
        });
    }
}

// GET -> /tickets
const getAll = async (req, res) => {
    try {
        const response = await ticketService.getAll();
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully fetched all tickets',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to get the tickets',
            err: error
        });
    }
}

// GET -> /tickets/:state
const getByState = async (req, res) => {
    try {
        const response = await ticketService.getTicketsByState(req.params.state);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully fetched all tickets',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to get the tickets',
            err: error
        });
    }
}

// Patch -> /ticket/:id -> req.body
const update = async (req, res) => {
    try {
        const response = await ticketService.updateTicket(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully fetched a ticket',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update the ticket',
            err: error
        });
    }
}

module.exports = {
    create,
    destroy,
    get,
    update,
    getAll,
    getByState
}
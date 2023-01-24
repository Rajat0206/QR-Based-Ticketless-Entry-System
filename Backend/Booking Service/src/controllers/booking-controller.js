const { createBooking, generateQR } = require('../services/booking-service');

const create = async (req, res) => {
    try {
        const book = await createBooking(req.body);
        return res.status(201).json({
            clientSecret: book.secret,
            data: book.data,
            success: true,
            message: 'Booking Successful',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            clientSecret: undefined,
            success: false,
            message: 'Payment Failed',
            err: error
        });
    }
}

const createQR = async (req, res) => {
    try {
        const qr = await generateQR(req.body);
        return res.status(201).json({
            qr,
            success: true,
            message: 'QR Generation Successful',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            qr: undefined,
            success: false,
            message: 'QR Generation Failed',
            err: error
        });
    }
}

module.exports = {
    create,
    createQR
};
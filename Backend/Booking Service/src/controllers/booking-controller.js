const createBooking = require('../services/booking-service');

const create = async (req, res) => {
    try {
        const book = await createBooking(req.body);
        return res.status(201).json({
            qr: book.qr,
            clientSecret: book.secret,
            success: true,
            message: 'Booking Successful',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            qr: undefined,
            clientSecret: undefined,
            success: false,
            message: 'Payment Failed',
            err: error
        });
    }
}

module.exports = create;
const pay = require('../services/payment-service');

const create = async (req, res) => {
    try {
        const secret = await pay(req.body);
        return res.status(201).json({
            clientSecret: secret,
            success: true,
            message: 'Payment Successful',
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

module.exports = create;
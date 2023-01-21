const { SECRET_API_KEY } = require("../config/serverConfig");
const stripe = require('stripe')(SECRET_API_KEY);
const calculateOrderAmount = require('../utils/amount');

const pay = async ({price}) => {
    const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(price),
        currency: "inr",
        automatic_payment_methods: {
          enabled: true,
        },
    });

    return paymentIntent.client_secret;
};

module.exports = pay;
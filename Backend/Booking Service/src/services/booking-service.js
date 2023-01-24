const axios = require('axios');
var QRCode = require('qrcode')

async function createBooking({ name, phonenumber, guests, id, indian, date }) {
    try {
        const response = await axios.get(`http://localhost:3000/api/v1/ticket/${id}`);
        if(!response.data.success) {
            throw {message: "Wrong ID"};
        }
        
        const price = response.data.data.price;
        var amount = price * guests;

        if(!indian) {
            amount = amount * 3;
        }

        const pay = await axios.post(`http://localhost:3002/api/v1/payment`, { price: amount });

        if(!pay.data.success) {
            throw {message: "Payment Failed"};
        }

        var user = {
            data: {
                TicketFor: response.data.data.monumentName,
                Name: name,
                PhoneNumber: phonenumber,
                Indian: indian,
                DATE: date,
                Tickets: guests,
                Amount: amount,
            },
            secret: pay.data.clientSecret
        }

        return user;

    } catch (error) {
        console.log("Something went wrong in Payment");
        throw {error};
    }
}

async function generateQR(data) {
    user = {
        ...data,
        Payment: "Paid"
    };

    try{
        const qr = await QRCode.toDataURL(JSON.stringify(user), { errorCorrectionLevel: 'H', version: 15 });
        return qr;

    } catch (error) {
        console.log("Something went wrong in QR Generation");
        throw {error};
    }
}

module.exports = {
    createBooking,
    generateQR
};

// name, mobile number, foreigner, no of guests, email, id
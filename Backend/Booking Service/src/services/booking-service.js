const axios = require('axios');
var QRCode = require('qrcode')

async function createBooking({ name, phonenumber, guests, email, id, indian}) {
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
            TicketFor: response.data.data.monumentName,
            Name: name,
            PhoneNumber: phonenumber,
            Email: email,
            Tickets: guests,
            Amount: amount,
            Payment: "Paid",
            Indian: indian
        }

        const qr = await QRCode.toDataURL(JSON.stringify(user), { errorCorrectionLevel: 'H', version: 15 });
        console.log(qr);      
        var obj = {
            secret: pay.data.clientSecret,
            qr
        };

        return obj;
    
    } catch (error) {
        console.log("Something went wrong in Booking Service");
        throw {error};
    }
}

module.exports = createBooking;

// name, mobile number, foreigner, no of guests, email, id
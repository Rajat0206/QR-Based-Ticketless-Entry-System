const express = require("express");
const axios = require('axios');
const app = express();

app.use(express.static("public"));
app.use(express.json());

app.post("/create-payment-intent", async (req, res) => {

  const { obj } = req.body;
  const pay = await axios.post(`http://localhost:3001/api/v1/book`, obj);
  
  res.send({
    clientSecret: pay.data.clientSecret
  });
});

app.post("/qr", async (req, res) => {

  const { userObject } = req.body;
  const QRcode = await axios.post(`http://localhost:3001/api/v1/generateQR`, userObject);
  
  res.send({
    qr: QRcode.data.qr
  });
});

app.listen(4242, () => console.log("Node server listening on port 4242!"));
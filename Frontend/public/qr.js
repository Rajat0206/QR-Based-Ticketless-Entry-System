const image = document.getElementById("QRcode");
var qr = localStorage.getItem("imageQR");
console.log(qr);
image.src = qr;
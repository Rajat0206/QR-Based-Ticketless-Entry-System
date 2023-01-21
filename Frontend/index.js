var monuments = [
    {name: "Taj Mahal", Price: 20},
    {name: "Red Fort", Price: 20},
    {name: "Jantar Mantar", Price: 20},
    {name: "Raddd", Price: 20}
];
list = document.getElementById("suggestions");
var src = ''
for(var i = 0; i < monuments.length; i++) {
    src += `<option value="${monuments[i].name}">${monuments[i].name}</option>`;
}
list.innerHTML = src;

document.getElementById("pay").onclick = function click() {
    temp = {
        Name: document.getElementById("fname").val + document.getElementById("sname").val,
        PhoneNumber: document.getElementById("phone").val
    };

    console.log(temp.PhoneNumber);
}
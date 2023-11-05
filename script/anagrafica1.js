//script calendario

var dataInput = document.getElementById("data");

dataInput.addEventListener('click', function() {
var data = new Date();
var oggi = data.getDate();
var mese = data.getMonth() + 1;
var anno = data.getFullYear();
var dataMinima = anno + "-" + (mese < 10 ? "0" + mese : mese) + "-" + (oggi < 10 ? "0" + oggi : oggi);
dataInput.min = dataMinima;

});
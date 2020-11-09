var number = 12.356;

// toString
document.getElementById('name').innerHTML = number.toString();

// checking typeof
console.log(typeof number.toString()); //string
console.log(typeof number); //number

// toFixed
document.getElementById('name').innerHTML = number.toFixed();

// toFixed with parameter
document.getElementById('name').innerHTML = number.toFixed(2);

// GLOBAL METHOD
var txtNumber = "12.356";
document.getElementById('name').innerHTML = Number(txtNumber);
// document.getElementById('name').innerHTML = typeof Number(txtNumber);

document.getElementById('name').innerHTML = parseInt(txtNumber);
// document.getElementById('name').innerHTML = typeof parseInt(txtNumber);

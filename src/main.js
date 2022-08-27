/* Get form Elements*/
var form = document.querySelector('.inputs');
/* Get input from user */
var num01 = document.querySelector('#num01');
var num02 = document.querySelector('#num02');
/* ---------------------------------------------*/
/* Function to find maximum between two numbers.*/
/* ---------------------------------------------*/
function maxNumberBT2(x, y) {
    if (x > y) {
        return ('First Number(' + x + ') is greater');
    }
    else if (x == y) {
        return ('Both Numbers are Equal');
    }
    else {
        return ('Second Number(' + y + ') is Greater');
    }
}
/* Creat Event lisytener that will react on submit the button */
form.addEventListener("submit", function (e) {
    e.preventDefault();
    /* Print the output in cosole */
    var max = maxNumberBT2(num01.valueAsNumber, num02.valueAsNumber);
    console.log(max);
});
/* ---------------------------------------------*/
/* Function to find maximum between three numbers.*/
/* ---------------------------------------------*/
/* Get form Elements*/
var form02 = document.querySelector('.inputs-2');
/* Get input from user */
var num01_2 = document.querySelector('#num01-2');
var num02_2 = document.querySelector('#num02-2');
var num03_2 = document.querySelector('#num03-2');
function maxNumberBT3(x, y, z) {
    if (x > y && x > z) {
        return ('The First Number(' + x + ') is Greater');
    }
    else if (y > x && y > z) {
        return ('The Second Number(' + y + ') is Greater');
    }
    else if (z > x && z > y) {
        return ('The Third Number(' + z + ') is Greater');
    }
    else if (x == y && x > z) {
        return ('The First Number(' + x + ') and The Second Number(' + y + ') are equal and greater than Third Number(' + z + ') ');
    }
    else if (x == z && x > y) {
        return ('The First Number(' + x + ') and The Third Number(' + z + ') are equal and greater than Third Number(' + y + ') ');
    }
    else if (x == y && x < z) {
        return ('The First Number(' + x + ') and The Second Number(' + y + ') are equal and Less than Third Number(' + z + ') ');
    }
    else if (x == z && x < y) {
        return ('The First Number(' + x + ') and The Third Number(' + z + ') are equal and Less than Third Number(' + y + ') ');
    }
    else {
        return ('All Numbers are equal');
    }
}
/* Creat Event lisytener that will react on submit the button */
form02.addEventListener("submit", function (e) {
    e.preventDefault();
    /* Print the output in cosole */
    var max3 = maxNumberBT3(num01_2.valueAsNumber, num02_2.valueAsNumber, num03_2.valueAsNumber);
    console.log(max3);
});

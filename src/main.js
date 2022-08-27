/* Get form Elements*/
var form = document.querySelector('.inputs');
/* Get input from user */
var num01 = document.querySelector('#num01');
var num02 = document.querySelector('#num02');
/* The function that will calculate our inputs */
function calculate(x, y) {
    return x + y;
}
/* Creat Event lisytener that will react on submit the button */
form.addEventListener("submit", function (e) {
    e.preventDefault();
    /* Print the output in cosole */
    var sum = calculate(num01.valueAsNumber, num02.valueAsNumber);
    console.log('Sum of two numbers = ', sum);
});

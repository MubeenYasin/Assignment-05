/* Get form Elements*/
const form = document.querySelector('.inputs')! as HTMLFormElement

/* Get input from user */
var num01 = document.querySelector('#num01')! as HTMLInputElement
var num02 = document.querySelector('#num02')! as HTMLInputElement

/* ---------------------------------------------*/
/* Function to find maximum between two numbers.*/
/* ---------------------------------------------*/
function maxNumberBT2(x: number, y: number) {
    if (x > y) {
        return ('First Number(' + x + ') is greater')
    }
    else if (x == y) {
        return ('Both Numbers are Equal')
    }
    else {
        return ('Second Number(' + y + ') is Greater')
    }
}

/* Creat Event lisytener that will react on submit the button */
form.addEventListener("submit", (e: Event) => {
    e.preventDefault()
    /* Print the output in cosole */
    var max = maxNumberBT2(num01.valueAsNumber, num02.valueAsNumber)
    console.log(max)
})


/* ---------------------------------------------*/
/* Function to find maximum between three numbers.*/
/* ---------------------------------------------*/

/* Get form Elements*/
const form02 = document.querySelector('.inputs-2')! as HTMLFormElement

/* Get input from user */
var num01_2 = document.querySelector('#num01-2')! as HTMLInputElement
var num02_2 = document.querySelector('#num02-2')! as HTMLInputElement
var num03_2 = document.querySelector('#num03-2')! as HTMLInputElement


function maxNumberBT3(x: number, y: number, z: number) {
    if (x > y && x > z) {
        return ('The First Number(' + x + ') is Greater')
    }
    else if (y > x && y > z) {
        return ('The Second Number(' + y + ') is Greater')
    }
    else if (z > x && z > y) {
        return ('The Third Number(' + z + ') is Greater')
    }
    else if (x == y && x > z) {
        return ('The First Number(' + x + ') and The Second Number(' + y + ') are equal and greater than Third Number(' + z + ') ')
    }
    else if (x == z && x > y) {
        return ('The First Number(' + x + ') and The Third Number(' + z + ') are equal and greater than Third Number(' + y + ') ')
    }

    else if (x == y && x < z) {
        return ('The First Number(' + x + ') and The Second Number(' + y + ') are equal and Less than Third Number(' + z + ') ')
    }
    else if (x == z && x < y) {
        return ('The First Number(' + x + ') and The Third Number(' + z + ') are equal and Less than Third Number(' + y + ') ')
    }
    else {
        return ('All Numbers are equal')
    }

}
/* Creat Event lisytener that will react on submit the button */
form02.addEventListener("submit", (e: Event) => {
    e.preventDefault()
    /* Print the output in cosole */
    var max3 = maxNumberBT3(num01_2.valueAsNumber, num02_2.valueAsNumber, num03_2.valueAsNumber)
    console.log(max3)
})

/* ---------------------------------------------*/
/* program to check whether a number is negative, positive or zero.*/
/* ---------------------------------------------*/

var problem03 = document.querySelector('#problem03')! as HTMLFormElement
var numPoN = document.querySelector("#PoN")! as HTMLInputElement

function postiveNumber(a:number) {
    if (a > 0) {
        return (
            console.log('The Number is POSITIVE')
        )
    }
    else if (a < 0) {
        return (
            console.log('The Number is NEGITIVE')
        )
    }
    else {
        return (
            console.log('The Number is 0')
        )
    }
}
problem03.addEventListener("submit", (e: Event) => {
    e.preventDefault()
    /* Print the output in cosole */
    var pos = postiveNumber(numPoN.valueAsNumber)
    console.log(pos)
})

/* ---------------------------------------------*/
/* 4. Write a ts program to check whether a number is divisible by 5 and 11 or not.*/
/* ---------------------------------------------*/

var problem04 = document.querySelector('#problem04')! as HTMLFormElement
var divideTo = document.querySelector('#divideTo')! as HTMLInputElement
var divideBy = document.querySelector('#divideBy')! as HTMLInputElement

function divisible(x:number, y:number){
    if(x % y == 0){
        return(
            console.log('The Number is Divisible')
        )
    }
    else{
        console.log('The Number is not Divisible')
    }
}

problem04.addEventListener("submit", (e:Event) => {
    e.preventDefault()
    console.log(
        divisible(divideTo.valueAsNumber, divideBy.valueAsNumber)
    )
})

/* ---------------------------------------------*/
/* 6. Write a ts program to check whether a year is leap year or not. */
/* ---------------------------------------------*/

var problem06 = document.querySelector('#problem06')! as HTMLFormElement
var year = document.querySelector('#year')! as HTMLInputElement

function leapYear(x:number){
    if(x % 4 == 0){
        return(
            console.log(`The Year ${x} is Leap Year` )
            )
        }
        else{
        console.log(`The Year ${x} is not Leap Year` )
    }
}
problem06.addEventListener("submit", (e:Event) => {
    e.preventDefault()
    console.log(
        leapYear(year.valueAsNumber)
    )
})


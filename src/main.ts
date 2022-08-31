/* Get form Elements*/
const form = document.querySelector('.inputs')! as HTMLFormElement

/* Get input from user */
var num01 = document.querySelector('#num01')! as HTMLInputElement
var num02 = document.querySelector('#num02')! as HTMLInputElement

/* ---------------------------------------------*/
/* 01. Write a ts program to find maximum between two numbers.*/
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
/* 02. Write a ts program to find maximum between three numbers.*/
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
/* 03. program to check whether a number is negative, positive or zero.*/
/* ---------------------------------------------*/

var problem03 = document.querySelector('#problem03')! as HTMLFormElement
var numPoN = document.querySelector("#PoN")! as HTMLInputElement

function postiveNumber(a: number) {
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
    postiveNumber(numPoN.valueAsNumber)
})

/* ---------------------------------------------*/
/* 05. 5. Write a ts program to check whether a number is even or odd.*/
/* ---------------------------------------------*/

var problem05 = document.querySelector('#problem05')! as HTMLFormElement
var input05 = document.querySelector('#input05')! as HTMLInputElement

function isEvenOdd(x: number) {
    if (x !== 0) {
        if (x % 2 == 0) {
            return (
                console.log(`The Number (${x}) is EVEN`)
            )
        }
        else {
            console.log(`The Number (${x}) is ODD`)
        }
    }else{console.log('Please type a number greater than 0')}
}

problem05.addEventListener("submit", (e: Event) => {
    e.preventDefault()
    isEvenOdd(input05.valueAsNumber)
})

/* ---------------------------------------------*/
/* 04. Write a ts program to check whether a number is divisible by 5 and 11 or not.*/
/* ---------------------------------------------*/

var problem04 = document.querySelector('#problem04')! as HTMLFormElement
var divideTo = document.querySelector('#divideTo')! as HTMLInputElement
var divideBy = document.querySelector('#divideBy')! as HTMLInputElement

function divisible(x: number, y: number) {
    if (x % y == 0) {
        return (
            console.log('The Number is Divisible')
        )
    }
    else {
        console.log('The Number is not Divisible')
    }
}

problem04.addEventListener("submit", (e: Event) => {
    e.preventDefault()
    divisible(divideTo.valueAsNumber, divideBy.valueAsNumber)
})

/* ---------------------------------------------*/
/* 06. Write a ts program to check whether a year is leap year or not. */
/* ---------------------------------------------*/

var problem06 = document.querySelector('#problem06')! as HTMLFormElement
var year = document.querySelector('#year')! as HTMLInputElement

function leapYear(x: number) {
    if (x % 4 == 0) {
        return (
            console.log(`The Year ${x} is Leap Year`)
        )
    }
    else {
        console.log(`The Year ${x} is not Leap Year`)
    }
}
problem06.addEventListener("submit", (e: Event) => {
    e.preventDefault()
    console.log(
        leapYear(year.valueAsNumber)
    )
})

/* ---------------------------------------------*/
/* 07. Write a ts program to check whether a character is alphabet or not. */
/* ---------------------------------------------*/

var problem07 = document.querySelector('#problem07')! as HTMLFormElement
var character = document.querySelector('#character')! as HTMLInputElement

function checkCharacter(x: string | null) {
    if (x == x.toUpperCase()) {
        return (
            console.log(`The Character (${x}) is in Uppercase`)
        )
    }
    else if (x == x.toLowerCase()) {
        return (
            console.log(`The Character (${x}) is in Lowercase`)
        )
    }
    else {
        return (
            console.log("This is not a Character. Please type a Character")
        )
    }
}
problem07.addEventListener("submit", (e: Event) => {
    e.preventDefault()
    checkCharacter(character.value)
})


/* ---------------------------------------------*/
/* 08. Write a ts program to input any alphabet and check whether it is vowel or consonant.*/
/* ---------------------------------------------*/

var problem08 = document.querySelector('#problem08')! as HTMLFormElement
var input08 = document.querySelector('#input08')! as HTMLInputElement

function isVowel(x: any) {

    var charLen = x.length;
    var char: any;
    var vowels: any = "aeiouAEIOU";

    // console.log('Charactor Lenth', charLen);

    if (charLen == 1) {
        // console.log('Input Lenth is OK')
        for (char in vowels) {
            if (vowels[char] == x) {
                // console.log(n.length);
                var vowelOut = vowels[char]
                console.log(`The Charactor (${vowelOut}) is a VOWEL Charactor`);
                break;
            }
        }
        if (!(vowelOut)) {
            console.log(`The Charactor (${x}) is not a VOWEL Charactor`)
        }
    }
    else { console.log('Please Write only one Charactor') }

}

problem08.addEventListener("submit", (e: Event) => {
    e.preventDefault()
    isVowel(input08.value)
})

/* ---------------------------------------------*/
/* 09. Write a ts program to input any character and check whether it is alphabet, digit or special character.*/
/* ---------------------------------------------*/
var problem09 = document.querySelector('#problem09')! as HTMLFormElement
var input09 = document.querySelector('#input09')! as HTMLInputElement

function whatChar(x: any) {

    var charLen = x.length;
    var char: any;
    var alphbets: any = "abcdefghijklmnopqrstuvqxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers: any = "0123456789";
    // var spacialChar: any = "0123456789";

    // console.log('Charactor Lenth', charLen);

    if (charLen == 1) {
        // console.log('Input Lenth is OK')
        for (char in alphbets) {
            if (alphbets[char] == x) {
                // console.log(n.length);
                var alphbetOut = alphbets[char]
                console.log(`The Charactor (${alphbetOut}) is an Alphabet`);
                break
            }
        }
        for (char in numbers) {
            if (numbers[char] == x) {
                // console.log(n.length);
                var numberOut = numbers[char]
                console.log(`The Charactor (${numberOut}) is a NUMBER`);
                break
            }
        }
        if (!(alphbetOut || numberOut)) {
            console.log(`The input (${x}) is a Spacial Charactor `)
        }

    }
    else { console.log('Please Write only one Charactor') }

}

problem09.addEventListener("submit", (e: Event) => {
    e.preventDefault()
    whatChar(input09.value)

})

/* ---------------------------------------------*/
/* 10. Write a ts program to check whether a character is uppercase or lowercase alphabet. */
/* ---------------------------------------------*/

var problem07B = document.querySelector('#problem07B')! as HTMLFormElement
var characterB = document.querySelector('#characterB')! as HTMLInputElement

function isLowerUpper(x: any) {

    var charLen = x.length;
    var char: any;
    var lower: any = "abcdefghijklmnopqrstuvqxyz";
    var upper: any = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // console.log('Charactor Lenth', charLen);

    if (charLen == 1) {
        // console.log('Input Lenth is OK')
        for (char in lower) {
            if (lower[char] == x) {
                // console.log(n.length);
                var lowerOut = lower[char]
                console.log(`The Charactor (${lowerOut}) is an Alphabet and in LOWERCASE`);
                break
            }
        }
        for (char in upper) {
            if (upper[char] == x) {
                // console.log(n.length);
                var upperOut = upper[char]
                console.log(`The Charactor (${upperOut}) is an Alphabet and in UPPERCASE`);
                break
            }
        }
        if (!(lowerOut || upperOut)) {
            console.log(`The input is not a charactor (${x}), Please Write a Alphabet charactor`)
        }

    }
    else { console.log('Please Write only one Charactor') }

}

problem07B.addEventListener("submit", (e: Event) => {
    e.preventDefault()
    isLowerUpper(characterB.value)

})



/* ---------------------------------------------*/
/* 11. Write a ts program to input week number and print week day.*/
/* ---------------------------------------------*/


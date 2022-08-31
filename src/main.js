/* Get form Elements*/
var form = document.querySelector('.inputs');
/* Get input from user */
var num01 = document.querySelector('#num01');
var num02 = document.querySelector('#num02');
/* ---------------------------------------------*/
/* 01. Write a ts program to find maximum between two numbers.*/
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
/* 02. Write a ts program to find maximum between three numbers.*/
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
/* ---------------------------------------------*/
/* 03. program to check whether a number is negative, positive or zero.*/
/* ---------------------------------------------*/
var problem03 = document.querySelector('#problem03');
var numPoN = document.querySelector("#PoN");
function postiveNumber(a) {
    if (a > 0) {
        return (console.log('The Number is POSITIVE'));
    }
    else if (a < 0) {
        return (console.log('The Number is NEGITIVE'));
    }
    else {
        return (console.log('The Number is 0'));
    }
}
problem03.addEventListener("submit", function (e) {
    e.preventDefault();
    /* Print the output in cosole */
    postiveNumber(numPoN.valueAsNumber);
});
/* ---------------------------------------------*/
/* 05. 5. Write a ts program to check whether a number is even or odd.*/
/* ---------------------------------------------*/
var problem05 = document.querySelector('#problem05');
var input05 = document.querySelector('#input05');
function isEvenOdd(x) {
    if (x !== 0) {
        if (x % 2 == 0) {
            return (console.log("The Number (".concat(x, ") is EVEN")));
        }
        else {
            console.log("The Number (".concat(x, ") is ODD"));
        }
    }
    else {
        console.log('Please type a number greater than 0');
    }
}
problem05.addEventListener("submit", function (e) {
    e.preventDefault();
    isEvenOdd(input05.valueAsNumber);
});
/* ---------------------------------------------*/
/* 04. Write a ts program to check whether a number is divisible by 5 and 11 or not.*/
/* ---------------------------------------------*/
var problem04 = document.querySelector('#problem04');
var divideTo = document.querySelector('#divideTo');
var divideBy = document.querySelector('#divideBy');
function divisible(x, y) {
    if (x % y == 0) {
        return (console.log('The Number is Divisible'));
    }
    else {
        console.log('The Number is not Divisible');
    }
}
problem04.addEventListener("submit", function (e) {
    e.preventDefault();
    divisible(divideTo.valueAsNumber, divideBy.valueAsNumber);
});
/* ---------------------------------------------*/
/* 06. Write a ts program to check whether a year is leap year or not. */
/* ---------------------------------------------*/
var problem06 = document.querySelector('#problem06');
var year = document.querySelector('#year');
function leapYear(x) {
    if (x % 4 == 0) {
        return (console.log("The Year ".concat(x, " is Leap Year")));
    }
    else {
        console.log("The Year ".concat(x, " is not Leap Year"));
    }
}
problem06.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(leapYear(year.valueAsNumber));
});
/* ---------------------------------------------*/
/* 07. Write a ts program to check whether a character is alphabet or not. */
/* ---------------------------------------------*/
var problem07 = document.querySelector('#problem07');
var character = document.querySelector('#character');
function checkCharacter(x) {
    if (x == x.toUpperCase()) {
        return (console.log("The Character (".concat(x, ") is in Uppercase")));
    }
    else if (x == x.toLowerCase()) {
        return (console.log("The Character (".concat(x, ") is in Lowercase")));
    }
    else {
        return (console.log("This is not a Character. Please type a Character"));
    }
}
problem07.addEventListener("submit", function (e) {
    e.preventDefault();
    checkCharacter(character.value);
});
/* ---------------------------------------------*/
/* 08. Write a ts program to input any alphabet and check whether it is vowel or consonant.*/
/* ---------------------------------------------*/
var problem08 = document.querySelector('#problem08');
var input08 = document.querySelector('#input08');
function isVowel(x) {
    var charLen = x.length;
    var char;
    var vowels = "aeiouAEIOU";
    // console.log('Charactor Lenth', charLen);
    if (charLen == 1) {
        // console.log('Input Lenth is OK')
        for (char in vowels) {
            if (vowels[char] == x) {
                // console.log(n.length);
                var vowelOut = vowels[char];
                console.log("The Charactor (".concat(vowelOut, ") is a VOWEL Charactor"));
                break;
            }
        }
        if (!(vowelOut)) {
            console.log("The Charactor (".concat(x, ") is not a VOWEL Charactor"));
        }
    }
    else {
        console.log('Please Write only one Charactor');
    }
}
problem08.addEventListener("submit", function (e) {
    e.preventDefault();
    isVowel(input08.value);
});
/* ---------------------------------------------*/
/* 09. Write a ts program to input any character and check whether it is alphabet, digit or special character.*/
/* ---------------------------------------------*/
var problem09 = document.querySelector('#problem09');
var input09 = document.querySelector('#input09');
function whatChar(x) {
    var charLen = x.length;
    var char;
    var alphbets = "abcdefghijklmnopqrstuvqxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    // var spacialChar: any = "0123456789";
    // console.log('Charactor Lenth', charLen);
    if (charLen == 1) {
        // console.log('Input Lenth is OK')
        for (char in alphbets) {
            if (alphbets[char] == x) {
                // console.log(n.length);
                var alphbetOut = alphbets[char];
                console.log("The Charactor (".concat(alphbetOut, ") is an Alphabet"));
                break;
            }
        }
        for (char in numbers) {
            if (numbers[char] == x) {
                // console.log(n.length);
                var numberOut = numbers[char];
                console.log("The Charactor (".concat(numberOut, ") is a NUMBER"));
                break;
            }
        }
        if (!(alphbetOut || numberOut)) {
            console.log("The input (".concat(x, ") is a Spacial Charactor "));
        }
    }
    else {
        console.log('Please Write only one Charactor');
    }
}
problem09.addEventListener("submit", function (e) {
    e.preventDefault();
    whatChar(input09.value);
});
/* ---------------------------------------------*/
/* 10. Write a ts program to check whether a character is uppercase or lowercase alphabet. */
/* ---------------------------------------------*/
var problem07B = document.querySelector('#problem07B');
var characterB = document.querySelector('#characterB');
function isLowerUpper(x) {
    var charLen = x.length;
    var char;
    var lower = "abcdefghijklmnopqrstuvqxyz";
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // console.log('Charactor Lenth', charLen);
    if (charLen == 1) {
        // console.log('Input Lenth is OK')
        for (char in lower) {
            if (lower[char] == x) {
                // console.log(n.length);
                var lowerOut = lower[char];
                console.log("The Charactor (".concat(lowerOut, ") is an Alphabet and in LOWERCASE"));
                break;
            }
        }
        for (char in upper) {
            if (upper[char] == x) {
                // console.log(n.length);
                var upperOut = upper[char];
                console.log("The Charactor (".concat(upperOut, ") is an Alphabet and in UPPERCASE"));
                break;
            }
        }
        if (!(lowerOut || upperOut)) {
            console.log("The input is not a charactor (".concat(x, "), Please Write a Alphabet charactor"));
        }
    }
    else {
        console.log('Please Write only one Charactor');
    }
}
problem07B.addEventListener("submit", function (e) {
    e.preventDefault();
    isLowerUpper(characterB.value);
});
/* ---------------------------------------------*/
/* 11. Write a ts program to input week number and print week day.*/
/* ---------------------------------------------*/

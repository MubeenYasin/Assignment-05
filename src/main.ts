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
    } else { console.log('Please type a number greater than 0') }
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

var problem11 = document.querySelector('#problem11')! as HTMLFormElement
var input11 = document.querySelector('#input11')! as HTMLInputElement

function whatDay(x: number) {
    if (x >= 1 && x <= 7) {
        if (x == 1) {
            console.log('The day is MONDAY')
        }
        else if (x == 2) {
            console.log('The day is TUESDAY')
        }
        else if (x == 3) {
            console.log('The day is WEDNESDAY')
        }
        else if (x == 4) {
            console.log('The day is THERSDAY')
        }
        else if (x == 5) {
            console.log('The day is FRIDAY')
        }
        else if (x == 6) {
            console.log('The day is SATURDAY')
        }
        else { console.log('The day is SUNDAY') }
    }
    else { console.log('Pleae Type a Number from 1 to 7') }
}

problem11.addEventListener("submit", (e: Event) => {
    e.preventDefault()
    whatDay(input11.valueAsNumber)
})

/* ---------------------------------------------*/
/* 12. Write a ts program to input month number and print number of days in that month. */
/* ---------------------------------------------*/
var problem12 = document.querySelector('#problem12')! as HTMLFormElement
var input12 = document.querySelector('#input12')! as HTMLInputElement

function whatMonth(x: number) {
    if (x >= 1 && x <= 12) {
        switch (x) {
            case 1: console.log("The MOnth is JANUARY and it has 31 days")
                break
            case 2: console.log("The MOnth is FEBRUARY and it has 28 days")
                break
            case 3: console.log("The MOnth is MARCH and it has 31 days")
                break
            case 4: console.log("The MOnth is APRIL and it has 30 days")
                break
            case 5: console.log("The MOnth is MAY and it has 31 days")
                break
            case 6: console.log("The MOnth is JUN and it has 30 days")
                break
            case 7: console.log("The MOnth is JULY and it has 31 days")
                break
            case 8: console.log("The MOnth is AUGUST and it has 31 days")
                break
            case 9: console.log("The MOnth is SEPTEMBER and it has 30 days")
                break
            case 10: console.log("The MOnth is OCTOBER and it has 31 days")
                break
            case 11: console.log("The MOnth is NOVEMBER and it has 30 days")
                break
            case 12: console.log("The MOnth is DECEMBER and it has 31 days")
                break
        }
    }
    else { console.log('Pleae Type a Number from 1 to 12') }
}
problem12.addEventListener("submit", (e: Event) => {
    e.preventDefault()
    whatMonth(input12.valueAsNumber)
})

/* ---------------------------------------------*/
/* 13. Write a ts program to count total number of notes in given amount. */
/* ---------------------------------------------*/
var problem13 = document.querySelector('#problem13')! as HTMLFormElement
var input13 = document.querySelector('#input13')! as HTMLInputElement
var notes = document.querySelector('#notes')! as HTMLSelectElement

// console.log(problem13.notes)
// console.log(notes.value)

function numOfNotes(x: number, y: number) {
    if (x >= y) {
        var notesQount = Math.floor(x / y)
        var qoinsQounts = x % y
        console.log(`"${notesQount}" Notes and "${qoinsQounts}" Qoins`)
    } else { console.log(`Type of Note must be greater than Amount`) }
}
var z: number = Number(notes.value) /* Conver a string into number */

problem13.addEventListener("submit", (e: Event) => {
    e.preventDefault()
    numOfNotes(input13.valueAsNumber, z)
})

/* ---------------------------------------------*/
/* 14. Write a ts program to input angles of a triangle and check whether triangle is valid or not. */
/* ---------------------------------------------*/

var problem14 = document.querySelector('#problem14')! as HTMLFormElement
var input14a = document.querySelector('#input14a')! as HTMLInputElement
var input14b = document.querySelector('#input14b')! as HTMLInputElement
var input14c = document.querySelector('#input14c')! as HTMLInputElement

function isTriangleByAngle(x: number, y: number, z: number) {
    if ((x + y + z) == 180) {
        console.log('The Triangle is VALID')
    } else { console.log('The Triangle is not VALID') }
}
problem14.addEventListener("submit", (e: Event) => {
    e.preventDefault()
    isTriangleByAngle(input14a.valueAsNumber, input14b.valueAsNumber, input14c.valueAsNumber)
})

/* ---------------------------------------------*/
/* 15. Write a ts program to input all sides of a triangle and check whether triangle is valid or not. */
/* ---------------------------------------------*/
var problem15 = document.querySelector('#problem15')! as HTMLFormElement
var input15a = document.querySelector('#input15a')! as HTMLInputElement
var input15b = document.querySelector('#input15b')! as HTMLInputElement
var input15c = document.querySelector('#input15c')! as HTMLInputElement

function isTriangleBySide(a: number, b: number, c: number) {
    var hypotenuse = Math.sqrt((a ** 2) + (b ** 2))
    if ((a ** 2) + (b ** 2) == c ** 2) {
        console.log('The Triangle is VALID')
    } else {
        console.log(`The Triangle is not VALID`)
        console.log(`The Hypotenuse must be (${hypotenuse})`)
    }
}
problem15.addEventListener("submit", (e: Event) => {
    e.preventDefault()
    isTriangleBySide(input15a.valueAsNumber, input15b.valueAsNumber, input15c.valueAsNumber)
})
/* ---------------------------------------------*/
/* 16. Write a ts program to check whether the triangle is equilateral, isosceles or scalene triangle. */
/* ---------------------------------------------*/

var problem16 = document.querySelector('#problem16')! as HTMLFormElement
var input16a = document.querySelector('#input16a')! as HTMLInputElement
var input16b = document.querySelector('#input16b')! as HTMLInputElement
var input16c = document.querySelector('#input16c')! as HTMLInputElement

function WhatTriang(x: number, y: number, z: number) {
    if ((x + y + z) == 180) {
        console.log('The Triangle is VALID')
    } else { console.log('The Triangle is not VALID') }
}
problem14.addEventListener("submit", (e: Event) => {
    e.preventDefault()
    isTriangleByAngle(input14a.valueAsNumber, input14b.valueAsNumber, input14c.valueAsNumber)
})

/* ---------------------------------------------*/
/* 17. Write a ts program to find all roots of a quadratic equation. */
/* ---------------------------------------------*/
var problem17 = document.querySelector('#problem17')! as HTMLFormElement
var a = document.querySelector('#input17a')! as HTMLInputElement
var b = document.querySelector('#input17b')! as HTMLInputElement
var c = document.querySelector('#input17c')! as HTMLInputElement
var x = document.querySelector('#input17x')! as HTMLInputElement

function RootQuadEquation(a: number, b: number, c: number, x:number) {
    var underRoot = Math.sqrt( Math.sqrt((b**2 - (4*a*c))**2) )

    var xWithPluse = (-b + underRoot) / (2*a) 
    var xWithMinus = (-b - underRoot) / (2*a) 
    
    console.log(`    x Value with Plus  = ${xWithPluse}
    x Value with Minus = ${xWithMinus}`)
}

// RootQuadEquation(2, 6, 8);

problem17.addEventListener("submit", (e: Event) => {
    e.preventDefault()
    RootQuadEquation(a.valueAsNumber, b.valueAsNumber, c.valueAsNumber, x.valueAsNumber)
})

/* ---------------------------------------------*/
/* 18. Write a ts program to calculate profit or loss. */
/* ---------------------------------------------*/

var problem18 = document.querySelector('#problem18')! as HTMLFormElement
var input18a = document.querySelector('#input18a')! as HTMLInputElement
var input18b = document.querySelector('#input18b')! as HTMLInputElement

function profitLoss(x: number, y: number) {
    if (x < y) {
        var profit = y - x
        console.log(`The PROFIT is ${profit}`)
    }
    else if (x > y) {
        var loss = x - y
        console.log(`The LOSS is ${loss}`)
    } else { console.log('NO LOSS NO PROFIT') }
}
problem18.addEventListener('submit', (e: Event) => {
    e.preventDefault()
    profitLoss(input18a.valueAsNumber, input18b.valueAsNumber)
})

/* ---------------------------------------------*/
/* 19. Write a ts program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following: */
/* ---------------------------------------------*/
var problem19 = document.querySelector('#problem19')! as HTMLFormElement
var physics = document.querySelector('#physics')! as HTMLInputElement
var chemistry = document.querySelector('#chemistry')! as HTMLInputElement
var biology = document.querySelector('#mathematics')! as HTMLInputElement
var mathematics = document.querySelector('#biology')! as HTMLInputElement
var computer = document.querySelector('#computer')! as HTMLInputElement

function whatGrade(a: number, b: number, c: number, d: number, e: number) {
    var obtainMarks = a + b + c + d + e
    var totalMarks = 750
    var percentage = Math.floor((obtainMarks / totalMarks) * 100)
    if (percentage >= 90) {
        console.log(`Obtain Marks = ${obtainMarks} ,  Marks Percentage = ${percentage}% ,  Grade = "A"`)
    }
    else if (percentage >= 80) {
        console.log(`Obtain Marks = ${obtainMarks} ,  Marks Percentage = ${percentage}% ,  Grade = "B"`)
    }
    else if (percentage >= 70) {
        console.log(`Obtain Marks = ${obtainMarks} ,  Marks Percentage = ${percentage}% ,  Grade = "C"`)
    }
    else if (percentage >= 60) {
        console.log(`Obtain Marks = ${obtainMarks} ,  Marks Percentage = ${percentage}% ,  Grade = "D"`)
    }
    else if (percentage >= 40) {
        console.log(`Obtain Marks = ${obtainMarks} ,  Marks Percentage = ${percentage}% ,  Grade = "E"`)
    }
    else {
        console.log(`Obtain Marks = ${obtainMarks} ,  Marks Percentage = ${percentage}% ,  Grade = "F"`)
    }
}
problem19.addEventListener("submit", (e: Event) => {
    e.preventDefault()
    whatGrade(physics.valueAsNumber, chemistry.valueAsNumber, mathematics.valueAsNumber, biology.valueAsNumber, computer.valueAsNumber)

})


/* ---------------------------------------------*/
/* 20. Write a ts program to input basic salary of an employee and calculate its Gross salary according to following:*/
/* ---------------------------------------------*/
var problem20 = document.querySelector('#problem20')! as HTMLFormElement
var basicSalary = document.querySelector('#input20')! as HTMLInputElement

function grossSalary(x: number) {

    if (x <= 10000) {
        var hra = (x * 20) / 100
        var da = (x * 80) / 100
        var gSalary = x + hra + da
        console.log(`Gross Salary = ${gSalary}`)
    }
    else if (x <= 20000) {
        var hra = (x * 25) / 100
        var da = (x * 90) / 100
        var gSalary = x + hra + da
        console.log(`Gross Salary = ${gSalary}`)
    }
    else {
        var hra = (x * 30) / 100
        var da = (x * 95) / 100
        var gSalary = x + hra + da
        console.log(`Gross Salary = ${gSalary}`)
    }
}

problem20.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    grossSalary(basicSalary.valueAsNumber)
})

/* ---------------------------------------------*/
/* 21. Write a ts program to input electricity unit charges and calculate total electricity bill according to the given condition: */
/* ---------------------------------------------*/
var problem21 = document.querySelector('#problem21')! as HTMLFormElement
var units = document.querySelector('#input21')! as HTMLInputElement

function ElectricityBill(x: number) {
    console.log(` Units used = ${x} Units`)
    if (x <= 50) {
        var price = x * 8
        var surcharge = (price * 20) / 100
        var bill = price + surcharge
        console.log(` Electricit Price = ${price}\n Surcharge        =  ${surcharge}\n Payable Bill     = ${bill} `)
    }
    else if (x <= 100) {
        var price = x * 10
        var surcharge = (price * 20) / 100
        var bill = price + surcharge
        console.log(` Electricit Price = ${price}\n Surcharge        =  ${surcharge}\n Payable Bill     = ${bill} `)
    }
    else if (x >= 101 && x <= 250) {
        var first100Units = 100 * 10
        var after100Units = (x - 100) * 12
        var price = first100Units + after100Units
        var surcharge = (price * 20) / 100
        var bill = price + surcharge
        console.log(`        Price First 100 Units           = ${100 * 10} 
        Price after 100 Units, ${x - 100} Units = ${after100Units} 
        Surcharge 20%                   = ${surcharge}\n 
        Payable Bill                    = ${bill} `)
    }
    else{
        var first100Units = 100 * 10
        var after100Units = 150 * 12
        var after250Units = (x - 250) * 20
        var price = first100Units + after100Units + after250Units
        var surcharge = (price * 20) / 100
        var bill = price + surcharge
        console.log(`        Price First 100 Units            = ${100 * 10} 
        Price after 100 Units 150 Units  = ${after100Units}
        Price after 250 Units, ${x - after250Units}       = ${after250Units} 
        Surcharge                        = ${surcharge}\n 
        Payable Bill                     = ${bill} `)
    }

}
problem21.addEventListener("submit", (e:Event) =>{
    e.preventDefault()
    ElectricityBill(units.valueAsNumber);
})

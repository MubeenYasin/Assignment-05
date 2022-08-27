/* Get form Elements*/
const form = document.querySelector('.inputs')! as HTMLFormElement

/* Get input from user */
var num01 = document.querySelector('#num01')! as HTMLInputElement
var num02 = document.querySelector('#num02')! as HTMLInputElement 

/* The function that will calculate our inputs */
function maxNumber(x:number , y:number){
    if(x > y){
        return x 
    }
    else{
        return y
    } 
}

/* Creat Event lisytener that will react on submit the button */
form.addEventListener("submit", (e:Event) => {
    e.preventDefault()
    /* Print the output in cosole */
    var max = maxNumber(num01.valueAsNumber, num02.valueAsNumber)
    console.log('The Greater number is ', max)
})

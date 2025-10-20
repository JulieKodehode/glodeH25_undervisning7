// Global JavaScript

console.log("Hello!");

// DATATYPES:
// "" Hermetegn / Quotes = string
// 1 = number
// true / false = boolean

// VARIABLES:
// let = som kan endre verdi
// const = som IKKE kan endre verdi

let userName = "Julie"
userName = "Julius"
const userAge = 28
const isPresent = true
//isPresent = false
console.log(userName)
console.log(userAge)
console.log(isPresent)

var isAllowed = false // var er ikke lenger lov til å bruke

const message = "God morgen"; 
const firstName = "Julie";
const greeting = message + ", " + firstName + ":)";
console.log(greeting);

// FUNCTION:
// Regular function / function
function simpleCalculator() {
    // Local JavaScript
    const numberOne = 26;
    const numberTwo = 173;
    const sum = numberOne + numberTwo;
    console.log(sum);
};
simpleCalculator();

function greet() {
    const message = "God morgen";
    const firstName = "Julie";
    console.log(message + ", " + firstName + ":)");
}
greet();

// Arrow function
const simpleLogIn = () => {
    // Local JavaScript
    const userName = "JulieIsobelle";
    const isOnline = false;
    const userLevel = 99;
    console.log("User name:" + " " + userName);
    console.log("User online:" + " " + isOnline);
    console.log("User level:" + " " + userLevel);
};
simpleLogIn();
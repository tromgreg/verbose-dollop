//document object model (dom) HTML Inputs for adding those functions to visuals



//this variable adds the below functions together
//var wasn't working and I had to change it to const instead.
//https://medium.com/@josephcardillo/the-difference-between-function-and-block-scope-in-javascript-4296b2322abe
//good article for know the difference between var, let, const and understanding blocks.
//var is function scope.
//let and const are block scope.
//Function scope is within the function.
//Block scope is within curly brackets.

const randomFunc = {
	lower: getLowerCase,
	upper: getUpperCase,
	number: getNumbers,
	symbol: getRandomsymbols
};


//http://www.net-comber.com/charset.html
//charcode numbering chart for math.random to pull from.
//26 letters of the alphabet and get math.random to make random whole number rounded down starting from charcode 97.

function getLowerCase(){
    //math.random get a random decimal number up to 26 and use math.floor to random down.
    //from the 97th charcode and up 26 spots. 
    return String.fromCharCode (Math.floor(Math.random() * 26) + 97);
}
console.log(getLowerCase());

// almost the same as above.
function getUpperCase(){

    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);

}

console.log(getUpperCase());
// about the same premise. since 0-9 there are 10 numbers which start in the 48th charCode.
function getNumbers(){

    return String.fromCharCode(Math.floor(Math.random() *  10) + 48);

}

console.log(getNumbers());
//random symbols are only pulled from the const below
function getRandomsymbols(){
    //variable with symbols
    const symbols = "!@#$%^&*()_+?{}[]<>"
    //return from variable array above
    return symbols [Math.floor(Math.random() * symbols.length)];
}
console.log(getRandomsymbols());






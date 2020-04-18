//document object model (dom) HTML Inputs for adding those functions to visuals
//results
const resultEl = document.getElementById('result');
//length
const lengthEl = document.getElementById('length');
//uppercase
const upperCaseEl = document.getElementById('uppercase');
//lowercase
const lowerCaseEl = document.getElementById('lowercase');
//number
const numbersEl = document.getElementById('numbers');
//symbols
const symbolsEl = document.getElementById('symbols');
//DOM for buttons
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');


//need
const randomGen = {
	lower : getLowerCase,
	upper: getUpperCase,
	number: getNumbers,
	symbol: getRandomSymbols
};

generateEl.addEventListener('click', () => {
	
	//getting values for generateEL based on the event of checked or unchecked box plus the value user inputs in length 
	const length = +lengthEl.value;
	console.log('length: ', length);
	
	const hasLower = lowerCaseEl.checked;
	console.log('hasLower: ', hasLower);

	const hasUpper = upperCaseEl.checked;
	console.log('hasUpper: ', hasUpper);

	const hasNumber = numbersEl.checked;
	console.log('hasNumber: ', hasNumber);

	const hasSymbol = symbolsEl.checked;
	console.log('hasSymbol: ', hasSymbol);

//shows results in "result"<span>
	resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});


function generatePassword(lower, upper, number, symbol, length) {
	let generatedPassword = '';
	const typesCount = lower + upper + number + symbol;
	const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
	
	if(typesCount === 0) {
		return '';
	}
	//loop for types selected
	for(let i=0; i<length; i+=typesCount) {
		typesArr.forEach(type => {
			//Object.keys(type)[0] returns an array of types selected booleans
			const funcName = Object.keys(type)[0];
			//adds value to variable
			generatedPassword += randomGen[funcName]();
		});
	}
	const finalPassword = generatedPassword.slice(0, length);
	return finalPassword;
}

function getLowerCase(){
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
function getRandomSymbols(){
    //variable with symbols
    const symbols = "!@#$%^&*()_+?{}[]<>"
    //return from variable array above
    return symbols [Math.floor(Math.random() * symbols.length)];
}
console.log(getRandomSymbols());



//http://www.net-comber.com/charset.html
//charcode numbering chart for math.random to pull from.
//26 letters of the alphabet and get math.random to make random whole number rounded down starting from charcode 97.

   //math.random get a random decimal number up to 26 and use math.floor to random down.
	//from the 97th charcode and up 26 spots. 
	
	//var wasn't working and I had to change it to const instead.
//https://medium.com/@josephcardillo/the-difference-between-function-and-block-scope-in-javascript-4296b2322abe
//good article for know the difference between var, let, const and understanding blocks.
//var is function scope.
//let and const are block scope.
//Function scope is within the function.
//Block scope is within curly brackets.

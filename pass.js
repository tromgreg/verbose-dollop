//document object model (dom) HTML Inputs for adding those functions to visuals








//this variable adds the below functions together
var randomFunc = {

    lower : getLowerCase,
    upper : getUpperCase,
    numbers : getNumbers,
    symbol : getSpecial,

}



//http://www.net-comber.com/charset.html
//charcode numbering chart for math.random to pull from.
//26 letters of the alphabet and get math.random to make random whole number rounded down starting from charcode 97.

function getLowerCase(){

    return String.fromCharCode(math.floor(math.random() * 26) + 97);

}

function getUpperCase(){

    return String.fromCharCode(math.floor(math.random() * 26) + 65);

}
 
function getNumbers(){

    return String.fromCharCode(math.floor(math.random() *  10) + 48);

}

function getSpecial(){
    //variable with symbols
    const symbols = "!@#$%^&*()_+?{}[]<>"
    //return from variable array above
    return symbols [math.floor(math.random() * symbols.length)];

}

//add required dropdowns to control what I want my passwords's makeup to be.







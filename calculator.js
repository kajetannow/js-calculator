//skróty do elementów modelu obiektowego
const calculator = document.getElementById('calculator');
const numbers = calculator.getElementsByClassName('number');
const display = document.getElementById('display');
const operations = calculator.getElementsByClassName('operation');

//zmienne:
var currentDisplay = "" //obecnie wyświetlana wartość
var memDisplay = "" //wartość w pamięci
var result = ""//wynik
var currentNum //obecnie wpisywana cyfra
var operator //znak działania
var hasPoint = false; //czy liczba ma ułamek?

//funkcje:
var calc = function(){
operator = this.getAttribute("id");
memDisplay = currentDisplay;
if(result != ""){
memDisplay = result;
}
currentDisplay = "";
hasPoint = false;
} //ustala używany znak działania za pomocą id

var getResult = function(){

currentDisplay = parseFloat(currentDisplay);
memDisplay = parseFloat(memDisplay);

switch(operator){
    case "addition":
        result = memDisplay + currentDisplay;
        break;

    case "subtraction":
        result = memDisplay - currentDisplay;
        break;

    case "multiply":
        result = memDisplay * currentDisplay;
        break;

    case "divide":
        if(currentDisplay === 0){
            showOnDisplay('ERROR!');
            return;
        }
        result = memDisplay / currentDisplay;
        break;

    case "npow":
        result = Math.pow(memDisplay, currentDisplay);
        break;

    case "sqrt":
        result = Math.sqrt(memDisplay);
        break;
        
        
}

showOnDisplay(result);
result=parseFloat(result);
} //funkcja oblicza wynik

var showOnDisplay = function (content){
    display.textContent = content;
} 
// wyświetla wartość zmiennej w wyświetlaczu

var getPoint = function(){
    if(hasPoint == true){
    return;
    }
    else{
        if(currentDisplay == ""){
        currentDisplay = 0;
        }
    currentDisplay += ".";
    hasPoint = true;
    }

}


var cls = function(){
    currentDisplay = "";
    hasPoint = false;
    showOnDisplay('0');
}
var clear = document.getElementById('clear');
clear.addEventListener('click', cls);
//czyści wyświetlacz

var clsAll = function(){
    currentDisplay = "";
    result = "";
    memDisplay = "";
    hasPoint = false;
    showOnDisplay('0');
}
var clear = document.getElementById('clearAll');
clear.addEventListener('click', clsAll);
//czyści pamięć i wyświetlacz


var numVal = function(){
    if(currentDisplay == ""){
    currentNum = this.getAttribute("value");
    currentDisplay = currentNum;
    }
    else{
    currentNum = this.getAttribute("value");
    currentDisplay += currentNum;
    }


    showOnDisplay(currentDisplay);
} //wyświetla poszczególne cyfry na wyświetlaczu

//zdarzenia:
for(var i=0; i<numbers.length; i++){
    numbers[i].addEventListener('click', numVal)
}
//pobiera wartość atrybutu po kliknięciu odpowiedniej cyfry

for(var i=0; i<operations.length; i++){
    operations[i].addEventListener('click', calc);
} //pobiera odpowiedni operator

var summ = document.getElementById('summary');
summ.addEventListener('click', getResult)
//wywołuje sumę

var point = document.getElementById('point');
point.addEventListener('click', getPoint);

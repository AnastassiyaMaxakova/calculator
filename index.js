const display = document.getElementById('display');


function appendToDisplay(element){
    display.value += element; 
}

function add(a,b){
    let result = a+b;
    return result;
}

function subtract(a,b){
    let result = a-b;
    return result;
}

function multiply(a,b){

}

function divide(a,b){

}

function operate(input){
    
}

function clearDisplay(){
    display.value = '';

}

//let string = '234+345+232-569555/455*85';
//const expression = string.split(/([+*/-])/g) 

/*write a function that:
1. takes a first element of expression
2. checks an operator
3. based on an operator does on of operation functions 
4. updates the result with that evaluated expression
5. start the loop again till the end of the array
6. return a final evaluated result
*/
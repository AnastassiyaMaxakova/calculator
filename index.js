const display = document.getElementById('display');
let expression = '';
let result = '';

function appendToDisplay(element){
    display.value += element; 
}

function add(a,b){

    return Number(a)+Number(b);
}

function subtract(a,b){
    return Number(a)-Number(b);
}

function multiply(a,b){
    return Number(a)*Number(b);
}

function divide(a,b){
    if (b === 0) {  
    display.value = 'Error';}  
    return Number(a) / Number(b);
}

function operate(){
    if (display.value === ''){
        display.value = 'Error';
    }
    
    else{
        expression = display.value;
        let lastChar = expression[expression.length-1];
        if (expression[0]==='*'|| expression[0]==='/'){
                display.value='Error';
            }
       
        if (lastChar==='+'|| lastChar==='-'|| lastChar==='*'|| lastChar==='/') {
            expression = expression.slice(0,-1);
        }
        expression = expression.split(/([+*/-])/g);  
        console.log(expression)
        calculate(expression)
    }  
}

function clearDisplay(){
    display.value = '';
}

function calculate(arr){
    for(let i=0; i<arr.length+2;i++){
            let a = arr[0];
            let operator = arr[1];
            let b = arr[2];
            let res = '';

            switch(operator) {
                case '+':
                    res = add(a,b);
                    break;
            
                case '-':
                    res = subtract(a,b);
                    break;
                
                case '*':
                    res = multiply(a,b);
                    break;
                
                case '/':
                    res = divide(a,b);
                    break;
                }
            arr.splice(0,3,res);
            result= arr;
        }
        display.value = result;
    }



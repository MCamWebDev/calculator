function add(a,b) {
    let c = a + b;
    return c;
}

function subtract(a,b) {
    let c = a - b;
    return c;
}

function multiply(a,b) {
    let c = a * b;
    return c;
}

function divide(a,b) {
    let c = a / b;
    return c;
}

function operate(operator, a, b) {

    let c;

    switch (operator) {
        case '+':
            c = add(a,b);
            break;
        
        case '-':
            c = subtract(a,b);
            break;
        
        case '*':
            c = multiply(a,b);
            break;

        case '/':
            c = divide(a,b);
            break;
    
        default:
            c = 'ERROR: Invalid operator';
            break;
    }

    return c;
}

let operator = '5';
let result = operate(operator,8,2);
console.log(result);
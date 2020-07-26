import Big from 'big.js';

function operate(numberOne, numberTwo, operation) {
    const one = Big(numberOne);
    const two = Big(numberTwo);

    switch(operation) {
        case '+':
            return one.plus(two).toString();
        case '-':
            return one.minus(two).toString();
        case 'x':
            return one.times(two).toString();
        case '÷':
            return one.div(two).toString();
        case '%':
            return one.mod(two).toString();
        default:
            throw Error(`Unknown operation ${operation}`);
    }
}

export default operate;
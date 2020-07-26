import operate from './operate';

/**
 * Given a button name and a calculator data object, return an updated
 * calculator data object.
 *
 * Calculator data object contains:
 *   total:String      the running total
 *   next:String       the next number to be operated on with the total
 *   operation:String  +, -, etc.
 */

const nullState = {
    total: '0',
    next: null,
    operation: null,
};

function isNumber(x) {
    return !!x.match(/[0-9]+/);
}

function calculate(obj, buttonName) {
    if (buttonName === 'AC') {
        return nullState;
    }

    if (isNumber(buttonName)) {
        if (buttonName === '0' && obj.next === '0') {
            return nullState;
        }

        if (obj.operation) {
            if (obj.next) {
                return { next: obj.next + buttonName };
            }
            return {
                total: '0', 
                next: buttonName,
                operation: null,
            };
        }
        if (obj.next) {
            return {
                total: '0',
                next: obj.next + buttonName,
                operation: null,
            };
        }
        return {
            total: '0',
            next: buttonName,
            operation: null,
        };
    }

    if (buttonName === '.') {
        if (obj.next) {
            if (obj.next.includes('.')) {
                return nullState;
            }
            return {
                total: '0',
                next: obj.next + '.',
                operation: null,
            };
        }
        if (obj.operation) {
            return { 
                total: '0',
                next: '0.',
                operation: null,
            };
        }
        if (obj.total) {
            if (obj.total.includes('.')) {
                return nullState;
            }
            return { 
                total: obj.total + '.',
                next: null,
                operation: null,
            };
        }
        return nullState;
    }

    if (buttonName === '=') {
        if (obj.next && obj.operation) {
            return {
                total: operate(obj.total, obj.next, obj.operation),
                next: null,
                operation: null,
            };
        } else {
            return nullState;
        }
    }

    if (buttonName === '+/-') {
        if (obj.next) {
            return { 
                total: '0',
                next: (-1 * parseFloat(obj.next)).toString(),
                operation: null,
            };
        }
        if (obj.total) {
            return { 
                total: (-1 * parseFloat(obj.next)).toString(),
                next: null,
                operation: null,
            };
        }
        return nullState;
    }

    if (obj.operation) {
        return {
            total: operate(obj.total, obj.next, obj.operation),
            next: null,
            operation: buttonName,
        };
    }

    if (!obj.next) {
        return {
            total: '0',
            next: null,
            operation: buttonName,
        };
    }

    return {
        total: obj.next,
        next: null,
        operation: buttonName,
    };
}

export default calculate;

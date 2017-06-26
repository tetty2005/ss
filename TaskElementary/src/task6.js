'use strict'

function task6 (rowLength, minSquare) {
    let result, error;
    error = validate(rowLength, minSquare);

    if (!error) {
        result = getNaturalNumbers(rowLength, minSquare);
    } else {
        result = {status: 'failed', reason: error};
    }

    return result;
}

function getNaturalNumbers (rowLength, minSquare) {    
        let numbers = [];

        next:
        for (let i = 1; numbers.length < rowLength; i++) {
            for (let j = 2; j < i; j++) {
                if (i % j == 0) continue next;
            }

            if (i*i > minSquare) {
                numbers.push(i);
            }
        }

        return numbers.join(',');
}

function validate (rowLength, minSquare) {
    let error = '';

    if (typeof rowLength !== 'number' ||
        typeof minSquare !== 'number') {
        error = 'Enter two numbers';
    }

    return error;
}
'use strict'

function task6 (rowLength, minSquare) {
    let error = validate6(rowLength, minSquare);

    return (!error)? getNaturalNumbers(rowLength, minSquare): {status: 'failed', reason: error};
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

function validate6 (rowLength, minSquare) {
    let error = '';

    if (typeof rowLength !== 'number' ||
        typeof minSquare !== 'number') {
        error = 'Enter two numbers';
    }

    return error;
}

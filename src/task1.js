'use strict'

function task1 (width, height, symbol) {
    let result, error;
    error = preValidate1(width, height, symbol);

    if (!error) {
        result = drawBoard(width, height, symbol);
    } else {
        result = {status: 'failed', reason: error};
    }

    return result;
}

function drawBoard (width, height, symbol) {
    let lineEven = '',
        lineOdd = '',
        board = '';

    for (let i = 0; i < width; i++) {
        lineOdd += symbol + ' ';
    }

    for (let i = 0; i < width-1; i++) {
        lineEven += ' ' + symbol;
    }           

    for (let i = 1; i < height/2; i++) {
        board +=  lineOdd + '\n' + lineEven + '\n';
    }

    if (height % 2 != 0) {
        board +=  lineOdd + '\n';
    }

    return board;
}

function preValidate1 (width, height, symbol) {
    let error = '';

    if (typeof width !== 'number' || 
        typeof height !== 'number' || 
        typeof symbol !== 'string') {
        error = 'Enter two numbers and a symbol as a string';
    }

    return error;
}

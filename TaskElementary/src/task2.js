'use strict'

function task2 (envelope1, envelope2) {
    let error = preValidate2(envelope1, envelope2);

    return (!error)? findSmallest(envelope1, envelope2): {status: 'failed', reason: error};
}    

function findSmallest (envelope1, envelope2) {
    let result = 0;

    setMinMaxSides(envelope1, envelope1.a, envelope1.b);
    setMinMaxSides(envelope2, envelope2.c, envelope2.d);

    if (envelope1.minSide < envelope2.minSide && 
        envelope1.maxSide < envelope2.maxSide) {
            result = 1;
    } else if (envelope2.minSide < envelope1.minSide && 
        envelope2.maxSide < envelope1.maxSide) {
            result = 2;
    }
    
    function setMinMaxSides (envelope, side1, side2) {
        if (side1 < side2) {
            envelope.minSide = side1;
            envelope.maxSide = side2;
        } else {
            envelope.minSide = side2;
            envelope.maxSide = side1;
        }
    }

   return result;
}

function preValidate2 (envelope1, envelope2) {
    let error = '';

    if (typeof envelope1 !== 'object' || typeof envelope2 !== 'object') {
        error = 'Enter two numbers and a symbol as a string';
    } else if (typeof envelope1.a !== 'number' || typeof envelope1.b !== 'number' ) {
        error = 'Enter two sides of first envelope as properties a and b';
    } else if (typeof envelope2.c !== 'number' || typeof envelope2.d !== 'number') {
        error = 'Enter two sides of second envelope as properties c and d';
    }
        
    return error;
}

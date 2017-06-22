'use strict'

function task3 (arrayTriangles) {
    let result;
    let error = preValidate(arrayTriangles);

    if (error === '') {
        result = arrangeTriangles(arrayTriangles);
    } else {
        result = {status: 'failed', reason: error};
    }

    return result;
}
        
let getSquare = function (triangle) {
    let sides = [],
        square, p;

    for (let prop in triangle) {
        sides.push(triangle[prop]);
    }

    p = (sides[1] + sides[2] + sides[3])/2;
    square = Math.sqrt(p*(p - sides[1])*(p - sides[2])*(p - sides[3]));

    return square;
};

let getNames = function (triangle) {
    return triangle.vertices;
};

let arranging = function (a, b) {
    return b - a;
};

function arrangeTriangles (arrayTriangles) {
    let squares = arrayTriangles.map(getSquare);
    let names = arrayTriangles.map(getNames);
    let squaresArranging = squares.slice().sort(arranging);
    let namesArranging = [];

    for (let i = 0; i < squaresArranging.length; i++) {
        namesArranging.push(names[squares.indexOf(squaresArranging[i])]);
    }
            
    return namesArranging;
}

function preValidate (arrayTriangles) {
    let error = '';

    if (typeof arrayTriangles !== 'object') {
        error = 'Enter an array with triangles';
    } else if (typeof arrayTriangles[0] !== 'object' || 
               typeof arrayTriangles[1] !== 'object') {
        error = 'Enter an array with two or more triangles';
    }
    return error;
}

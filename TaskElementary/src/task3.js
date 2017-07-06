'use strict'

function task3 (arrayTriangles) {
    let error = preValidate3(arrayTriangles);

    return (!error)? arrangeTriangles(arrayTriangles): {status: 'failed', reason: error};
}

function arrangeTriangles (arrayTriangles) {
    let names = [];

    arrayTriangles.forEach((triangle) => getSquare(triangle));
    arrayTriangles.sort((a, b) => b.square - a.square);
    arrayTriangles.forEach((triangle) => names.push(triangle.vertices));

    return names;
}
        
function getSquare (triangle) {
    let square, p;

    p = (triangle.a + triangle.b + triangle.c) / 2;
    square = Math.sqrt(p*(p - triangle.a)*(p - triangle.b)*(p - triangle.c));
    triangle.square = square;

    return square;
};

function preValidate3 (arrayTriangles) {
    let error = '';

    if (typeof arrayTriangles !== 'object') {
        error = 'Enter an array with triangles';
    } else if (typeof arrayTriangles[0] !== 'object' || 
               typeof arrayTriangles[1] !== 'object') {
        error = 'Enter an array with two or more triangles';
    }
    
    return error;
}

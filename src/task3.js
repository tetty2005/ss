function task3 (arrayTriangles) {
    if (typeof arrayTriangles !== 'object') {
        return  {status: 'failed', reason: 'Enter an array with triangles'};
    } else if (typeof arrayTriangles[0] !== 'object' || typeof arrayTriangles[1] !== 'object') {
        return  {status: 'failed', reason: 'Enter an array with two or more triangles'};
    } else {
        
        let getSquare = function (triangle) {
            let triangleSides = [];

            for (let prop in triangle) {
                triangleSides.push(triangle[prop]);
            }

            let p = (triangleSides[1] + triangleSides[2] + triangleSides[3])/2;
            let square = Math.sqrt(p*(p - triangleSides[1])*(p - triangleSides[2])*(p - triangleSides[3]));

            return square;
        };

        let getNames = function(triangle){
            return triangle.vertices;
        };

        let arranging = function (a,b) {
            return b - a;
        };

        let squares = arrayTriangles.map(getSquare);    // создаем массив площадей
        let names = arrayTriangles.map(getNames);       // и массив названий треугольников
        let squaresArranging = squares.slice().sort(arranging); // сортируем площади в новый массив
        let namesArranging = [];                                // создаем искомый массив названий треугольников

        for (let i = 0; i < squaresArranging.length; i++){                      // и наполняем его 
            namesArranging.push(names[squares.indexOf(squaresArranging[i])]);   // согласно порядку площадей
        }
        
        return namesArranging;
    }
}

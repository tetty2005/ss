console.log(task1(10,20,'_'));
console.log('task1', task1(10,20));

console.log('task2', task2({a: 10, b: 24}, {c: 13, d: 15}));
console.log('task2', task2({a: 16.7, b: 24}, {c: 13.9, d: 15}));
console.log('task2', task2({a: 16.7}, {c: 13.9, d: 15}));
console.log('task2', task2({a: 16.7, b: 24}, {a: 13.9, b: 15}));;

console.log('task3', task3([{vertices:'ABC', a: 10, b: 20, c: 22.36}, {vertices:'DFG', a: 2, b: 3, c: 3}]));
console.log('task3', task3([{vertices:'ABC', a: 10, b: 20, c: 22.36}]));

console.log('task4', task4(3));
console.log('task4', task4(4334));
console.log('task4', task4(43345543));
console.log('task4', task4(1234437));
console.log('task4', task4('456'));

console.log('task5', task5({min: '378965', max: '100456'}));
console.log('task5', task5({min: '078965', max: '100456'}));
console.log('task5', task5({min: '435449', max: '435453'}));
console.log('task5', task5({min: '425449', max: ''}));

console.log('task6', task6(10, 25));
console.log('task6', task6(10));

console.log('task7', task7({min: 3, max: 100}));
console.log('task7', task7({length: 3}));

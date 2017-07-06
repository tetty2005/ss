function LittlePet_ES5M (name, food) {
    Pet_ES5M.call(this, name, food);
    this.name = name;
    this.food = food;
}

LittlePet_ES5M.prototype = Object.create(Pet_ES5M.prototype);
LittlePet_ES5M.prototype.whatDoYouWant = function (time) {
    Pet_ES5M.prototype.whatDoYouWant.call(this, time);
    if (time === 'evening') {
        console.log(`${this.name} also wants to sleap!!`)
    }
}

let kitten = new LittlePet_ES5M('Musya', 'milk');

kitten.eat();
kitten.whatDoYouWant('morning');
kitten.whatDoYouWant('evening');

console.dir(kitten);

class LittlePet_ES6 extends Pet_ES6 {
    constructor (name, food) {
        super(name, food);
    }

    whatDoYouWant (time) {
        super.whatDoYouWant(time);
        if (time === 'evening') {
            console.log(`${this.name} also wants to sleap!!`)
        }
    }
}

let littleHamster = new LittlePet_ES6('Mikky', 'milk');

littleHamster.eat();
littleHamster.whatDoYouWant('morning');
littleHamster.whatDoYouWant('evening');

console.dir(littleHamster);

var Pet_ES5M = (function () {
    function Pet (name, food) {
        this.name = name;
        this.food = food;
    }

    function eat () {
        console.log(`${this.name} likes ${this.food}.`);
    }

    Pet.prototype.eat = eat;

    Pet.prototype.whatDoYouWant = function (time) {
        let desire = (time === 'morning')? 
                    `${this.name} wants to eat!`: 
                    `${this.name} wants to walk!`;
        console.log(desire);
    }

    return Pet;
})();

let cat = new Pet_ES5M('Bagira', 'fish');

cat.eat();
cat.whatDoYouWant('morning');

console.dir(cat);

class Pet_ES6 {
    constructor (name, food) {
        this.name = name;
        this.food = food;
    }

    eat () {
        console.log(`${this.name} likes ${this.food}.`);
    }

    whatDoYouWant (time) {
        let desire = (time === 'morning')? 
                    `${this.name} wants to eat!`: 
                    `${this.name} wants to walk!`;
        console.log(desire);
    }
}

let hamster = new Pet_ES6('Dick', 'corn');

hamster.eat();
hamster.whatDoYouWant('morning');

console.dir(hamster);

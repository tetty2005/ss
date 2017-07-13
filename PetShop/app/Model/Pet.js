'use strict'

class Pet {
	constructor (color, price) {
		this.color = color;
		this.price = price;
	}

    isYourColor (_color) {
        return this.color === _color;
    }

    areYouFluffy () {
        return this.isFluffy;
    }

    areYouFluffyOrWhite () {
        return this.areYouFluffy() || this.isYourColor('white');
    }

    isYourPriceBigger (_price) {
        return this.price > _price;
    }
}

'use strict'

class PetShop {
    constructor () {
        this.pets = [];
    }

    addPets (pet) {
        this.pets.push(pet);
    }

    findCats () {
        let cats = this.pets.filter((pet) => {if (pet instanceof Cat) return pet});
        return cats;
    }

    findFluffyOrWhite () {
        let pets = this.pets.filter((pet) => {if (pet.areYouFluffyOrWhite()) return pet});
        return pets;
    }

    findPriceyPets () {
        let avarangePrice = this.findAvarangePrice();
        let pets = this.pets.filter((pet) => {if (pet.isYourPriceBigger(avarangePrice)) return pet});
        return pets;
    }

    findAvarangePrice () {
        let avarangePrice = 0,
            sum = 0;

        this.pets.forEach((value, key, set) => {
            sum += value.price;
        });

        avarangePrice = sum/this.pets.length;

        return avarangePrice;
    }
}

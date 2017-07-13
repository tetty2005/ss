'use strict'

class PetShopView {
	constructor () {
		this.petShop = new PetShop;
    }
    
    showOutput () {
        this.div = document.querySelector('.PetShop');
        this.div.innerHTML = this.getListsForOutput();
    }

    getListsForOutput () {
        let catList, priceyPets, fluffyOrWhite;

        catList = this.fillList('Cats:', this.petShop.findCats());
        priceyPets = this.fillList('Pets with price greater than average:', this.petShop.findPriceyPets());
        fluffyOrWhite = this.fillList('Fluffy Or White Pets:', this.petShop.findFluffyOrWhite());

        return catList + priceyPets + fluffyOrWhite;
    }

    fillList (listName, listContent) {
        let list = `<h1>${listName}</h1>`;

        listContent.forEach((value) => {
            list += `<li>${value.name}, ${value.price}$</li>`;
        });

        return `<div>${list}</div>`;
    }
}

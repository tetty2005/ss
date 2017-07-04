class PetShopView {
	constructor () {
		this.petShop = new PetShop;
    }
    
    showOutput () {
        this.div = document.querySelector('.PetShop');
        this.div.innerHTML = this.getListsForOutput();
    }

    getListsForOutput () {
        let listsForOutput,

            catList = this.petShop.findCats(),
            catString = '',

            priceyPetsList = this.petShop.findPriceyPets(),
            priceyPetsString = '',

            fluffyOrWhiteList = this.petShop.findFluffyOrWhite(),
            fluffyOrWhiteString = '';


        catList.forEach((value) => {
            catString += '<li>' + value.name + ', ' + value.price + '$' + '</li>';
        });

        priceyPetsList.forEach((value) => {
            priceyPetsString += '<li>' + value.name + ', ' + value.price + '$' + '</li>';
        });

        fluffyOrWhiteList.forEach((value) => {
            fluffyOrWhiteString += '<li>' + value.name + ', ' + value.price + '$' + '</li>';
        });

        listsForOutput = '<h1>Cats: </h1>' + '<ul>' + catString + '</ul>' + '<br>' +
                        '<h1>Pets with price greater than average: </h1>' + '<ul>' + priceyPetsString + '</ul>' + '<br>' +
                        '<h1>Fluffy Or White Pets: </h1>' + '<ul>' + fluffyOrWhiteString + '</ul>';

        return listsForOutput;
    }
}

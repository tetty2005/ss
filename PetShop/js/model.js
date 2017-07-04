class PetShop {
	constructor () {
		this.pets = new Set();
		this.pets.add(new Dog('white', 100, 'Snezhok'));
		this.pets.add(new Dog('brown', 500, 'Kashtanka'));
		this.pets.add(new Dog('black', 300, 'Gimmy'));
		this.pets.add(new Cat('white', 650, 'SnowWhite'));
		this.pets.add(new Cat('black', 550, 'Bagira'));
		this.pets.add(new Cat('red', 100, 'Reddy'));
		this.pets.add(new Hamster('white', 100, true));
		this.pets.add(new Hamster('grey', 150, true));
		this.pets.add(new Hamster('black', 50, false));
	}

	findAvarangePrice () {
		
	}

	isExpensivePet () {

	}

	isFluffyOrWhite () {

	}
}
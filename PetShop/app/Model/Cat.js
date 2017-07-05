class Cat extends Pet {
	constructor (color, price, name) {
		super(color, price);
		this.name = name;
		this.isFluffy = true;
	}
}
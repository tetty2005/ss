document.addEventListener('DOMContentLoaded', upload);

function upload () {
    let view = new PetShopView();

    view.petShop.addPets(new Dog('white', 100, 'Snezhok'));
    view.petShop.addPets(new Dog('brown', 500, 'Kashtanka'));
    view.petShop.addPets(new Cat('white', 650, 'SnowWhite'));
    view.petShop.addPets(new Dog('black', 300, 'Gimmy'));
    view.petShop.addPets(new Cat('black', 550, 'Bagira'));
    view.petShop.addPets(new Hamster('white', 100, true));
    view.petShop.addPets(new Hamster('grey', 150, true));
    view.petShop.addPets(new Hamster('black', 50, false));
    view.petShop.addPets(new Cat('red', 100, 'Reddy'));

    view.showOutput();
}
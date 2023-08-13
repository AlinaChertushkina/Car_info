//Объект, с которым работаем

const data = [
    {
        id: 1,
        type: 'car',
        brand: 'Audi',
        doors: 4,
        price: 4300000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
        id: 2,
        type: 'car',
        brand: 'Mercedes-Benz',
        doors: 4,
        price: 2800000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg'
    },
    {
        id: 3,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 210,
        price: 1300000,
        image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
    },
    {
        id: 4,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 220,
        price: 1400000,
        image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }
];

//Функция для добавления инфы на страницу

function addInfoToBrowser(info) {
    document.getElementById("info").innerHTML += info + "<br>";
}

//Сначала я вывела информацию из объекта через цикл, но потом вывела информацию только из класса
/*for (let i = 0; i < data.length; i++) {
    let info = "Тип: " + data[i].type + ", Бренд: " + data[i].brand + ", Цена: " + data[i].price;

    if (data[i].type === "car") {
        info += ", Количество дверей: " + data[i].doors;
    } else if (data[i].type === "bike") {
        info += ", Максимальная скорость: " + data[i].maxSpeed;
    }

    info += "<br><img src='" + data[i].image + "' width='300'><br>";

    addInfoToBrowser(info);
}*/


//Создаем класс Transport

class Transport {
    constructor(type, price, brand) {
        this.type = type;
        this.price = price;
        this.brand = brand;
    }

    getInfo() {
        return `Type: ${this.type}, Brand: ${this.brand}`;
    }

    getPrice() {
        return `Price ${this.price}`;
    }
}

//Создаем класс Car, который наследует от Transport, добавляем атрибут doors

class Car extends Transport {
    constructor(type, price, brand, doors) {
        super(type, price, brand);
        this.doors = doors;
    }
    getDoorsCount() {
        return `Doors count: ${this.doors}`;
    }
}

//Создаем класс Bike, который наследует от Transport, добавляем атрибут maxSpeed

class Bike extends Transport {
    constructor(type, price, brand, maxSpeed) {
        super(type, price, brand);
        this.maxSpeed = maxSpeed;
    }
    getMaxSpeed() {
        return `Max speed: ${this.maxSpeed}`;
    }
}

//Вывод информации по машине с использованием классов
const car1 = new Car('car', 4300000, 'Audi', 4);
addInfoToBrowser(car1.getInfo());
addInfoToBrowser(car1.getPrice());
addInfoToBrowser(car1.getDoorsCount());


//Вывод информации по мотоциклу с использованием классов
const bike1 = new Bike('bike', 1300000, 'Harley-Davidson', 210);
addInfoToBrowser(bike1.getInfo());
addInfoToBrowser(bike1.getPrice());
addInfoToBrowser(bike1.getMaxSpeed());

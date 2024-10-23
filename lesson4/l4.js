// Реалізовуємо свій компютерний магазин.
// ===
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
// Оперативна память.
// Потужність процесора. (цифра від 0 до 1000)
// Назва.
// В кожного компютера має бути метод включання.
class Computer{
    constructor (ram = 0, processorPower = 0, name = ''){
        this._ram = ram
        processorPower >=0 && processorPower <=1000 ? this._processorPower = processorPower : console.log('Processor power is wrong')
        this._name = name
    }

    get ram(){
        return this._ram
    }
    set ram(value){
        this._ram = value
     }

     get processorPower(){
        return this._processorPower
    }
     set processorPower(value) {
        if (value >= 0 && value <= 1000) {
            this._processorPower = value;
        } else {
            console.log('Processor power is wrong');
        }
    }

    get name(){
        return this._name
    }
    set name(value){
        this._name = value
     }

    powerOn(){
        console.log('Computer on')
    }

    upgradeRAM(newValue){
        newValue > this.ram && newValue < this.ram * 2 ? this.ram = newValue : console.log('Error!')
    }

    upgradeProcessorPower(newValue){
        newValue > this.processorPower / 10 && newValue > this.processorPower ? this.processorPower = newValue : console.log('Error!')
    }
}

let computer = new Computer(4, 400, 'RXO 47')
console.log(computer)
computer.powerOn()
// ===
// Від базового компютрера треба реалізувати ноутбук.
// Він має нову властивість дюймаж монітора.
// У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)
class Laptop extends Computer{
    constructor(ram = 0, processorPower = 0, name = '',monitorDiagonal = 0){
        super(ram, processorPower, name)
        this.monitorDiagonal = monitorDiagonal
        this.battery = processorPower/(monitorDiagonal * ram)
    }
}
let lenovo = new Laptop(6, 300, 'Lenovo A15', 13)
console.log(lenovo)
// ===
// Від ноутбука потрібно зробити ультрабук.
// Він має нову змінну ваги.
// При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.
// ===
class Ultrabook extends Laptop{
    constructor(ram = 0, processorPower = 0, name = '', monitorDiagonal = 0, veight = 0){
        super(ram, processorPower, name, monitorDiagonal)
        this.veight = veight
    }

    powerOn(){
        this.veight > 2 && this.battery < 4 ? console.log('Error!') : console.log('Computer on')
    }
}

let legion = new Ultrabook(8, 800, 'Legion 7', 25, 1)
console.log(legion)
legion.powerOn()

// Від базвого класу потрібно створити базовий ПК.
// В нього має бути новий метод запуску ігор.
// Кількість FPS визначається як потужність / опервтивку.
// Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`
class PC extends Computer{
    constructor(ram = 0, processorPower = 0, name = ''){
        super(ram, processorPower, name)
    }

    
    get fpsCount(){
        return this.processorPower / this.ram
    }

    playGame(gameName = ''){
        console.log(`You are playing ${gameName} with ${this.fpsCount} FSP`)
    }
}

let pc1 = new PC(6, 600, 'Acer')
console.log(pc1)
pc1.playGame('GoW')

// Компютер можна апгрейдити.
// Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
// Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
// Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.
pc1.upgradeRAM(8)
pc1.upgradeProcessorPower(700)
console.log(pc1)
pc1.playGame('GoW')

// ===
// Від базового ПК необхідно зробити ігровий ПК.
// Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
// При запуску однієї гри потужніть процесора має падати на 0.1%.
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно видати помилку, (алерт, або консоль)
// що на цьому відрі ігри не запускаються.
class GamePC extends PC{
    constructor(ram = 0, processorPower = 0, name = ''){
        super(ram, processorPower, name)
    }

    playGame(gameName = ''){
        this.processorPower = this.processorPower - this.processorPower /100
        this.processorPower < 500 && this.ram < 8 ? console.log('на цьому відрі ігри не запускаються') : console.log(`You are playing ${gameName} with ${this.fpsCount * 2} FSP`)
    }
}
let gamePC = new GamePC(6, 600, 'Ultra PC')
console.log(gamePC)
gamePC.playGame('GoW')
console.log(gamePC)
// ______________________________________________________________________________________________________________________________________________________
//                                                                 РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________

// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
class Car{
    constructor(model, yearOfManufacture, maxSpeed, engineCapacity){
        this._model = model
        this._yearOfManufacture = yearOfManufacture
        this._maxSpeed = maxSpeed
        this._engineCapacity = engineCapacity
    }
    get model(){
        return this._model
    }
    set model(value){
        this._model = value
    }

    get yearOfManufacture(){
        return this._yearOfManufacture
    }
    set yearOfManufacture(value){
        this._yearOfManufacture = value
    }

    get maxSpeed(){
        return this._maxSpeed
    }
    set maxSpeed(value){
        this._maxSpeed = value
    }

    get engineCapacity(){
        return this._engineCapacity
    }
    set engineCapacity(value){
        this._engineCapacity = value
    }

    drive(){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }
    info(){
        console.log("--------------")
        console.log(`Model: ${this.model}`)
        console.log(`YearOfManufacture: ${this.yearOfManufacture}`)
        console.log(`MaxSpeed: ${this.maxSpeed}`)
        console.log(`EngineCapacity: ${this.engineCapacity}`)
    }
    increaseMaxSpeed (newSpeed){
        this.maxSpeed += newSpeed
    }
    changeYear (newValue){
        this.yearOfManufacture = newValue
    }
    addDriver(driver){
        this._driver = driver
    }
}

let car = new Car('KIA', 2013, 180, 2.1)
car.info()
car.increaseMaxSpeed(20)
car.changeYear(2017)
car.info()

let driver = {
    name: 'Kolya',
    number: 47
}
car.addDriver(driver)
console.log(car)

// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
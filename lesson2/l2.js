// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let mass = []
mass[0] = 1
mass[1] = 'txt'
console.log(mass)

// - Створити масив з будь-якою кількістю елементів різного типу (string, number, boolean) та
// - вивести в консоль лише цифри
// - вивести в консоль лише стрічки, які мають 4 та більше символів.
// - вивести лише булівські значення true
let mass = [1, 'hi', 'hello', false, 4, '1234567', true]

for(let mas of mass){
    if(typeof(mas) === "number") console.log(mas)
}

for(let mas of mass){
    if(typeof(mas) === "string" && mas.length >= 4) console.log(mas)
}

for(let mas of mass){
    if(typeof(mas) === "boolean" && mas) console.log(mas)
}

// - Створити масив з 100 ітерацій, та вивести:
// - кожен індекс
// - тільки парні індекси (2, 4, 6, 8 ...)
// - індекси кратні 3 (3, 9, 12, 15 ...)

let mass = []
for(let i = 0; i < 100; i++){
    mass[i] = i;
}

for(let key in mass){
    console.log(key)
}

for(let key in mass){
    if(key % 2 === 0) console.log(key)
}

for(let key in mass){
    if(key % 3 === 0) console.log(key)
}

// - Дано масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
// - Дано масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
let mass = ['js', 'css', 'jq']
console.log(mass.shift())
console.log(mass.pop())

// - Дано масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
//     Підказка. Необхідно стерти елементи, зберегти їх кудись. Дописати букви і після букв повернути стерті цифри
let mass = [1, 2, 3, 4, 5]
let mass1 = []
mass1.push(mass.pop())
mass1.push(mass.pop())

mass.push('a')
mass.push('b')
mass.push('c')
mass.push(mass1.pop())
mass.push(mass1.pop())
console.log(mass)

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

let mass = []
for(let i = 1; i <= 10; i++){
    mass.push(i)
}

for(let mas of mass){
    if(mas % 2 === 0) console.log(mas)
}

let copy = []
for(let mas of mass){
    copy.push(mas)
}
console.log(copy)

let copy1 = []
for(let i = 0; i < mass.length; i++){
    copy1[i] = mass[i]
}
console.log(copy1)


// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
let mass = [2,17,13,6,22,31,45,66,100,-18]

// 1. перебрати його циклом while
let  i = 0
while(i < mass.length){
    console.log(mass[i])
    i++
}

// 2. перебрати його циклом for
for(let i = 0; i < mass.length; i++){
    console.log(mass[i])
}

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
let  i = 0
while(i < mass.length){
    if(i % 2 !== 0) console.log(mass[i])
    i++
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for(let i = 1; i < mass.length; i = i + 2){
    console.log(mass[i])
}

// 7. замінити кожне число кратне 3 на ваше імя
for(let key in mass){
    if(mass[key] % 3 === 0) mass[key] = "Sasha"
}
console.log(mass)

// 8. вивести масив в зворотньому порядку.
for(let i = mass.length - 1; i >= 0; i--){
    console.log(mass[i])
}

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
for(let i = mass.length - 1; i >= 0; i = i - 2){
    console.log(mass[i])
}

// 10
//  створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.
// - заповнити його 50 непарними числами за допомоги циклу.

let mass1 = []

for(let i = 0; i < 100; i = i + 2){
    mass1.push(i)
}
console.log(mass1)

for(let i = 1; i < 100; i = i + 2){
    mass1.push(i)
}
console.log(mass1)

// 1. Створити пустий масив та :
let mass1 = []

//        a. заповнити його 50 парними числами за допомоги циклу.
for(let i = 0; i < 100; i = i + 2){
    mass1.push(i)
}
console.log(mass1)

//        b. заповнити його 50 непарними числами за допомоги циклу.
for(let i = 1; i < 100; i = i + 2){
    mass1.push(i)
}
console.log(mass1)

//        c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
for(let i = 0; i < 20; i++){
    mass1.push(Math.floor(Math.random() * 100) + 1)
}
console.log(mass1)
//        d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

let minimum = 8
let maximum = 732
for(let i = 0; i < 20; i++){
    mass1.push( Math.floor(Math.random() * (maximum - minimum + 1)) + minimum)
}
console.log(mass1)


//  2. Вивести за допомогою console.log кожен третій елемен
for(let i = 2; i < mass1.length; i = i + 3){
    console.log(mass1[i])
}

//  3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for(let i = 2; i < mass1.length; i = i + 3){
    if(mass1[i] % 2 === 0) console.log(mass1[i])
}

//  4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let parCopy = []
for(let i = 2; i < mass1.length; i = i + 3){
    if(mass1[i] % 2 === 0) parCopy.push(mass1[i])
}
console.log(parCopy)

//  5. Вивести кожен елемент масиву, сусід справа якого є парним
//   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
let mass = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ]
for(let i = 0; i < mass.length; i++){
    if(mass[i+1] % 2 === 0) console.log(mass[i])
}

//  6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
let mass = [100,250,50,168,120,345,188]
let summ = 0
for(let mas of mass){
    summ += mas
}
console.log(summ / mass.length)

//  7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let mass = []
for(let i = 0; i < 10; i++){
    mass.push(Math.floor(Math.random() * 100) + 1)
}
console.log(mass)

let copyMass = []
for(let i = 0; i < mass.length; i++){
    mass[i] = mass[i] * 5
    copyMass.push(mass[i])
}
console.log(copyMass)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for in зібрати всі букви в слово.

let mass = [ 'a', 'b', 'c']
let word = ''

for(let i = 0; i < mass.length; i++){
    word += mass[i]
}
console.log(word)

while(mass.length > 0){
    word += mass.shift()
}
console.log(word)

for(let mas of mass){
    word += mas
}
console.log(word)

for(let key in mass){
    word += mass[key]
}
console.log(word)
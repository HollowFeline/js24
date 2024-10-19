// // 1) створити функцію яка приймає масив та виводить його
// function showArray(array = []){
//     for (const element of array) {
//         console.log(element)
//     }
// }

// // 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
// function createArray(){
//     let array = [];
//     for (let index = 0; index < 10; index++) {
//         array.push(Math.floor(Math.random() * 100) + 1)
//     }
//     showArray(array)
// }
// createArray()

// // 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function findMinNumber(num1 = 0, num2 = 0, num3 = 0){
//     if(num1 <= num2 && num1 <= num3) console.log('Min: ' + num1)
//         else if(num2 <= num1 && num2 <= num3) console.log('Min: ' + num2)
//             else console.log('Min: ' + num3)
// }
// findMinNumber(6,2,31)

// // 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function findMaxNumber(num1 = 0, num2 = 0, num3 = 0){
//     if(num1 >= num2 && num1 >= num3) console.log('Max: ' + num1)
//         else if(num2 >= num1 && num2 >= num3) console.log('Max: ' + num2)
//             else console.log('Max: ' + num3)
// }
// findMaxNumber()

// // 5) створити функцію яка повертає найбільше число з масиву
// function findMaxInArray(array = []){
//     return Math.max(...array)
// }
// console.log(findMaxInArray([1, 4, 5, 0, 2]))

// // 6) створити функцію яка повертає найменьше число з масиву
// function findMinInArray(array = []){
//     return Math.min(...array)
// }
// console.log(findMinInArray([1, 0, 5, 0, 2]))


// // 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// function sumArray(array = []){
//     let sum = 0;
//     for (const element of array) {
//         sum += element;
//     }
//     return sum
// }
// console.log(sumArray([1, 0, 5, 22, 2]))

// // 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function arithmeticMean(array = []){
//     return sumArray(array)/array.length
// }
// console.log(arithmeticMean([1, 0, 5, 22, 2]))

// // 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// // EXAMPLE:
// // [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// function keyReturn(objectArray = []){
//     let keyArray = []
//     for (const object of objectArray) {
//         for (const key in object) {
//             keyArray.push(key)
//         }
//     }
    
//     return keyArray
// }
// console.log(keyReturn([{name: 'Dima', age: 13}, {model: 'Camry'}]))

// // 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// // EXAMPLE:
// // [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
// function valueReturn(objectArray = []){
//     let valArray = []
//     for (const object of objectArray) {
//         for (const key in object) {
//             valArray.push(object[key])
//         }
//     }
    
//     return valArray
// }
// console.log(valueReturn([{name: 'Dima', age: 13}, {model: 'Camry'}]))

// // 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// //   EXAMPLE:
// //   [1,2,3,4]
// //   [2,3,4,5]
// //   результат
// //   [3,5,7,9]

// function summValue(array1 =[], array2 = []){
//     let sumArray = []
//     for (let index = 0; index < array1.length; index++) {
//         sumArray[index] = array1[index] + array2[index];
//     }
//     return sumArray
// }
// console.log(summValue([1,2,3,4], [2,3,4,5]))

// ============================================================================================

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function findMinMax(){
    let min = arguments[0]
    let max = arguments[0]
for (let index = 0; index < arguments.length; index++) {
    if(arguments[index] <= min) min = arguments[index]
    else if(arguments[index] >= max) max = arguments[index]
}
console.log('max: ' + max)
return min
}
console.log('min: ' + findMinMax(1, 53, 2, -7, 8, 2, 1))

// - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//   Що б я міг сам вибрати повернути мені масив ключів чи масив значень.

// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ] 

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// // - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// // Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// // let n1 = 'Harry Potter'
// // let n2 = 'Ron Whisley'
// // let n3 = 'Hermione Granger'

// function nameNormalizator(name = ''){
//     let normalName = ''
//     name = name.trim()
//     for (let i = 0; i < name.length; i++) {
//         if(!(name[i] === ' ' && name[i+1] === ' ')) normalName += name[i]
//     }
//     return normalName
// }

// function nameNormalizatorPlus(name = ''){
//     return name.trim().split(/\s+/).join(' ')
// }

// console.log(nameNormalizatorPlus(n1))
// console.log(nameNormalizatorPlus(n2))
// console.log(nameNormalizatorPlus(n3))

/* // - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write
let str1 = "hello"
let str2 = "owu"
let str3 = "ua"
let num1 = 1
let num2 = 10
let num3 = -999
let num4 = 123
let num5 = 3.14
let num6 = 2.7
let num7 = 16
let bool1 = true
let bool2 = false
document.write(str1);
console.log(str1); 
alert(str1);

// - Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write
str1 = "bb"
num1 = 111
bool1 = false
console.log(str1);
console.log(num1); 
console.log(bool1);

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//   Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
let name = prompt("Name")
let surname = prompt("Surname")
let age = prompt("Age")
console.log(name);
console.log(surname);
console.log(age);

// - Взяти змінні з завдання вище та зєднати їх в одну змінну (конкатинація).
let summ = str1 + str2 + str3 + num1 + num2 + num3 + num4 + num5 + num6 + num7 + bool1 + bool2;
console.log(summ); */

/* // - За допомогою prompt() отримати 3 числа. Привести їх до числа (Google "String to number JS"). Вивести їх в консоль.
let num1 = +prompt();
let num2 = +prompt();
let num3 = +prompt();
console.log(typeof(num1))
console.log(typeof(num2))
console.log(num3) */

/* // - За допомогою prompt() отримати 4 числа. Привести їх до числа за допомогою paeseInt. Додати їх всі мож собою і результат вивести в консоль.
let num1 = parseInt(prompt());
let num2 = parseInt(prompt());
let num3 = parseInt(prompt());
let sum = num1 + num2 +num3
console.log(sum) */

// - За допомогою prompt() отримати 3 числа з плаваючою точкою за допомогою parseFloat. 
//   Просумувати їх. Отрманий результат записати в змінну result. Вивести цю змінну в консоль.
let num1 = parseFloat(prompt());
let num2 = parseFloat(prompt());
let num3 = parseFloat(prompt());
let result = num1 + num2 +num3
console.log(result)
// - За допомогою prompt() отримати 3 числа з плаваючою точкою. Заокруглити їх (Google "round number JS"). Просумувати їх між собою. Результат вивести в консоль.
result = Math.round(num1) + Math.round(num2) + Math.round(num3)
console.log(result)

// - За допомогою prompt() отримати 2 цілих числа.
//   Перше число - це число яке будуть підносити до степеня. Друге число - це число яке являється степенню.
//   За допомогою Math.pow (Google) піднести перше число в степінь другого числа.
//   Example. Число 1 = 5. Число 2 = 2. Результат = 25 
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;
// - Поставет відповідний оператор в виразах що б вийшов відповідний результат.
//   В однакових виразаї не використовувати однакові оператори!!!
//     5 ? 6 -> true
//     5 ? 6 -> false
//     5 ? 6 -> false
//     5 ? 6 -> false
//     10 ? 10 -> true
//     10 ? 10 -> true
//     10 ? 10 -> false
//     10 ? 10 -> false
//     10 ? 10 -> false
//     123 ? '123' -> false
//     123 ? '123' -> true

// Додатково:
// - Подивіться на наступні вирази і спробуйте вгадати яким буде вивід в консоль. Перевірте себе.
//   console.log(132 > 100 && 45 < 12 );
//   console.log(34 > 33 && 23 < 90 );
//   console.log(99 > 100 && 45 > 12 );
//   console.log(132 > 100 || 45 < 12 );
//   console.log(111 > 11 || 45 < 111 );
//   console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );
//   console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );
//   console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );
//   console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));
//   console.log(!!'-1');
//   console.log(!!-1);
//   console.log(!!'0');
//   console.log(!!'null');
//   console.log(!!'undefined');
//   console.log(!!(3/'owu'));
//   console.log((111 > 11 || 45 < 111) ||  !!'0');
//   console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));

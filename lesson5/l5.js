// - Створити довільний елемент с id = text. використовуючи JavaScript, зробіть так, щоб при кліку на кнопку зникавл елемент с id="text".
let hideTextButton = document.getElementById("hideTextButton")
let text = document.getElementById("text")
hideTextButton.onclick = () => {
    text.hidden = true
}
// - Створіть кнопку, при кліку на яку, вона буде приховувати сама себе.
let hideButton = document.getElementById("hideButton")
hideButton.onclick = () => {
    hideButton.hidden = true
}
// - Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача
let ageButton = document.getElementById("ageButton")
let ageInput = document.getElementById("ageInput")
ageButton.onclick = () => {
    ageInput.value < 18 ? alert("Вік менше 18") : alert("Вік більше 18")
}

// - Створіть меню, яке розгортається/згортається при клику
let menu = document.getElementById("menu")
menu.onclick = () => {
   let menuItems = document.getElementById("menuItems")
   menuItems.hidden === true ? menuItems.hidden = false : menuItems.hidden = true
}


// - Створіть список коментарів , приклад об'єкту коментаря - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вивести список коментарів в документ, кожний в своєму блоці.
//     Додайте кожному коментарю по кнопці для згортання його body.
const comments = [
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem1', body:'lorem ipsum dolo sit ameti 1'},
    {title : 'lorem2', body:'lorem ipsum dolo sit ameti 2'}
]

for (const comment of comments) {
    const commentDiv = document.createElement('div');
    commentDiv.style.backgroundColor = 'red'
    commentDiv.style.margin = '10px'
    commentDiv.setAttribute('id', comment.title)
    
    commentDiv.innerHTML = `${comment.title} <p>${comment.body}</p>`
    document.body.appendChild(commentDiv)

    const commentButton = document.createElement('button');
    commentButton.style.backgroundColor = 'blue'
    commentButton.textContent = 'Delete'
    commentButton.onclick = () => {
        let body = document.querySelector(`#${comment.title} p`);
        body.hidden === true ? body.hidden = false : body.hidden = true
    }
    commentDiv.appendChild(commentButton)
}

// - Створити 2 форми  по 2 інпути в кожній. створити кнопку при кліку на яку зчитується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
//     Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
function getInfo(){
    const form1 = document.forms.form1;
    const form2 = document.forms.form2;
    console.log(`f1: ${form1.input1.value}\nf2: ${form2.input2.value}`)
}

// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кількість ячейок в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
function generateTable(rows, cells, container) {
    const table = document.createElement('table');
    
    for (let i = 0; i < rows; i++) {
        const row = document.createElement('tr');

        for (let j = 0; j < cells; j++) {
            const cell = document.createElement('td');
            cell.textContent = `${i + 1}, ${j + 1}`;
            cell.style.border = '1px solid black'
            row.appendChild(cell);
        }

        table.appendChild(row);
    }
    container.appendChild(table);
}

// Приклад використання:
const container = document.getElementById('tableContainer');
generateTable(3, 4, container);

// - Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо нажаттям на стрілочки.


// ______________________________________________________________________________________________________________________________________________________
//                                                               РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________


// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві нецензурних слів кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
function chekForCensorWords(){
    const censorWords = ['сука', 'тварь']
    const input = document.getElementById('inputCensor')
    for (let index = 0; index < censorWords.length; index++) {
        if(censorWords[index] === input.value) alert('АСУ!')
    }
}
// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
function chekForCensorWords1(){
    const censorWords = ['сука', 'тварь']
    const input = document.getElementById('inputCensor')
    for (let index = 0; index < censorWords.length; index++) {
        if(input.value.includes(censorWords[index])) alert('АСУ!')
    }
}
// -- Створити скрипт, котрий бере зчитує на сторінці (rules.html) текст і робить збоку меню-зміст по всіх заголовках які є в тексті.
//     При кліку на пункт заголовку ви маєте відправлятись  до цього пункту в тексті
const menu1 = document.getElementById('menu1')
const headers = document.querySelectorAll("h1, h2, h3, h4, h5, h6")

for (let index = 0; index < headers.length; index++) {
    const anchorId = `header-${index}`;
    headers[index].id = anchorId;

    const menuItem = document.createElement('a');
    menuItem.href = `#${anchorId}`
    menuItem.textContent = headers[index].textContent;
    menuItem.style.display = 'block';
    menu1.appendChild(menuItem);
}
// -- Взяти масив юзерів
const usersWithAddress = [
    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
    {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
    {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
];
// Створити три чекбокси. Кожний з них активує фільтр для вищевказаного масиву. Фільтри можуть працювати як разом так і окремо.
// 1й - відфільтровує юзерів зі статусом false (залишає зі статусом false)
// 2й - залишає старших 29 років включно
// 3й - залишає тих в кого місто Київ
// Дані виводить в документ

const isMarriedFilterCheckbox = document.getElementById('isMarriedFilter');
const ageFilterCheckbox = document.getElementById('ageFilter');
const cityFilterCheckbox = document.getElementById('cityFilter');
const output = document.getElementById('output');

function sortUsers() {
    let filteredUsers = usersWithAddress;

    if (isMarriedFilterCheckbox.checked) {
        filteredUsers = filteredUsers.filter(usersWithAddress => !usersWithAddress.isMarried);
    }

    if (ageFilterCheckbox.checked) {
        filteredUsers = filteredUsers.filter(usersWithAddress => usersWithAddress.age > 29);
    }

    if (cityFilterCheckbox.checked) {
        filteredUsers = filteredUsers.filter(usersWithAddress => usersWithAddress.address.city === 'Kyiv');
    }

    console.log(filteredUsers);
}

isMarriedFilterCheckbox.addEventListener('change', sortUsers);
ageFilterCheckbox.addEventListener('change', sortUsers);
cityFilterCheckbox.addEventListener('change', sortUsers);


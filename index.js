//1. Використовуючи функцію if...else,
//напишіть код, який буде запитувати:
//"What is the official name of JavaScript?"
//Якщо користувач ввів "ECMAScript",
//то показати через alert: "True!"
//у противному випадку показати:"Don't you know? ECMAScript!"

// let mess = prompt("What is the official name of JavaScript?");
// alert();
// if(mess === "ECMAScript"){
//     alert("True!");
// } else {alert("Don't you know? ECMAScript!");}

// const text =  mess === "ECMAScript"? "True!" : "Don't you know? ECMAScript!";
// alert(text);

// 2. Напишіть програму, яка запитає у користувача "Enter the number of minutes to format"
// число (кількість хвилин) і виведе в консоль
// рядок у форматі годин і хвилин, тобто 70 має повернути у консоль "01:10"
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

// const message = prompt('Enter the number of minutes to format')

// const hours = String(Math.floor(message / 60)).padStart(2, 0)
// // console.log('hours: ', hours)
// // const minutes = message - 60 * hours;
// // console.log("minutes", minutes)
// const minutes = String(message % 60).padStart(2, 0)
// // console.log('minutes: ', minutes)
// const result = `${hours}:${minutes}`
// console.log(result)

//
//
//

//3. Напишіть цикл, який виведе в консоль усі парні числа від max до min включно по зменшенню

// const max = 50
// const min = 23

// for (let i = max; i >= min; i -= 1) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// }

//4. За допомогою циклу for знайдіть добуток (результат множення) усіх парних чисел у проміжку від min до max включно

// const max = 20

// const min = 1
// let count = 1

// for (let i = min; i <= max; i += 1) {
//     if (i % 2 === 0) {
//         count *= i
//     }
// }
// console.log(count)

//5. Напишіть код, який буде запитувати логін за допомогою prompt "Hello, please enter your login!"
// і виводити результат у консоль браузера

//Якщо під час вводу login нажали клавішу Esc, то вивести у консоль рядок "Authorization has been cancelled"
//Якщо користувач вводить "admin", то prompt запитує пароль (Please enter your password)
//Якщо користувач вводить щось відмінне від "admin", то вивести рядок "Goodbye!"

//Пароль перевіряти так:
//Якщо нажали клавішу Esc, то вивести у консоль рядок "Authorization has been cancelled"
//Якщо користувач вводить "adminPassword", то вивести у консоль рядок "Hello!"
//Якщо користувач вводить щось відмінне від "adminPassword", то вивести рядок "Goodbye!"

//
// const loginInput = prompt("Hello, please enter your login!");
//

// const message = prompt('Hello, please enter your login!')

// if (message === null) {
//     console.log('Authorization has been cancelled')
// } else if (message === 'admin') {
//     const pass = prompt('Please enter your password')

//     if (pass === null) {
//         console.log('Authorization has been cancelled')
//     } else if (pass === 'adminPassword') {
//         console.log('Hello!')
//     } else {
//         console.log('Goodbye!')
//     }
// } else {
//     console.log('Goodbye!')
// }

// let text
// switch (message) {
//     case null:
//         text = 'Authorization has been cancelled'
//         break;
//     case 'admin':
//     const pass = prompt('Please enter your password')
//     switch (pass) {
//         case null:
//         text = 'Authorization has been cancelled'
//         break;

//         case 'adminPassword':
//         text = 'Hello!'
//         break;

//         default:
//             text = 'Goodbye!'
//             break;
//     }
//         break;

//     default:
//         text = 'Goodbye!'
//         break;
// }

// console.log(text);

//6. При завантаженні сторінки користувачу у prompt пропонується ввести число 'Hello, enter please the number'.
// Введене число додається до значення змінної total.
//Операція введення числа продовжується до тих пір, поки користувач не натисне кнопку Cancel у prompt.
//Після того, як користувач припинив серію введень і натиснув кнопку Cancel, показати alert з рядком "The total sum of the entered numbers is [total]."
//Робити перевірку, що користувач ввів саме число, а не довільний рядок не потрібно.

//
// let inputValue = prompt("Hello, enter please the number");
//

//7. Напишіть цикл, який пропонує ввести
//число більше 100 через prompt 'Hello, enter please the number greater then 100.' та виводить його у alert, якщо умова виконана
//Якщо користувач ввів інше число, то попросити ввести ще раз і так далі.
//Цикл повинен запитувати число, поки користувач не введе число більше 100.
// Якщо користувач натисне кнопку відміни у prompt, то у alert треба вивести 'Goodbye'.

//
// let input = prompt("Hello, enter please the number greater then 100.");
//

// 8. При завантаженні сторінки користувачу у prompt пропонується ввести число від 0 до 59 'Hello, enter please the number between  0 and 59'.
//Зроби перевірку на відповідність введеного числа вказаному діапазону (0-59). Якщо число не відповідає виведіть
//alert з повідомленням "The [number] is outside 0 and 59"
// Визначте в яку чверть години попаде
// це число(в першу, другу, третю чи четверту) та виведіть це повідомлення у консоль, наприклад, "Number [number] refers to 2 quarters".
// 0 - 15 1ша чверть
// 16 - 30 2га чверть
// 31 - 45 3тя чверть
// 46 - 59 4та чверть

//// let inputValue = prompt("Hello, enter please the number between  0 and 59");
//
//

//9. Дано рядок, що складається із символів, наприклад, 'a1abcde'.
// Перевір, що першим символом цього рядка є літера 'a'.
// Якщо так - виведи 'yes' у консоль, в противному випадку виведи 'no'.

//
// const str = "abcde";
//

// 10. Напишіть функцію, яка приймає два параметри довжину і елемент-заповнювач та повертає масив з вказаною довжиною і заповнює його переданим елементом
// наприклад, виклик функції fillArray(3, 'a') має повернути масив ['a', 'a', 'a']
//
//
//

/// 11. Написати функцію, яка буде видаляти з масива усі значення, які приводяться до false
// undefined, null, false, '', 0, NaN

//
// const array = [
//   1,
//   0,
//   54,
//   "doc",
//   null,
//   "jpg",
//   undefined,
//   "",
//   "png",
//   "exe",
//   false,
//   "mp4",
//   NaN,
//   "hbs",
// ];

// 12. Напиши скрипт, який порівняє два масива і виведе у консоль результат чи усі елементи у них однакові

//
// const arr1 = [1, 4, 6, "color", 324, 232, "list", 11, 9, "dream", 34, 0, -30];
// const arr2 = [6, "dream", -30, 11, 9, 1, 324, 34, "color", 4, 232, 0, "list"];

// const arr3 = [4, 232, 6, -30, "color", 324, "list", 1, 11, 9, "dream", 34, 0];
// const arr4 = ["color", 6, -30, 11, 9, 1, "dream", 324, 34, 4, 232, 0, "list"];

// const arr5 = [1, 4, 6, "color", "list", 11, 9, "dream", 34, 0, -30, "lesson"];
// const arr6 = [6, 324, "dream", -30, 9, 8, 34, "color", 4, 232, 0, "list", 11];

// const arr7 = [1, 4, 6, "color", 324, 232, "list", 11, 9, "dream", 34, 0, -30];
// const arr8 = [6, "dream", -30, 10, 9, 1, 324, 34, "color", 4, 232, 0, "list"];
//

//1. Напишіть скрипт, який для об'єкта user, послідовно:
//1 додасть властивість mood зі значенням 'happy'
//2 замінить значення властивості hobby на 'skydiving'
//3 замінить значення властивості premium на false
//4 використовуючи Object.keys() и for...of, виведе у консоль зміст об'єкта users у форматі:
//name: John
//"age: 20"
//"hobby: skydiving"
//"premium: false"
//"mood: happy"

// const user = {
//     name: 'John',
//     age: 20,
//     hobby: 'tenis',
//     premium: true,
// }

// user.mood = 'happy'
// user.hobby = 'skydiving'
// user.premium = false

// const keys = Object.keys(user)
// for (const key of keys) {
//     console.log(`${key}: ${user[key]}`)
// }

//2. Є об'єкт, в якому зберігаються зарплати команди. Напишіть функцію getTotalSalary, яка буде повертати загальну суму зарплат. Якщо об'єкт пустий, то функція має повернути 0

// const salaries = {
//     mango: 100,
//     poly: 160,
//     ajax: 1470,
//   };

// const getTotalSalary = function(salaries) {
//     const values = Object.values(salaries)

//     let totalSalary = 0;

//     for (const value of values) {
//         totalSalary += value;
//     }
//     return totalSalary;
// }
// console.log(getTotalSalary(salaries));

//3. Напишіть фукцію calcTotalPrice(stones, stonesName),
//яка приймає масив об'єктів і рядок з назвою каменю.
//Функція обчислює і повертає загальну вартість каменів з таким іменем

// const stones = [
//     { name: 'emerald', price: 1300, quantity: 4 },
//     { name: 'diamond', price: 2700, quantity: 6 },
//     { name: 'sapphire', price: 400, quantity: 7 },
//     { name: 'rubble', price: 150, quantity: 100 },
//   ]

//   const calcTotalPrice = (stones, stonesName) => {
//     let total = 0
//     for(const {name, price, quantity} of stones) {
//         if(stonesName === name) {
//             total += price * quantity;
//         }
//     }
//     return total
//   }
// console.log(calcTotalPrice(stones, 'sapphire'));

//4. Створіть об'єкт calculator з трьома методами
//read(a, b) - приймає два аргумента та зберігає їх як властивості об'єкта під ключами prop1 та prop2
//sum() перевіряє чи присутні  властивості prop1/prop1 та повертає їх суму, в противному випадку повертає null
//mult() перевіряє чи присутні  властивості prop1/prop2 та повертає їх добуток, в противному випадку повертає null
// Не забудьте, що математичні оператори працюють коректно тільки з числовими значеннями

//const calculator = {
/* read(a, b) {
        if (!isNaN(a) && !isNaN(b)) { this.prop1 = a; this.prop2 = b }
    },
    
    sum() {
        if (this.hasOwnProperty(`prop1`) && this.hasOwnProperty(`prop2`)) {
            return this.prop1 + this.prop2;
        }
        return null;
    },
    
    mult() {
     if (this.hasOwnProperty(`prop1`) && this.hasOwnProperty(`prop2`)) {
            return this.prop1 * this.prop2;
        } 
        return null;
    },
    
};
calculator.read(18);
console.log(calculator.sum());
*/

//6. Напишіть функцію updateObject, яка приймає об'єкт та перелік ключів
//і повертає новий об'єкт без вказаних властивостей
//Очікуваний результат ({ a: 1, b: 2, c: 3 }, 'b', 'c') => {a: 1}

// const updateObject = function (obj, ...removedKeys) {
//     const newObj = {}
//     const keys = Object.keys(obj)
//     // console.log(keys)
//     for (const key of keys) {
//         if (!removedKeys.includes(key)) {
//             newObj[key] = obj[key]
//         }
//     }
//     return newObj
// }

// const updateObject = function (obj, ...removedKeys) {
//     const newObj = { ...obj }
//     for (const key of removedKeys) {
//         delete newObj[key]
//     }
//     return newObj
// }
// console.log(updateObject({ a: 1, b: 2, c: 3 }, 'b', 'c')) // {a: 1}
// console.log(updateObject({ a: 1, b: 2, c: 3 }))
// console.log(updateObject({ a: 1, b: 2, c: 3 }, 'c'))

//1. Напишіть дві функції
// letMeSeeYourName(callback) - має запитувати ім'я користувача через prompt і викликати callback функцію
//greet(name) - коллбек, що приймає ім'я і логірує в консоль рядок "Привіт <name>"
//Реалізуй перевірку, що prompt не пустий

// const letMeSeeYourName = (callback) => {
// const name = prompt("Enter your name")
// if(name) {
//   callback(name);
// }

// }
// const greet = (name) => {
//   console.log(`Привіт ${name}`);
// }

// letMeSeeYourName(greet);

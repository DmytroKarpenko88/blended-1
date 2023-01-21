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

const message = prompt('Enter the number of minutes to format');


const hours = String(Math.floor(message / 60)).padStart(2, 0);
// console.log('hours: ', hours)
// const minutes = message - 60 * hours;
// console.log("minutes", minutes)
const minutes = String(message % 60).padStart(2, 0);
// console.log('minutes: ', minutes)
const result = `${hours}:${minutes}`;
console.log(result)





//
//
//

//3. Напишіть цикл, який виведе в консоль усі парні числа від max до min включно по зменшенню

//
// const max = 50;
// const min = 23;
//

//4. За допомогою циклу for знайдіть добуток (результат множення) усіх парних чисел у проміжку від min до max включно

//
// const max = 50;
// const min = 0;
//

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

// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.

let arry = [ 3, 38, 346, 73, 4, 45, 278, 94, 56, 389];
let result = (3+38+346+73+4+45+278+94+56+389);
console.log(result);

// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр

let book = {
    name:'New lands',
    pages: 130,
    genre: 'combat fantasy'};

// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори

let book2 = {
    name:'The thirteenth bride',
    pages: 184,
    genre: 'fantasy',
    author: 'Zavoychinskaya Milena'};

// 4. Створити масив об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт

let books = [book, book2];
console.log(books[0]);
console.log(books[1]);

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.

let height = 23;
let width = 10;
let s = height * width;
console.log(s);


// 6.Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.

let heightC = 10;
let dC = 4;
let pi = 3.14159;
let v = (dC/2)*(dC/2)*pi*heightC;
console.log(v);

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь)
// або оператор зведення в ступінь **).

let  n = 3;
let m = 4;
let k = Math.sqrt(Math.pow(n,2) + Math.pow(m,2));
console.log(k);

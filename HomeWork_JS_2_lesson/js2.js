// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
//     до якої четверті години попадає число (в першу, другу, третю или четверту частину години).

let time = 50;
if (time > 0 && time <=60 ) {
    if (time > 0 && time<=15)
    console.log('the first quarter of an hour');
    if (time > 15 && time<=30) {
        console.log('the second quarter of an hour')
    } else if (time > 30 && time<=45) {
        console.log('the third quarter of an hour')
    } else if (time >45 && time<=60){
        console.log('the fourth quarter of an hour')
    }
} else {console.log('undefind hour')}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця
// потрапляє це число (у першу, другу чи третю).


let day = 16;
if (day >0 && day <=31) {
    if (day >0 && day <=10) {
        console.log('the first part of the month')
    } else if (day > 10 && day <=20){
        console.log('the second part of the month')
        } else if (day >20 && day <=31){
        console.log('the third part of the month')
        }
} else console.log('undefind');


// - У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
// Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта -
// з коротким записом(тернаркою)

let test = '';
if (!!test) {
    console.log(false)
}else {
    console.log(true)
}


// let test2 = '' ?  'false' : 'true'; // якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
// console.log(test2);

// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3

let a = 0;
if (a === 0) {
    console.log(true);
} else {console.log(false)}



// - Скласти розклад на тиждень за домопоги switch.
//     Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано
//     на цей день.

let day2 = +prompt('enter the day number of the week')
switch (day2) {
    case 1:
        document.write('<h>Plan_1</h>');
        break;
    case 2:
        document.write('<h>Plan_2</h>');
        break;
    case 3:
        document.write('<h>Plan_3</h>');
        break;
    case 4:
        document.write('<h>Plan_4</h>');
        break;
    case 5:
        document.write('<h>Plan_5</h>');
        break;
    case 6:
        document.write('<h>Plan_6</h>');
        break;
    case 7:
        document.write('<h>Plan_7</h>');
        break;
    default:
        document.write('wrong number');
}

// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

let a2 = +prompt('Введіть номер року');
let b2 = a2 % 4;
if (b2 === 0){
    consol.log('Високосний')
} else {console.log('Не високосний')}

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме:
//     „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!»,
// інакше – відобразити: «Не знаєте? ECMAScript!

let name = prompt('Яка «офіційна» назва JavaScript?');
if (name === 'ECMAScript') {
    console.log('Правильно!')
} else {console.log('Не знаєте? ECMAScript!')}

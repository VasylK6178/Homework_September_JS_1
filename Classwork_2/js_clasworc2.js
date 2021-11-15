// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

let num = + prompt ('enter the number');
let num2 = + prompt ('enter the number');
if (num < num2 ) {
    console.log(num2);
    if (num > num2) {
        console.log(num);
    }

} else {console.log(num)}

// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

let numFlat = +prompt('enter the number of flat')
 if (numFlat>=1 && numFlat<=90) {
     if (numFlat >=1 && numFlat<=20) {
         console.log('first entrance');
     }
     if (numFlat >20 && numFlat<=48) {
         console.log('second entrance');
     } else if (numFlat >48 && numFlat<=90) {
         console.log('third entrance');
     }

 } else {console.log('another house');}

// - Ми маємо змінну number в яку користувач задає числове значення,
//     якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО

let a2= 5;
let number = a2 === 10 ? 'true' : 'false';
console.log(number);

// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else
//
// let x = prompt ('enter a value');
// if (x===+'' || x==='' || x===true || x=== false || x=== {} || x===[]){
//     if (x===+''){
//         console.log(1);
//     } if (x==='') {
//         console.log(2);
//     } if (x=== true){
//         console.log(3);
//     } if (x=== false ){
//         console.log(3);
//     } if (x=== {} ) {
//         console.log(4);
//     } if (x===[]) {
//         console.log(4);
//     }
// } else {console.log('undefined')}

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення
// що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

let temp = 12;
if (temp >10 && temp <22) {
    console.log('ми йдемо ВЧИТИСЯ');
} else {console.log('сидимо вдома і вчимося ОНЛАЙН')}


// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5.
// І взалежності від введеного  числа нам дається приз. (Авто, Мото, Телефон, і т.д )
// і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .

let num = +prompt ('pleas enter number from 1 to 5')
switch (num) {
    case 1:
        console.log('you will receive a prize - Auto');
        break;
    case 2:
        console.log('you will receive a prize - Moto');
        break;
    case 3:
        console.log('you will receive a prize - Phone');
        break;
    case 4:
        console.log('you will receive a prize - Laptop');
        break;
    default :
        console.log('the number is incorrect');
}
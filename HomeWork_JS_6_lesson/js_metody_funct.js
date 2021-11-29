// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str='hello world';
console.log(str.length); //11

let str2='lorem ipsum';
console.log(str2.length); //11

let str3= 'javascript is cool';
console.log(str3.length); //18

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let strUpp='hello world';
console.log(strUpp.toUpperCase());

let strUpp2='lorem ipsum';
console.log(strUpp2.toUpperCase());

let strUpp3='javascript is cool';
console.log(strUpp3.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let strLow='HELLO WORLD';
console.log(strLow.toLowerCase());

let strLow2='LOREM IPSUM';
console.log(strLow2.toLowerCase());

let strLow3='JAVASCRIPT IS COOL';
console.log(strLow3.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let strdrt = ' dirty string   ';
console.log(strdrt.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

function stringToarray(str) {
       let arr = str.split(' ');
       console.log(arr);
        document.write(`<div>${arr}</div>`);
}
stringToarray( 'Каждый охотник желает знать');


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый


let strK='Каждый охотник желает знать';
function delete_characters(strK, length) {
    let slice = strK.substr(0,length);
    console.log(slice);
    document.write(`<div>${slice}</div>`);
}
delete_characters(strK, 7);


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
//     При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let strLeng = "HTML JavaScript PHP";
function insert_dash(strLeng) {
    let replace = strLeng.replaceAll(' ','-').toUpperCase();
    console.log(replace);
    document.write(`<div>${replace}</div>`);
}
insert_dash(strLeng);

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр
// першого символу рядка з нижнього регістру у верхній.


let strList='каждый охотник желает знать';
function argUpp(strList) {
    let firstitem = strList[0].toUpperCase() + strList.slice(1);
    console.log(firstitem);
}
argUpp(strList);

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let capitalize = (str) => {
    return str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
};
document.write(capitalize('okten hi you are welcome'));
console.log(capitalize('okten hi you are welcome'));

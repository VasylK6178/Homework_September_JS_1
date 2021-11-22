
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function areaOfrectangle(a,b) {
    return a * b;

}
 areaOfrectangle(10,20);

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function areaOfcircl(r) {
    let pi = 3.14159;
    return pi * Math.pow(r, 2);
}
areaOfcircl(5);


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function areaOfcilindr(h,r) {//
    return  Math.PI*h*Math.pow(r,2);
}
areaOfcilindr(10, 5);


// - створити функцію яка приймає масив та виводить кожен його елемент

function cons(users) {
    for(user of users){
    console.log(user);
    }
}

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function paragrf(asdf){
    document.write(`<p>${asdf}</p>`);
}
paragrf('arteijwnccn');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function blok(text) {
    document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`</ul`);
}
blok('hello');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function blok2(text,size) {
    document.write(`<ul>`);
    for (i=0; i<size; i++){
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul`);
}
blok2('okten',3);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
function arry(item) {
    for (i=0; i<arguments.length;i++){
        document.write(`<div>${arguments[i]}</div>`);
    }
}
arry(8,'djcneb',true);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.' +
// ' Для кожного об'єкту окремий блок.
//
function arry2(id,name,age) {
    for (i=0;i<arguments.length;i++){
        let item = arguments[i];
        document.write(`<div>${item}</div>`);
    }
}
arry2(5,'Kola',25);
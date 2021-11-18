// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let nums = [34,52,781,23,456,];
console.log(nums);
let strings = ['hello','okten','owu','werry','good'];
console.log(strings);
let mas = ['ffmn', 5, true, 'ldkkkj',false];
console.log(mas);

// -- Створити пустий масив. Наповнити його будь-якими значеннями
// звертаючись до конкретного індексу. Вивести в консоль

let arryElem = [];
arryElem[1] = 848;
arryElem[2] = 'djnnfv';
arryElem[3] = true;
arryElem[4] = 'jrrjrj';
arryElem[5] = 737;
console.log(arryElem);

// //
// // // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i=0; i<10;i++) {
    document.write('<div>hello</div>');
}
//
// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (i=0; i<10;i++) {
    document.write(`<div>hello ${i}</div>`);
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let i=0;
while (i<20){
    document.write('<h1> Good </h1>');
    i++;
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let i=0;
while (i<20){
    document.write(`<h2>okey ${i} </h2>`);
    i++;
}

// // - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arrNams = [34,67,8989,23,565,45,234,67,42,82];
for (let arrNam of arrNams ) {
    console.log(arrNam);
}
// // - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let arrStrings = ['djnj','rhhb', 'oxoxo','enru','wbvj','bhbvxh','ebcj','vwjk','yhuvjdj','wkcm'];
for (let arrString of arrStrings){
    console.log(arrString);
}

// // - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.


let arrElemnts=[56,'eioik',34939,'yrb','bnjb',true,3636,'eennr66',2288,'e73l,5jnn3']
for (let arrElemnt of arrElemnts ){
    console.log(arrElemnt);
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

let arrItems=[376,true,'dhbe',false,373737,'rhbr',true,3763, 'dbdy',false];
for (let i=0;i<10;i++){
    let arr=arrItems[i];
    if (typeof arr ==='boolean') {
        console.log(arr);
    }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

let arrItems2=['rhjrh',6363,true,'jbhchbj',false,63636,'cbehye',367,true,false];
for (let i=0; i<10; i++){
    let arr2 = arrItems2[i];
    if (typeof arr2 === 'number'){
    console.log(arr2);
    }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

let arrItems3 = ['djhh',36373,true,'cbhhebh',false,33636,'csoenvg',6363,'wcypm',336];
for (let i=0; i<10; i++){
    let arr3 = arrItems3[i];
    if(typeof arr3 === 'string'){
        console.log(arr3);
    }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
//
let arrEmpts=[];
arrEmpts[0] = true;
arrEmpts[1] = 345;
arrEmpts[2] = 'jhbhhb';
arrEmpts[3] = 56;
arrEmpts[4] = false;
arrEmpts[5] = 376367;
arrEmpts[6] = 'weicn';
arrEmpts[7] = true;
arrEmpts[8] = 4838;
arrEmpts[9] = false;
for (let arrEmpt of arrEmpts){
    console.log(arrEmpt)
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i =0; i<10; i++){
    console.log(i);
    document.write(i);
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i =0; i<100; i++){
    console.log(i);
    document.write(i);
}


// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i =0; i<100; i+=2){
    console.log(i);
    document.write(i);
}


// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i =0; i<100; i++){
    if(i%2===0) {
    console.log(i);
    document.write(`<h2> ${i}</h2>`);
    }
}


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i =0; i<100; i++){
    if(i%3===0){
        console.log(i);
    document.write(`${i}`);
    }
}





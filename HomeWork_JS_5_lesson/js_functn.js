// Всі функції повинні бути описані стрілочним типом!!!!
//      - створити функцію яка обчислює та повертає площу прямокутника висотою

let area = (h,l)=> h*l;
console.log(area(5,10));


//     - створити функцію яка обчислює та повертає площу кола

let areaCircl=(r)=> Math.PI*(Math.pow(r,2));
console.log(areaCircl(10));


//   - створити функцію яка обчислює та повертає площу циліндру

let areaCilindr = (r,h)=> Math.PI*Math.pow(r,2)*h;
console.log(areaCilindr(5,10));


// - створити функцію яка приймає масив та виводить кожен його елемент

let arry = [32,54,87,22,2,6];
let arryFiltr=arry.filter((elem)=> console.log(elem));


// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

let paragraf=(text)=> document.write(`<p>${text}</p>`);
paragraf('hello'+' '+'okten');


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let list= (text)=>{
    document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
};
list('wellcome'+' '+'okten');


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//      Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let list2= (text,size)=>{
    document.write(`<ul>`);
    for(i=0;i<size; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
};
list2('open_world',5);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arry2 = [32,'hello',true,22,false,6];
let sameItemfiltr = arry2.filter((element)=> console.log(element));



// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.


let sameItem = (id,name,age)=> {
    document.write(`<h2>${id} ${name} ${age}</h2>`)
     };
sameItem(3,'Kolya',25)




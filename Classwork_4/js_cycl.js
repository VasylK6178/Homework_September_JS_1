// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

function min(a,b,s) {
    if (a<b && a<s){
        console.log(a);
    } else if(b<a && b<s){
        console.log(b);
    } else if(s<a && s<b){
        console.log(s);
    }
}

min(6,10,46);


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

function max(a,b,s) {
    if (a>b && a>s){
        console.log(a);
    } else if(b>a && b>s){
        console.log(b);
    } else if(s>a && s>b){
        console.log(s);
    }
}

max(6,10,46);



// - створити функцію яка повертає найбільше число з масиву

function maxnam(arry) {
    let max = arry[0];
    for(let nam of arry) {
        if(nam > max){
            max = nam;
        }
    }
    return max
}

let res = maxnam([3,4,5,6,83,787,234,566,]);
console.log(res); // результат- 787


// - створити функцію яка повертає найменьше число з масиву

function minnam(arry) {
    let min = arry[0];
    for(let nam of arry) {
        if(nam < min){
            min = nam;
        }
    }
    return min
}

let res = minnam([67,4,75,6,939,234,566,]);
console.log(res); // результат- 4

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

function addnam (arry){
    let sum = 0;
    for(let nam of arry){
        sum = sum + nam;
    }
    return sum;
}
let add = addnam([10,20,30]);
console.log(add);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function masnam(arry) {
    let sum = 0;
    for(let nam of arry){
        sum= sum + nam;
    }
     return sum / arry.length;
}
let mas = masnam([10,20,30]);
console.log(mas);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
//     а виводить найбільше (Math використовувати заборонено);

function nums(arry) {
    let min = arry[0];
    let max = arry[0];
    for (let nam of arry){
        if(nam<min){
            min = nam;
        }
        if (nam>max){
            max = nam;
        }
    }
    console.log(max);
    return min;
}

nums([4,56,33,5,323,6777,455,]);

// створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100))

function num(){
    let arry =[];
    for (let i=0;i<100;i++){
        arry[i]=Math.round(Math.random()*100);
    }
    return arry;
}


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
//     limit - аргумент, який характеризує кінцеве значення діапазону.


function num(arry,limit){
    for (let i=0;i<100;i++){
        arry[i]=Math.round(Math.random()*limit);
    }
    return arry;
}
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

function num(arry){
    let nextarry =[];
    for (let i=arry.length-1;i>=0;i--){
        let elemnt = arry[i];
        nextarry.push(elemnt);
    }
    return nextarry;
}

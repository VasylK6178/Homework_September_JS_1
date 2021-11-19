// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 1. перебрати його циклом while

let arrNams = [2,17,13,6,22,31,45,66,100,-18];

let i=0;
while (i<arrNams.length){
    console.log(arrNams[i]);
    i++;
}

// 2.перебрати його циклом for

for (let i=0; i<arrNams.length;i++) {
    console.log(arrNams[i]);
}

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

let i=1;
while (i<arrNams.length){
        console.log(arrNams[i]);
      i+=2;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (let i=1; i<arrNams.length; i+=2){
    let varNam = arrNams[i];
        console.log(varNam);
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення

let i=0;
while (i<arrNams.length){
    let arrItem =arrNams[i];
    if(arrItem%2 ===0) {
        console.log(arrItem);
    }
    i++;
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення

for (let i=0; i<arrNams.length; i++){
    let arrItem = arrNams[i];
    if (arrItem%2 ===0) {
        console.log(arrItem);
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"

for (arrNam of arrNams){
    if(arrNam%3 ===0) {
        arrNam = 'okten';
    }
    console.log(arrNam)
}


// 8. вивести масив в зворотньому порядку.

for (let i=arrNams.length-1;i>=0;i--){
    console.log([i])

}




// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед):

       // 1.(9): зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та перебрати
       //  його циклом while але в зворотньому циклі (с заду на перед):

let i= arrNams.length;
while (i--){
    console.log(arrNams[i]);

}

       // 2.(9) перебрати його циклом for   але в зворотньому циклі (с заду на перед):

for (let i=arrNams.length-1;i>=0;i--) {
    console.log(arrNams[i]);
}


      // 3.(9) перебрати циклом while та вивести  числа тільки з непарним
      // індексом, але в зворотньому циклі (с заду на перед)

let i=arrNams.length;
 while (i--) {
     if (i % 2 === 0) {
         console.log(arrNams[i]);

     }
 }


     //4.(9) перебрати циклом for та вивести  числа тільки з непарним
     // індексом, але в зворотньому циклі (с заду на перед):

for (let i=arrNams.length-1;i>=0;i-=2) {
    console.log(arrNams[i]);
}

      // 5.(9) перебрати циклом while та вивести  числа тільки парні
      //  значення,але в зворотньому циклі (с заду на перед):

let i= arrNams.length;
while (i--) {
    let arrItem = arrNams[i];
    if (arrItem % 2 === 0) {
        console.log(arrItem);
    }
}

       // 6.(9) перебрати циклом for та вивести  числа тільки парні
       // значення, але в зворотньому циклі (с заду на перед):


for (let i=arrNams.length; i>=0;i--){
    let arrItem = arrNams[i];
    if (arrItem%2 ===0) {
        console.log(arrItem);
    }
}

        // 7.(9) замінити кожне число кратне 3 на слово "okten",
        // але в зворотньому циклі (с заду на перед):

for (i=arrNams.length; i>=0;i--){
    let arrItem=arrNams[i];
    if(arrItem % 3 ===0) {
        arrItem = 'okten';
    }
    console.log(arrItem)
}




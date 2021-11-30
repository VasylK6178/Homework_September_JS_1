// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//
//  function User (id,name,surname,email,phone) {
//              this.id = id;
//              this.name = name;
//              this.surname = surname;
//              this.email = email;
//              this.phone = phone;
// }
//
//
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// let users =  [
//     new User(3,'Roman','Koval','djeuj@gmail.com', '+30968573749'),
//     new User(4,'Kjlya','Burak','svbt@gmail.com', '+30975075834'),
//     new User(2,'Olya','Pankiv','sevrrv@gmail.com', '+3099057363'),
//     new User(1,'Vova','Luciv','pehefg@gmail.com', '+306204894757'),
//     new User(10,'Cergay','Shpak','tyiorg@gmail.com', '+30988767455'),
//     new User(8,'Ruslan','Lupak','uluigr@gmail.com', '+309947464664'),
//     new User(9,'Oksana','Fedoriv','bjik,@gmail.com', '+3068347373773'),
//     new User(7,'Anja','Daniv','zvexv@gmail.com', '+30638484756763'),
//     new User(5,'Dima','Mota','pdvbt@gmail.com', '+30993784747756'),
//     new User(6,'Lesya','Kolesnikov','wbnki@gmail.com', '+3095985877366')
// ];
// console.log(users);
//
//
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// //
// let usersfiltr = users.filter(value => value.id % 2 ===0 );
// console.log(usersfiltr);
//
// //- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
//
// let userssortid = users.sort((a1,a2)=>{return a1.id-a2.id});
// console.log(userssortid);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order
// (поле є масивом зі списком товарів)

class Client {

    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
// створити пустий масив, наповнити його 10 об'єктами Client

let clientList = [
    new Client (2,'Petja','Kokos','dkdjk@ukr.net',3809746645, ['buckwheat','fig','potato','beet','carrot']),
    new Client (6,'Vasya','Ustinov','fvff@ukr.net',380978984895,['potato','beet','carrot']),
    new Client (4,'Igor','Koden','vkenbe@i.ua',380589398,[ 'fig','potato','beet','carrot']),
    new Client (3,'olya','KIsuern','dsjv@ukr.net',380649038989,['potato','beet','carrot']),
    new Client (1,'Maya','Gradova','wlbo0jk@ukr.net',3806694745,['beet']),
    new Client (9,'Ruslan','Luciv','c7km4m@ukr.net',380893894,['buckwheat','carrot']),
    new Client (8,'Sasha','Warnav','i349mk@i.ua',3804548290,['fig','potat','carrot']),
    new Client (5,'Natasha','Ctruk','mnrj@ukr.net',38099474665,['carrot','buckwheat']),
    new Client (10,'Ivanna','Vidov','ucxkjdj@ukr.net',3803536436,['buckwheat','fig']),
    new Client (7,'Jek','Buhin','jnio@i.ua',38066552082,['buckwheat','fig','potato','beet','carrot','onion']),

]
// console.log(clientList);

//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі
// order по зростанню. (sort)

let clientListsort = clientList.sort((a1,a2)=>{return a1.order.length-a2.order.length});
console.log(clientListsort);

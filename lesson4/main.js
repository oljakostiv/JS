// ==============================ДЗ==================================
// 
//1. Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами User 

// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }

// let users = [
//     new User('1', 'Ihor', 'Rohi', 'qwerty', '123445'),
//     new User('2', 'Oleh', 'Helo', 'trewq', '54321'),
//     new User('3', 'Roman', 'Namor', 'fdsaSA', '76543'),
//     new User('4', 'Vasyl', 'Lysav', 'hgfds', '87654'),
//     new User('5', 'Dima', 'Amid', 'oekvc', '765432'),
//     new User('6', 'Vova', 'Avov', 'rfvcxs', '12343'),
//     new User('7', 'Misha', 'Ahsim', 'qdcps', '543421'),
//     new User('8', 'Sasha', 'Ajhsas', 'fslfjla', '646234'),
//     new User('9', 'Nazar', 'Razan', 'effjsj', '7654323'),
//     new User('10', 'Petro', 'Ortep', 'ijajioshf', '987643')
// ];

// console.log(users);


// ===================================================================
// 2. Створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     } 
// }
// let clients = [
//     new Client('1', 'Ihor', 'Rohi', 'qwerty', '123445', ['Dell', 'HP', 'Apple']),
//     new Client('2', 'Oleh', 'Helo', 'trewq', '54321',  ['Dell', 'HP', 'Apple']),
//     new Client('3', 'Roman', 'Namor', 'fdsaSA', '76543',  ['Dell', 'HP', 'Apple']),
//     new Client('4', 'Vasyl', 'Lysav', 'hgfds', '87654',  ['Dell', 'HP', 'Apple']),
//     new Client('5', 'Dima', 'Amid', 'oekvc', '765432',  ['Dell', 'HP', 'Apple']),
//     new Client('6', 'Vova', 'Avov', 'rfvcxs', '12343',  ['Dell', 'HP', 'Apple']),
//     new Client('7', 'Misha', 'Ahsim', 'qdcps', '543421',  ['Dell', 'HP', 'Apple']),
//     new Client('8', 'Sasha', 'Ajhsas', 'fslfjla', '646234',  ['Dell', 'HP', 'Apple']),
//     new Client('9', 'Nazar', 'Razan', 'effjsj', '7654323',  ['Dell', 'HP', 'Apple']),
//     new Client('10', 'Petro', 'Ortep', 'ijajioshf', '987643',  ['Dell', 'HP', 'Apple'])
// ];

// console.log(clients);


// ===================================================================
// 3. Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"

// let car = {
//     model: 'Volvo',
//     maker: 'Swedish',
//     year: 2012,
//     maxSpeed: 180,
//     engine: '1,8',

//     speed: function() {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     },
   
// // -- info () - яка виводить всю інформацію про автомобіль  

//     info: function() {
//         if (this.driver) {
//         console.log(`model = ${this.model}
//                     maker = ${this.maker}
//                     year = ${this.year}
//                     maxSpeed = ${this.maxSpeed}
//                     engine = ${this.engine}
//                     driver: ${this.driver.name}
//         `)}
//         else {
//             console.log(`model = ${this.model}
//             maker = ${this.maker}
//             year = ${this.year}
//             maxSpeed = ${this.maxSpeed}
//             engine = ${this.engine}
//         `)};
//     },

// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

//     increaseMaxSpeed: function(newSpeed) {
//         this.maxSpeed += newSpeed;   
//     },

// // -- changeYear (newValue) - змінює рік випуску на значення newValue    

//     changeYear: function(newValue) {
//         this.year = newValue;
//     },

// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
    
//     addDriver: function(driver) {
//         this.driver = driver;
//     }

// };

// let driver = {
//     name: 'Pasha',
//     age: 28
// };

// car.addDriver(driver);
// car.increaseMaxSpeed(100);
// car.changeYear(2020);
// car.speed();
// car.info();


// ===================================================================
// 4. Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"

// class Car {
//     constructor(model, maker, year, maxSpeed, engine, driver) {
//         this.model = model;
//         this.maker = maker;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engine = engine;
//         this.driver = driver;
//     }

//     speed () {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }

// // -- info () - яка виводить всю інформацію про автомобіль

//     info () {
//         console.log(`model = ${this.model}
//                      maker = ${this.maker}
//                      year = ${this.year}
//                      maxSpeed = ${this.maxSpeed}
//                      engine = ${this.engine}
//                      driver = ${this.driver}
//         `)};

// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

//     increaseMaxSpeed (newSpeed) {
//         this.maxSpeed += newSpeed;
//     };

// // -- changeYear () - змінює рік випуску на значення newValue

//     changeYear (newValue) {
//         this.year = newValue;
//     };

// // -- addDriver () - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car ???

//      addDriver (driver) {
//          this.driver = driver;
//      }

// };

// const cars = new Car( 'Volvo', 'Swedish', 2012, 180, '1,8', 'Oleh');

// let driver = {
//              name: 'Pasha',
//             age: 28
//  }; 

// cars.addDriver(driver.name); 
// cars.changeYear(2020);
// cars.increaseMaxSpeed(50);
// cars.info();
// cars.speed();

// ===================================================================
// 5 Взяти масив з завдання 1.

// let users = [
//     {id: 1, name: 'Ihor', surname: 'Rohi', email: 'qwerty', phone: '123445'},
//     {id: 2, name: 'Oleh', surname: 'Helo', email: 'trewq', phone: '54321'},
//     {id: 3, name: 'Roman', surname: 'Namor', email: 'fdsaSA', phone: '76543'},
//     {id: 4, name: 'Vasyl', surname: 'Lysav', email: 'hgfds', phone: '87654'},
//     {id: 5, name: 'Dima', surname: 'Amid', email: 'oekvc', phone: '765432'},
//     {id: 6, name: 'Vova', surname: 'Avov', email: 'rfvcxs', phone: '12343'},
//     {id: 7, name: 'Misha', surname: 'Ahsim', email: 'qdcps', phone: '543421'},
//     {id: 8, name: 'Sasha', surname: 'Ajhsas', email: 'fslfjla', phone: '646234'},
//     {id: 9, name: 'Nazar', surname: 'Razan', email: 'effjsj', phone: '7654323'},
//     {id: 10, name: 'Petro', surname: 'Ortep', email: 'ijajioshf', phone: '987643'}
// ];

// // - Відфільтрувати , залишивши тільки об'єкти з парними id

//  let filter = users.filter(function (user) {
//    return  user.id%2===0;
//  });

//  console.log(filter);

// // - Відсортувати його по id. по зростанню

// let sort = users.sort(function (user1, user2) {
//     return user1.id - user2.id
// });

// console.log(sort);

// // - Відсортувати його по id. по спаданню

// let sort1 = users.sort(function (user1, user2) {
//     return user2.id - user1.id
// });

// console.log(sort1);

// ===================================================================
// 6. Взяти масив з завдання 2.
// Відсортувати його по кількості товарів в полі order. по спаданню

// let clients = [
//        {id: 1, name: 'Ihor', phone: 123445, order: ['Dell', 'HP', 'Apple']},
//        {id:2, name: 'Oleh', phone: 54321,  order: ['Dell', 'HP']},
//        {id: 3, name: 'Roman', phone: 76543, order: ['Dell', 'HP', 'Apple', 'Samsung']}
// ];
    
// let sort = clients.sort(function(a, b) {
//     if (a.order > b.order) {
//         return -1;
//     }
//     if (b.order > a.order) {
//         return 1}
//     });
// console.log(sort);






// ===================================================================
// Практичне:
// 
// 1. Cтворити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

// class Popelushka {
//     constructor(name, age, size) {
//         this.name = name;
//         this.age = age;
//         this.size = size
//     }
// };

// class Princ extends Popelushka {
//     constructor(name, age, boot) {
//         super(name, age);
//         this.boot = boot
//     }

//     yourBoot (arr) {
//         let find;
//         for (let item of arr) {
//             if (this.boot === item.size) {
//                 find=item
//             }
//         }
//         if(find) {
//             console.log(find.name)
//         }
    
//     };
// };

// const BigP = [
//     new Popelushka('Olena', 18, 36),
//     new Popelushka('Ira', 19, 37),
//     new Popelushka('Rita', 20, 38),
//     new Popelushka('Anna', 21, 39),
//     new Popelushka('Galia', 22, 38),
//     new Popelushka('Vira', 23, 37),
//     new Popelushka('Nina', 24, 36),
//     new Popelushka('Lera', 25, 35),
//     new Popelushka('Polina', 26, 36),
//     new Popelushka('Dasha', 27, 37)
// ];

// const princc = new Princ('Leo', 25, 37);
// princc.yourBoot(BigP);


//====================================================================
// 2. -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить


// function Popelushka (name, age, size) {
//     this.name = name;
//     this.age = age;
//     this.size = size;
// };

// function Princ (name, age, boot) {
//     this.name = name;
//     this.age = age;
//     this.boot = boot;


// this.yourBoot = function(arr) {
//             let find;
           
//             // for (let item of arr) {
//             //     if (this.boot === item.size) {
//             //         find=item
//             //     }
//             // }
//             // if(find) {
//             //     console.log(find.name)
//             // }
 
//             find = arr.find(item => item.size === this.boot)    
//                     console.log(find.name)   
//         };
// };

// const BigPop = [
//     new Popelushka('Olena', 18, 36),
//     new Popelushka('Ira', 19, 37),
//     new Popelushka('Rita', 20, 38),
//     new Popelushka('Anna', 21, 39),
//     new Popelushka('Galia', 22, 38),
//     new Popelushka('Vira', 23, 37),
//     new Popelushka('Nina', 24, 36),
//     new Popelushka('Lera', 25, 35),
//     new Popelushka('Polina', 26, 36),
//     new Popelushka('Dasha', 27, 37)
// ];

// const princc = new Princ('Leo', 25, 37);
// princc.yourBoot(BigPop);

// ===================================================================
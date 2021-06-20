// Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]
//    }

// function Tag(titleOfTag, action, attrs = []) {
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attrs = attrs
// };

// const arr = [
// new Tag (
//     'div',
//     `Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.`,
//     [{
//         titleOfAttr: 'align',
//         actionOfAttr: 'Задает выравнивание содержимого тега <div>.'
//     }, {
//         titleOfAttr: 'title',
//         actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'
//     }]),
// new Tag (
//     'script',
//     `Тег <script> предназначен для описания скриптов, может содержать ссылку на программу или ее текст на определенном языке.`,
//     [{
//         titleOfAttr: 'src',
//         actionOfAttr: 'Адрес скрипта из внешнего файла для импорта в текущий документ.'
//     }])
// ];
// console.log(arr);





// // 2. -- взять массив пользователей
// let usersWithAddress = [{
//         id: 1,
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             city: 'Lviv',
//             street: 'Shevchenko',
//             number: 16
//         }
//     },
//     {
//         id: 2,
//         name: 'petya',
//         age: 30,
//         status: true,
//         address: {
//             city: 'Kyiv',
//             street: 'Shevchenko',
//             number: 1
//         }
//     },
//     {
//         id: 3,
//         name: 'kolya',
//         age: 29,
//         status: true,
//         address: {
//             city: 'Lviv',
//             street: 'Shevchenko',
//             number: 121
//         }
//     },
//     {
//         id: 4,
//         name: 'olya',
//         age: 28,
//         status: false,
//         address: {
//             city: 'Ternopil',
//             street: 'Shevchenko',
//             number: 90
//         }
//     },
//     {
//         id: 5,
//         name: 'max',
//         age: 30,
//         status: true,
//         address: {
//             city: 'Lviv',
//             street: 'Shevchenko',
//             number: 115
//         }
//     },
//     {
//         id: 6,
//         name: 'anya',
//         age: 31,
//         status: false,
//         address: {
//             city: 'Kyiv',
//             street: 'Shevchenko',
//             number: 2
//         }
//     },
//     {
//         id: 7,
//         name: 'oleg',
//         age: 28,
//         status: false,
//         address: {
//             city: 'Ternopil',
//             street: 'Shevchenko',
//             number: 22
//         }
//     },
//     {
//         id: 8,
//         name: 'andrey',
//         age: 29,
//         status: true,
//         address: {
//             city: 'Lviv',
//             street: 'Shevchenko',
//             number: 43
//         }
//     },
//     {
//         id: 9,
//         name: 'masha',
//         age: 30,
//         status: true,
//         address: {
//             city: 'Kyiv',
//             street: 'Shevchenko',
//             number: 12
//         }
//     },
//     {
//         id: 10,
//         name: 'olya',
//         age: 31,
//         status: false,
//         address: {
//             city: 'Lviv',
//             street: 'Shevchenko',
//             number: 16
//         }
//     },
//     {
//         id: 11,
//         name: 'max',
//         age: 31,
//         status: true,
//         address: {
//             city: 'Ternopil',
//             street: 'Shevchenko',
//             number: 121
//         }
//     }
// ];

// // Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// // 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// // 2й - оставляет старше 29 лет включительно
// // 3й - оставляет тех у кого город киев
// // Данные выводить в документ


// // для консолі:
// // let statusFilter = document.getElementById('status');
// // let ageFilter = document.getElementById('age');
// // let cityFilter = document.getElementById('city');
// // let userDiv = document.createElement('div');

// // for (let user of usersWithAddress) {

// // let flagForStatusFilter = true;
// // statusFilter.onclick = function () {
// //     console.log('Status false:');
// //     if (flagForStatusFilter) {
// //         let usersWithStatusFalse = usersWithAddress.filter(value => !value.status);
// //         console.log(usersWithStatusFalse);
// //     }
// //     flagForStatusFilter = !flagForStatusFilter;
// // };

// // let flagForAgeFilter = true;
// // ageFilter.onclick = function () {
// //     console.log('Age>30:');
// //     if (flagForAgeFilter) {
// //         let usersWithAgeGT30 = usersWithAddress.filter(value => value.age > 30);
// //         console.log(usersWithAgeGT30);
// //     }
// //     flagForAgeFilter = !flagForAgeFilter;
// // };

// // let flagForCityFilter = true;
// // cityFilter.onclick = function () {
// //     console.log('Live in Kyiv:');
// //     if (flagForCityFilter) {
// //         let usersWithCityKyiv = usersWithAddress.filter(value => value.address.city === 'Kyiv');
// //         console.log(usersWithCityKyiv);
// //     }
// //     flagForCityFilter = !flagForCityFilter;
// // };

// // user.innerHTML = `${usersWithAddress.usersWithStatusFalse}, ${usersWithAddress.usersWithAgeGT30}, ${usersWithAddress.usersWithCityKyiv}`;
// // };
// // document.body.append(userDiv);



// Основне:

// let item = document.getElementById('item');

// usersWithAddress.forEach(value => {
//     let userDiv = document.createElement('div');

//     userDiv.innerText = JSON.stringify(value);
//     item.appendChild(userDiv)
// });

// let f1 = document.forms.f1;

// f1.onchange = () => {
//     item.innerHTML = '';
//     let newArr = [];
//     if (f1.status.checked) {
//         newArr = usersWithAddress.filter(value => !value.status);
//     }

//     if (f1.age.checked) {
//         newArr = usersWithAddress.filter(value => value.age > 30);
//     }

//     if (f1.city.checked) {
//         newArr = usersWithAddress.filter(value => value.address.city === 'Kyiv');
//     }

//     newArr.forEach(value => {
//         let div = document.createElement('div');
//         div.innerText = JSON.stringify(value)
//         item.appendChild(div)
//     });

// }
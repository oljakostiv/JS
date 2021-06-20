// // =================================================================
// // ===========================Class=================================

// // 1.1) Напишіть код, який :
// // a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)

// let main = document.getElementById('main_header');
// main.style.color = '#FF283A';
// main.innerText = 'april-2021';

// // b) робить шириниу елементу ul 400px

// let ulCollection = document.getElementsByTagName('ul');
// for (const ul of ulCollection) {
//     ul.style.width = '400px';
// };

// // c) робить шириниу всіх елементів з класом linkList шириною 50%

// let element = document.querySelectorAll('ul li.linkList');
// for (const elementWidth of element) {
//     elementWidth.style.width = '50%';
// };

// // d) отримує текст який зберігається в елементі з класом listElement2

// let element1 = document.querySelector('li.listElement2');
// let elementText = element1.innerText;
// console.log(elementText);

// // e) отримує всі елементи li та змінює ім колір фону на сірий

// let element2 = document.getElementsByTagName('li');
// for (const element2color of element2) {
//     element2color.style.background = '#6E7F80';
//     console.log(element2color)
// }

// // f) отримує всі елементи 'a' та додає їм клас anchor
// // g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів


// let element3 = document.getElementsByTagName('a');
// console.log(element3);
// for (let item of element3) {
//     item.classList.add('anchor');
//     if(item.innerText==='link3') {
//         item.style.fontSize = '40px';
//     }
// };

// // h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// let elementX = document.getElementsByTagName('a');
// for (const inner of elementX) {
// inner.setAttribute('class', `element_${inner.innerText}`);
// }

// // i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let elementSub1 = document.getElementsByClassName('sub-header');
// let color1 = prompt('Колір фону')
//     for (const sub1 of elementSub1) {
//       sub1.style.background = color1
//     }; 

// // j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// let elementSub = document.getElementsByClassName('sub-header');
// let color = prompt('Колір тексту')
 
//     for (const sub of elementSub) {
    
//      if (sub.innerText==='content 2 segment') {
//         sub.style.color = color
//     };
//     };

// // k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let elementC = document.getElementsByClassName('content_1');
// let textContent = prompt('text');
//     for (const content of elementC) {
//          console.log(content);
//             content.innerText=textContent;
// };

// // l) отримати елементи p та змінити їм padding на 20px

// let peshki = document.getElementsByTagName('p');
//     for (const innerPeshki of peshki) {
//         innerPeshki.style.padding = '20px';
// };

// // m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)

// let endText = document.getElementsByClassName('text2');
//     for (let end of endText) {
//         end.innerText = 'april-2021';
//     };


// =================================================================

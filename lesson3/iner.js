// 1. Створити функцію яка приймає масив та виводить його
//======================================================

// function arrey(name) {
//     console.log(name);
// }
//  let arrey1 = [2, 4, 5];
// arrey(arrey1);

// 2. створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
// ======================================================
// function numArray(length, min, max) {
//     let nums = [];
//     for (i=0; i < length; i++){
//         nums.push(Math.floor(Math.random()*(max-min)+min));
//     }
// return nums;
// }
// let nums1 = numArray(5, 1, 20);
// arrey(nums1);


// =======================================================
// 3. створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function num(num1, num2, num3) {
//     let min;
//     if (num1<num2 && num1<num3) min=num1;
//     if (num2<num1 && num2<num3) min=num2;
//     if (num3<num1 && num3<num2) min=num3;
//     console.log(min);
//     return min;
// }
// num(3, 5, 9);


// =========================================================
// 4. створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function nums(a, b, c) {
//     let max;
//     if (a>b && a>c) max=a;
//     if (b>a && b>c) max=b;
//     if (c>a && c>b) max=c;
//     console.log(max);
// }
// nums(4,5,6);


// ===========================================================
// 5. Cтворити функцію яка повертає найбільше число з масиву

// function arrey(nums) {
//     let max = nums[0];
//     for (let item of nums) {
//     if (max<item) max=item;
//     }
//     return max
// }
// let nums1 = arrey([4, 6, 9]);
// console.log(nums1)


// =============================================================
// 6. створити функцію яка повертає найменьше число з масиву

// function arrey(nums) {
//     let min = nums[0];
//     for (let item of nums) {
//         if (item<min) min=item;
//     }
//     return min;
// }
// let min1 = arrey([8, 9, 3, 5]);
// console.log(min1);


// ===============================================================
// 7. створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.

// function arrey(nums) {
//     let suma =0;
//     for (i=0; i<nums.length; i++) {
//     suma += nums[i]
//     }
//     return suma;
// }

// let arrey1 = arrey([8, 80, 800]);
// console.log(arrey1)


// ==============================================================
// 8. створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function  nums(num) {
//     let suma = 0;
//     for (i=0; i<num.length; i++) {
//         suma+=num[i];
//     }
//     return suma/num.length;
// }
// let arrey = nums([8, 80, 800]);
// console.log(arrey)


// ================================================================
// 9. Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//  EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// function keysArrey(obj) {
//     let arrey = [];
//     for (let item of obj) {
//         if (typeof item === 'object' && !Array.isArray(item)) {
//             for (let keys in item) {
//                 arrey.push(keys)
//             }
//         }
//     }
//     return arrey;
// }
// let arrey1 = keysArrey([{name: 'Dima', age: 13}, {model: 'Camry'}]);
// console.log(arrey1);


// ===============================================================
// 10. Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// function keysArrey(objOun) {
//     let srt = [];
//     for (let item of objOun) {
//         if (typeof item === 'object' && !Array.isArray(item)) {
//             for (let obj in item) {
//                 srt.push(item[obj]);
//             }
//         }
//     }
//     return srt;
// }
// let arrey = keysArrey([{name: 'Dima', age: 13}, {model: 'Camry'}]);
// console.log(arrey);


// ==============================================================
// 11. створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

// function nums(num1, num2) {
//     let num3 = [];
//     for (i=0; i<num1.length; i++) {
//         num3.push(num1[i]+num2[i]);
//     }
//     return num3;
// }
// let arrey = nums([1,2,3,4], [2,3,4,5]);
// console.log(arrey);
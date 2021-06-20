// Домашнє:
// 
// 1. Створити функцію яка приймає масив та виводить його
// ======================================================

// const array = [9, 8, 7, 6];

// function forArray(arr) {
//     console.log(arr);
// }
// // forArray(array);

// ======================================================
// 2. створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.

// function numsArray(length, min, max) {
//     let array = [];
//     for (let i=0; i<length; i++) {
//         array.push(Math.floor(Math.random() *(max-min)+min))
//     }
//     return array;
// }
// let array1 = numsArray(10, 10, 50);
// forArray(array1);


// =======================================================
// 3. створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function nums(num1, num2, num3) {
//     let min;
//     if(num1<=num2 && num1<=num3) min=num1;
//     if(num2<=num1 && num2<=num3) min=num2;
//     if(num3<=num1 && num3<=num2) min=num3;
//     console.log(min);
//     return min;
// }
// nums(34, 54, 65);

// =========================================================
// 4. створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function nums(num1, num2, num3) {
//     let max;
//     if(num1=>num2 && num3<=num1) max=num1;
//     if(num2=>num1 && num3<=num2) max=num2;
//     if(num3=>num1 && num2<=num3) max=num3;
//     console.log(max);
//     return max;
// }
// nums(13,18,87);

// ===========================================================
// 5. Cтворити функцію яка повертає найбільше число з масиву

// function numsArray(num) {
//     let max = num[0];
//     for (let item of num) {
//         if (max<item) max=item;
//     }
//     return max;
// }
// const maxA = numsArray([23, 56, 78, 66]);
// console.log(maxA);

// =============================================================
// 6. створити функцію яка повертає найменьше число з масиву

// function numsArray(num) {
//     let min = num[0];
//     for (let item of num) {
//         if (item<min) min=item;
//     }
//     return min;
// }
// const minA = numsArray([23, 56, 78, 66]);
// console.log(minA);

// ===============================================================
// 7. створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.

// function sumArray(num) {
// let s = 0;
// for (i=0; i<num.length; i++) {
//     s+=num[i]
// }
// return s;
// }
// const sumA = sumArray([30, 300, 3000]);
// console.log(sumA);

// or

// function calculator(a, b, c) {
// return a+b+c;   
// }
// const c1 = calculator(30, 300, 3000);
// console.log(c1);
// 
// (але тут не масив....)

// ==============================================================
// 8. створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function sumArray(num) {
//     let s = 0;
//     for (i=0; i<num.length; i++) {
//         s+=num[i]
//     }
//     return s/num.length;
//     }
//     const sumA = sumArray([30, 300, 3000]);
//     console.log(sumA);

 

// function countFields(arrayObj) {
// let count =[];
// for (let item of arrayObj) {
//     if (typeof item === 'object' && !Array.isArray(item)) {
//         for (let key in item) {
//             count.push(key);
//         }
//     }
// }
// return count;
// }

// const keyArray = countFields([{person: 'Oleh', age: 23}, {car: 'KIA'}]);
// console.log(keyArray);

// ===============================================================
// 10. Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// function countFields(arrayObj) {
// let count = [];
// for (let item of arrayObj) {
//     if (typeof item === 'object' && !Array.isArray(item)) {
//         for (let key in item) {
//             count.push(item[key])

//         }
        
//     }
// }
// return count;
// }

// const keyArray = countFields([{person: 'Oleh', age: 23}, {car: 'KIA'}]);
// console.log(keyArray);

// ==============================================================
// 11. створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

// function numsArray(array1, array2) {
//     let newA = [];
//     for (let i=0; i < array1.length; i++) {
//         newA.push(array1[i]+array2[i]);
//     }
//     return newA;
// }
// const ArrayA = numsArray([1, 2, 3, 4], [2, 3, 4, 5]);
// console.log(ArrayA);

// =================================================================
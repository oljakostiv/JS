// Домашнє:
// 1.створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

const people = [1, 2, 3, 4, 5, 'Olha', 'Ihor', 'Anna',  'Petro', 'Ira', 'Olena', 21, 23, true, false];

console.log(people);

// =======================================================
// 2.Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

const array = [];

console.log(array[0]='Olha', array[1]='Petrivna', array[2]='Kostiv');

// ========================================================
// 3. За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (const user of [
        {name: 'Vasya'},
        {name: 'Kolya'},
        {name: 'Igor'},
        {name: 'Oleh'},
        {name: 'Petro'},
        {name: 'Vasya'},
        {name: 'Kolya'},
        {name: 'Igor'},
        {name: 'Oleh'},
        {name: 'Petro'}
    ]) {
            document.write(`<div>Ім'я: ${user.name}</div>`);
    };

//============================================================
// 4. За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

const users = ['Vasyl', 'Oleh', 'Ihor', "Kolya", 'Petro', 'Vasyl', 'Oleh', 'Ihor', "Kolya", 'Petro', 'Vasyl', 'Oleh', 'Ihor', "Kolya", 'Petro', 'Vasyl', 'Oleh', 'Ihor', "Kolya", 'Petro'];
    for (let i=0; i<users.length -10; i++) {
            document.write(`<div>Імена: ${users[i]}</div>`);
    };

//=============================================================
// 5. За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let a=0;
while (a<20) {
        document.write(`<div><h1>Студенти: ${users}</h1></div>`);
        a++;
};

// =============================================================
// 6. За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let i=0;
while (i<users.length) {
        document.write(`<div><h1>Учень: ${users[i]}</h1></div>`);
        i++;
};

// ==============================================================
// 7. Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

        for (let nums of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
                console.log(nums);
        };

// ==============================================================
// 8. Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

        for (let str of ['Привіт', 'як', 'у', 'тебе', 'справи', '?', 'Чим', 'ти', 'сьогодні', 'займався']) {
                console.log(str);
        };

// ==============================================================
// 9. Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

        for (let arr of [{name: 'Ivan', age:25, color: 'grey', status: true, skills: []},
        {name: 'Ira', age: 15, color: 'green', status: false, skills: []}]) {
               console.log(arr);
         };

        // OR:
         // let arr = {name: 'Ivan', age: 25, color: 'grey', status: true, skills: []};
        //         for (let key in arr) {
        //         console.log(arr[key]);
        //         }

// ================================================================
// 10. Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

         const arr1 = ['hello', 'hi', true, 86, 'olha', 88, false, 'like', 8, true];
                for (let item of arr1) {
                        if (typeof item === 'boolean') {
                                console.log(item);
                        }
                };

// =================================================================
// 11. Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

                for (let itemNum of arr1) {
                        if (typeof itemNum === 'number') {
                                console.log(itemNum);
                        }
                };

// ==================================================================
// 12. Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

                for (let itemStr of arr1) {
                        if (typeof itemStr === 'string') {
                                console.log(itemStr);
                        }
                };

// ===================================================================
// 13. Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

        const arr2 = [];
                console.log(arr2[0]='hello', arr2[1]='hi', arr2[3]=true, arr2[4]=86, arr2[5]='olha', arr2[6]=88, arr2[7]=false, arr2[8]='like', arr2[9]=8, arr2[10]=true);

// ====================================================================
// 14. Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

        for (let i=0; i<10; i++) {
                console.log(i);
                document.write(`<div>Ім'я: ${i}</div>`);
        };

// ======================================================================
// 15. Створити цикл for на 100  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i=0; i<100; i++) {
        console.log(i);
        document.write(`<div>Ім'я: ${i}</div>`);
};

// ======================================================================
// 16. Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let i=0; i<100; i=i+2) {
        console.log(i);
        document.write(`<div>Ім'я: ${i}</div>`);
};

// ======================================================================
// 17. Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let i=0; i<100; i++)
        if (i % 2 == 0) {
        console.log(i);
        document.write(`<div>Ім'я: ${i}</div>`);
};

// =====================================================================
// 18. Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let i=0; i<100; i++)
        if (i % 2) {
        console.log(i);
        document.write(`<div>Ім'я: ${i}</div>`);
};

// ====================================================================
// 19. Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

for (let m = 0; m<60; m++) {
        for (let s = 0; s<60; s++) {
                console.log(`m: ${m} s: ${s}`);
                if (m===2 && s===0) {
                        m=60
                        break;  
                }
        }
}
// =====================================================================

// 20. Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

for (let h=0; h<60; h++) {
        for (let m = 0; m<60; m++) {
                for (let s= 0; s<60; s++) {
                        console.log(`h: ${h} m: ${m} h: ${s}`);
                        if (h===2 && m===20 && s===0) {
                                h=60;
                                m=60;
                                break;
                        }
                }
        }
}


// РОБОТА В АУДИТОРІЇ
// =====================================================================
// 1. Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

const aww3 = ['a', 'b', 'c'];
        
        console.log(aww3[0], aww3[1], aww3[2], aww3[3]=1, aww3[4]=2, aww3[5]=3);

// =====================================================================
// 2.Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].

const aww4 = [1, 2, 3];
        aww4.reverse();
        console.log(aww4);

// ======================================================================
// 3. Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

const aww5 = [1, 2, 3];
        aww4.push(4, 5, 6);
        console.log(aww4);

// =======================================================================
// 4. Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.

const aww6 = [1, 2, 3];
        aww6.unshift(4, 5, 6);
        console.log(aww6);

// ========================================================================
// 5. Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()

const aww7 = ['js', 'css', 'jq'];
        aww7.shift();
        console.log(aww7);

// =========================================================================
// 6.Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
const aww8 = ['js', 'css', 'jq'];
        aww8.pop();
        console.log(aww8);

// ==========================================================================
// 7. Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].

const aww9 = [1, 2, 3, 4, 5];
        let newAww9 = aww9.slice(3);
        console.log(newAww9);

// ==========================================================================
// 8. Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].

const aww10 = [1, 2, 3, 4, 5];
        let newAww10 = aww10.slice(0, 2);
        console.log(newAww10);

//============================================================================
// 9. Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].

const aww11 = [1, 2, 3, 4, 5];
const aww12 = ['a', 'b', 'c'];
let newAww11 = aww11.slice(0, 3);
let aww13 = newAww11.concat(aww12);
let aww14 = aww13.concat([4, 5]);

console.log(aww14);

// ============================================================================



        

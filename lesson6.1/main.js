// Розпорядок дня:

let x = 0.5;

function dayByOlia(message) {
    return new Promise((resolve) => {
        setTimeout(() => {
            Math.random() > x ?
                resolve(message) :
                resolve('Проспала..')
        }, 1500);
    });
};

function goRuning(run) {
    console.log('Пробіжка:')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let message = 'EMTY'
            if (run === 'Проспала..') {
                message = 'Поспіши!'
            } else {
                message = '5км'
            }
            true 
               ? resolve(message) :
                reject('На вулиці град!')
        }, 2000);
    });
};

function breakfast(eating) {
    console.log('Om-nom-nom:')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let message = 'EMTY'
            if (eating === 'Поспіши!') {
                message = 'снідай швидко.'
            } else {
                message = 'cheesecakes'
            }
            true
               ? resolve(message) :
                reject('Пустий холодильник.')
        }, 1000);
    });
};

function goToWork(work) {
    console.log('На роботу!')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let message = 'EMTY'
            if (work === 'снідай швидко.') {
                message = 'сьогодні на таксі.'
            } else {
                message = 'автобус 131.'
            }
            true
               ? resolve(message) :
                reject('Відпустили')
        }, 2000);
    });
};

function work(hardWorking) {
    console.log('Працюємо..')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let message = 'EMTY'
            if (Math.random(hardWorking) < x) {
                message = 'Відпустили!'
            } else {
                message = 'tik-tok'
            }
            true
               ? resolve(message) :
                reject('Вихідний!')
        }, 2500);
    });
};

function dinner(dinnerTime) {
    console.log('Обідати!')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let message = 'EMTY'
            if (dinnerTime === 'Відпустили!') {
                message = 'Перше, друге і компот)'
            } else {
                message = 'кавою'
            }
            true
               ? resolve(message) :
                reject('Немає часу на обід!')
        }, 1000);
    });
};

function goToTraining(hardTraining) {
    console.log('Тренуємось!')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let message = 'EMTY' 
            if (hardTraining === 'Перше, друге і компот)') {
                message = 'в поті чола:)'
            } else {
                message = 'в поті чола:)'
            }
            true
               ? resolve(message) :
                reject('Зламав ногу..')
        }, 2500);
    });
};

function goWalk(walk) {
    console.log('Прогулянка')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let message = 'EMTY' 
             if (walk === 'в поті чола:)') {
                 message = 'в парку.'
             } else {
                 message = 'не сьогодні'
             }
             true
               ? resolve(message) :
                reject('Треба вчитись!')
        }, 1500);
    });
};

function goStudy(study) {
    console.log('Починається лекція:')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let message = 'EMTY' 
             if (study === 'в парку.') {
                 message = 'корисна інфа!'
             } else {
                 message = 'не сьогодні'
             }
             true
               ? resolve(message) :
                reject('Вихідний')
        }, 2500);
    });
};

function goToSleep(sleep) {
    console.log('Час спати..')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let message = 'EMTY' 
             if (sleep === 'корисна інфа!') {
                 message = 'Добраніч!'
             } else {
                 message = 'Вчимось до ранку'
             }
             true
                ? resolve(message) :
                reject('Вчимось до ранку')
        }, 2500);
    });
};

dayByOlia('Будильник!')
    .then((result) => {
        console.log(result);
        return goRuning(result);
    })
    .then((result) => {
        console.log(result);
        return breakfast(result);
    })
    .then((result) => {
        console.log(result);
        return goToWork(result);
    })
    .then((result) => {
        console.log(result);
        return work(result);
    })
    .then((result) => {
        console.log(result);
        return dinner(result);
    })
    .then((result) => {
        console.log(result);
        return goToTraining(result);
    })
    .then((result) => {
        console.log(result);
        return goWalk(result);
    })
    .then((result) => {
        console.log(result);
        return goStudy(result);
    })
    .then((result) => {
        console.log(result);
        return goToSleep(result);
    })
    .then((result) => {
        console.log(result);
    })
    .catch(error => {
        console.log('error', error);
    });
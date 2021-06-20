// ===============================Home:================================
// 1 За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//    Вставити цей блок на сторінку)

let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {
        city: 'Lviv',
        country: 'Ukraine',
        street: 'Shevchenko',
        houseNumber: 1
    }
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {
        city: 'New York',
        country: 'USA',
        street: 'East str',
        houseNumber: 21
    }
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {
        city: 'Budapest',
        country: 'Hungary',
        street: 'Kuraku',
        houseNumber: 78
    }
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {
        city: 'Prague',
        country: 'Czech',
        street: 'Paster',
        houseNumber: 56
    }
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {
        city: 'Istanbul',
        country: 'Turkey',
        street: 'Mikar',
        houseNumber: 39
    }
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {
        city: 'Rio',
        country: 'Brasil',
        street: 'Ronaldi',
        houseNumber: 5
    }
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {
        city: 'Montreal',
        country: 'Canada',
        street: 'Acusto',
        houseNumber: 90
    }
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {
        city: 'Quebeck',
        country: 'Canada',
        street: 'Binaro',
        houseNumber: 33
    }
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {
        city: 'Moscow',
        country: 'Russia',
        street: 'Gogolia',
        houseNumber: 1
    }
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {
        city: 'Portland',
        country: 'USA',
        street: 'Forest str',
        houseNumber: 4
    }
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {
        city: 'Cairo',
        country: 'Egypt',
        street: 'Seashore',
        houseNumber: 45
    }
}]


// for (const user of users) {
//     let userDiv = document.createElement('div');

//     let name = document.createElement('h3');
//     name.innerText = `${user.name}`;
//     userDiv.append(name);

//     let info = document.createElement('p');
//     info.innerText = `${user.age}, ${user.status}, address: ${user.address.city}, ${user.address.country}, ${user.address.street}, ${user.address.houseNumber}`;
//     userDiv.append(info);

//     document.body.append(userDiv);
// };

// =================================================================
// 2 За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
// Блок з адресою зробити окремим блоком, з блоками для кожної властивості


let item = document.getElementById('item');


for (const user of users) {
    let userDiv = document.createElement('div');
    for (const field in user) {
        let innerDiv = document.createElement('div');
        if (typeof user[field] !== 'object') {
            innerDiv.innerText = `${field}: ${user[field]}`
        } else {
            innerDiv.innerText = `${field}:`
            for (let key in user[field]) {
                let keyDiv = document.createElement('div');
                keyDiv.innerText = `${key}: ${user[field][key]}`
              
                if (typeof field[key] === 'object') {
                    keyDiv.innerText = `${key}`
                    
                }
                innerDiv.appendChild(keyDiv);
            }
        }
        userDiv.appendChild(innerDiv);
    }
    item.appendChild(userDiv);
}


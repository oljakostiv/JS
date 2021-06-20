const div = document.getElementById('ware');
const key = 'store'
let store = JSON.parse(localStorage.getItem(key)) || [];


let list = () => {
if (!store.length) {
    let empty = document.createElement('h2');
    empty.innerText = 'Пусто';
    div.appendChild(empty)
}

    for (let item of store) {
        let divItem = document.createElement('div');
        let nameItem = document.createElement('div');
        let priceItem = document.createElement('div');
        let btn = document.createElement('button');
        let imgItem = document.createElement('img');

        nameItem.innerText = `${item.name}`;
        priceItem.innerText = `${item.price}`;
        btn.innerText = `Удалить`;
        btn.onclick = () => {
            deleteItem(item.id)
        };
        imgItem.src = item.img;
        divItem.append(nameItem, priceItem, imgItem, btn)
        div.appendChild(divItem)
    };
};

let deleteItem = (id) => {
    store = store.filter(value=> value.id !== id)
    localStorage.setItem(key, JSON.stringify(store))
    div.innerHTML = '';
    list();
};
list();
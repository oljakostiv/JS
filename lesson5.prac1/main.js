// =================================================================
// 3. Імітуємо наповнення інтернет магазину товарами :
// Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись.
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.


const {name,price,img} = document.forms.f1;
const btn = document.getElementById('btn');
const key = 'store'

let ware1 = (name, price, img) => {
    let store = JSON.parse(localStorage.getItem(key)) || [];

    let mainId = Math.random();
    store.push({id: mainId, name, price, img})
    localStorage.setItem(key, JSON.stringify(store))
}
btn.onclick = () => {
    ware1(name.value, price.value, img.value)
};
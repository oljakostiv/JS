// 2. Створити форму з інпутом для введення ім'я, та action="index2.html".
// При відправці данних з форми, зберігати ім'я в localstorage, та переходити на index3.html.
// На index3.html виводити записане в localstorage ім'я в div

const {inner} = document.forms.f1;
const btn = document.getElementById('btn');

btn.onclick = ()=>{
localStorage.setItem('inner', inner.value)  
}

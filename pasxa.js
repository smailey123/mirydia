class Product{
    constructor(pic, name, descr, price){
        this.image = pic
        this.title = name
        this.description = descr
        this.price = price
    }
}

let form_durk_gold = new Product(
    'https://goodbaking.pro/content/images/17/600x600l80mc0/58234470748805.webp',
    'Універсал золото',
    'Універсал золото форми тем.',
    1
)
let form_durk_silver = new Product(
    'https://goodbaking.pro/content/images/21/600x600l80mc0/53578125050775.webp',
    'Універсал срібло',
    'Універсал срібло форми тем.',
    1
)
let form_standart = new Product(
    'https://goodbaking.pro/content/images/19/356x356l85nn0/57437697668877.webp',
    'Стандарт',
    'Стандарт форма світла',
    1
)
let form_poppies = new Product(
    'https://goodbaking.pro/content/images/12/356x356l85nn0/44016840330502.webp',
    'Маки',
    'Маки форми світла',
    1
)
let form_6series_durk_silver = new Product(
    'https://goodbaking.pro/content/images/22/600x600l80mc0/93811826478551.webp',
    'Серія 6 срібні',
    'ффф',
    1
)
let form_6series_durk_gold = new Product(
    'https://goodbaking.pro/content/images/24/600x600l80mc0/68329177088225.webp',
    'Серія 6 золоті',
    'gggg',
    1
)
let form_paper_childrens = new Product(
    'бумажная_детская_форми_6_шт.-removebg-preview.png',
    'Дитячі паперові',
    'jjj',
    1
)
let form_9series = new Product(
    'https://goodbaking.pro/content/images/8/600x600l80mc0/58999386098680.webp',
    'Серія 9',
    'mmm',
    1
)
let form_7series = new Product(
    'https://goodbaking.pro/content/images/15/600x600l80mc0/29912128559714.webp',
    'Серія 7',
    'mmmm',
    1
)
let form_5series_silver_golden = new Product(
    'изображение_viber_2025-03-03_14-57-11-664-removebg-preview (2).png',
    'Серія 5 срібло та золото',
    'nnn',
    1
)
let form_bird = new Product(
    'птахи_форми_6_шт.-removebg-preview.png',
    'Птахи',
    'mmm',
    1
)
let form_petrykivka = new Product(
    'https://images.prom.ua/5330574649_w200_h200_bumazhnye-formy-dlya.jpg',
    'Петриковка',
    'mmm',
    1
)
let form_embroidery = new Product(
    'https://varus.ua/img/product/420/420/2644009',
    'Вишивка',
    'mmm',
    1
)
let form_Angels = new Product(
    'янголи_форми_6_шт.-removebg-preview.png',
    'Янголи',
    'mmm',
    1
)
let form_Fairy_tale = new Product(
    'сказка_форми_6_шт.-removebg-preview.png',
    'Казка',
    'mmm',
    1
)
let form_childrens = new Product(
    'https://goodbaking.pro/content/images/25/600x600l80mc0/67923460640533.webp',
    'Дитяча',
    'mmm',
    1
)

let products = [
    form_durk_gold, form_durk_silver, form_standart, form_poppies, form_6series_durk_silver, form_6series_durk_gold, form_paper_childrens, form_9series, form_7series, form_5series_silver_golden, form_bird, form_petrykivka, form_embroidery, form_Angels, form_Fairy_tale, form_childrens
    
]


//Функція для отримання значення кукі за ім'ям
function getCookieValue(cookieName){
    // Розділяємо всі кукі на окремі частини
    const cookies = document.cookie.split(';');

    // Шукаємоо кукі з вказиним ім'ям 
    for (let i = 0; i<cookies.length; i++){
        const cookie = cookies[i].trim();

        // Перевіряємо чи починається поточне кукі
        if (cookie.startsWith(cookieName + '=')) {
            // Якщо так повертаємо значення кукі
            return cookie.substring(cookieName.length + 1);  //+1 для пропуску символу '='
        }
    }
    // Якщо кукі з вказаним іменем не знайдено, повертаємо порожній рядок або можна повернути null
    return '';
}

class Cart{
    constructor(){
        this.products = []
        this.cartCounter = document.querySelector('.cart-container span'); //отримаємо лічильник кількості товарів у кошику
        this.loadCartFromCookies();//завантажуємо з кукі-файли раніше додані в кошик товари
    }
    addItem(productIndex) {//додання товару в кошик
        let productInCart = this.products.find(product => product.productIndex === productIndex);//перевіряємо чи вже існує цей товар
        if (productInCart) {//якщо існує то збільшуємо його кількість +1
            productInCart.quantity += 1;
        }else {//якщо нема товару то додаємо його та вказуємо кількість 1
            this.products.push({
                productIndex,
                quantity:1
            });
        }
        this.updateCounter();//оновлюємо лічильник товарів
        this.saveCartToCookies();//зберігаємо в кукі
    }

    updateCounter(){//оновлюємо загальну кількість товарів
        let count = 0;
        for (let i = 0; i < this.products.length;i++) {//проходимося по всіх товарів
            count += this.products[i].quantity;//рахуємо кількість усіх товарів
        }
        this.cartCounter.innerHTML = count;//оновлюємо лічильник на сторінці
    }
    // зміна кількості одного товара 
    updateQuantity(productIndex, newQuantity) {
        let productInCart = this.products.find(product => productIndex === product.productIndex);//перевіряємо чи вже існує цей товар в корзині
        if (productInCart) {
            productInCart.quantity = newQuantity;
            if (productInCart.quantity == 0) {
                console.log(productInCart)
                this.products = this.products.filter(product => product.productIndex !== productIndex);
                console.log('fd',this.products)
            }
            this.updateCounter();
            this.saveCartToCookies();
        }
    }
    saveCartToCookies(){//збереження кошику в кукі
        let cartJSON = JSON.stringify(this.products);
        document.cookie = `cart=${cartJSON}; max-age=${60 * 60 * 24 * 7}; path=/`;
    }
    loadCartFromCookies(){
        let cartCookie = getCookieValue('cart');
        if (cartCookie && cartCookie !== '') {
            this.products = JSON.parse(cartCookie);
            this.updateCounter();
        }
    }
    calculateTotal(){
        let total = 0;
        for(let i = 0;i < this.products.length;i++){
            total += products[this.products[i].productIndex].price * this.products[i].quantity;
        }
        return total;
    }
}
const cart = new Cart();

function getProductCart(product){
    return `<article class="item"><div class="items-div-img"><img class="item-img" src="${product.image}"></div>
                    <h2 class="items-h2">${product.title}</h2>
                    <p class="item-desc">${product.description}</p>
                    <p>${product.price} грн</p>
                    <button class="item-buy">
                        <img class="img_logo" src="https://cdn-icons-png.flaticon.com/128/1077/1077979.png">
                        Купити
                    </button></article> `
    
        // return `<article class="item">
        //             <div class="items-div-img"><img class="item-img" src="https://u.makeup.com.ua/y/yw/ywc5thlwmnwj.jpg"></div>
        //             <h2 class="items-h2">Maybelline New York Lash Sensational Sky High</h2>
        //             <p class="item-desc">Туш для безмежного подовження та обєму вій</p>
        //             <p>460</p>
        //             <button class="item-buy">
        //                 <img class="img_logo" src="https://cdn-icons-png.flaticon.com/128/1077/1077979.png">
        //                 Купити
        //             </button>
        //         </article>`
}
//виведення на екран
function printProducts(_products) {
    let localProducts = _products || products
    //контейнер в якому знаходяться всі товари
    let itemsContainer = document.querySelector('.items');

    itemsContainer.innerHTML = '';
    if(!localProducts.length) {
        itemsContainer.innerHTML = '<h1>Нема товару</h1>';
        return;
    }
    //проходимося по всім товарам та додаємо верстку зі значенями кожного
    for(let i = 0;i< localProducts.length;i++){
        itemsContainer.innerHTML += getProductCart(localProducts[i]);
    }
    //отримаємо всі книпки 'купити' та додаємо на кожну кнопку подію для додавання 
    let buyButtons = document.querySelectorAll('.item-buy');
    for(let i = 0;i < buyButtons.length;i++){
        buyButtons[i].addEventListener('click',() => cart.addItem(i))
    }
}

printProducts();

let search = document.querySelector('.search');

function onSearch(event){
    event.preventDefault()
    let localProducts = products.filter(product => 
        product.title.toLocaleLowerCase().includes(
            event.target.value
        ));
    
    printProducts(localProducts);
}
search.addEventListener('change',onSearch)



let regData = getCookieValue('regData')
let regLink = document.getElementById('div-registration')

console.log('regData', regData, regLink.innerHTML)
if (regData){
    regLink.style.display = 'block'
}
console.log(regLink.innerHTML)
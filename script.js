let div_nav = document.querySelector('.div-nav')
let div_nav_a = document.querySelector('.div-nav-a')
let a1 = document.querySelector('.a_1')
let a2 = document.querySelector('.a_2')
let a3 = document.querySelector('.a_3')
let search = document.querySelector('.search')

// div_nav_a.addEventListener('mousemove', function(){
//     return`<div class="div-nav">
//                 <a class="a_" href="specie.html">Приправи</a>
//                 <div class="div-nav-a">
//                     <a class="a_catalog_" href="">qqqqq</a>
//                     <a class="a_catalog_" href="">wwwww </a>
//                     <a class="a_catalog_" href="">eeeee </a>
//                 </div>
//                 </div>`
// })

class Product{
    constructor(pic, name, descr, price){
        this.image = pic
        this.title = name
        this.description = descr
        this.price = price
    }
}
let eye = new Product(
    'https://u.makeup.com.ua/y/yw/ywc5thlwmnwj.jpg', 
    'Maybelline New York Lash Sensational Sky High', 
    'Туш для безмежного подовження та обєму вій', 
    460 
)

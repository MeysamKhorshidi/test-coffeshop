
const toggleThemeBtns = document.querySelectorAll(".toggle-theme");
const submenuOpenBtn = document.querySelector('.submenu-open-btn')
const submenu = document.querySelector('.submenu')
const navIcon = document.querySelector('.nav-icon')
const cartIcon = document.querySelector('.cart-icon')
const nav = document.querySelector('.nav')
const cart = document.querySelector('.cart')
const overlay = document.querySelector('.overlay')
const naveCloseBtn = document.querySelector('.nav-close-btn')
const cartCloseBtn = document.querySelector('.cart-close-btn')


//------- Dark Mode------//
toggleThemeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (localStorage.theme === "dark") {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
    })
})


//------- menu show------//

navIcon.addEventListener('click', () => {
  
    nav.classList.remove('-right-64')
    nav.classList.add('right-0')
    overlay.classList.add('overlay--visible')
    overlay.addEventListener('click', closeNav)
})
cartIcon.addEventListener('click' , () => {
    cart.classList.remove('-left-64')
    cart.classList.add('left-0')
    overlay.classList.add('overlay--visible')
    overlay.addEventListener('click', closeCart)

})


//------- submenu show------//
submenuOpenBtn.addEventListener('click', (e) => {
    e.currentTarget.parentElement.classList.toggle('text-orange-300')

    submenu.classList.toggle('submenu--open')
})

function closeNav () {
    nav.classList.remove('right-0')
    nav.classList.add('-right-64')
    overlay.classList.remove('overlay--visible')
}
function closeCart() {
    cart.classList.remove('left-0')
    cart.classList.add('-left-64')
    overlay.classList.remove('overlay--visible')
}

naveCloseBtn.addEventListener('click', closeNav)
cartCloseBtn.addEventListener('click' ,closeCart )




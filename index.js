burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
// btn = document.getElementById('myBtn')

burger.addEventListener("click", () => {
    navList.classList.toggle('v-class-resp')
    navbar.classList.toggle('h-nav-resp');
})


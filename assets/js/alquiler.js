const navbar = document.getElementById('navbar')
const navbarBtn = document.getElementById('navbarBtn')

navbarBtn.addEventListener('click', () => {
    navbar.classList.toggle('active')
})

const arrow = document.getElementById('arrow')
setInterval(() => {
    arrow.classList.toggle('flecha')
}, 500);
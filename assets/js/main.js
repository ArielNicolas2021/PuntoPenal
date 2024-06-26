const navbar = document.getElementById('navbar')
const navbarBtn = document.getElementById('navbarBtn')

navbarBtn.addEventListener('click', () => {
    navbar.classList.toggle('active')
})

const circles = document.querySelectorAll('.circle')
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle('mostrar', entry.isIntersecting)
    })
})

circles.forEach((seccion) => {
    observer.observe(seccion)
})
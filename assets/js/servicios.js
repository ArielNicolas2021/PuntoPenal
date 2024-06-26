/* Toggle navbar */
const navbar = document.getElementById('navbar')
const navbarBtn = document.getElementById('navbarBtn')

navbarBtn.addEventListener('click', () => {
    navbar.classList.toggle('active')
})
/* /Toggle navbar */

/* Handle carrousel */
const carrousel = document.getElementById('carrousel')
const carrousel1 = document.getElementById('carrousel1')
const carrousel2 = document.getElementById('carrousel2')
const carrousel3 = document.getElementById('carrousel3')

let translate = '0'

setInterval(() => {
    switch(translate) {
        case '0':
            carrousel.style.transform = `translate(${translate})`
            translate = '-33.3%'
            carrousel1.classList.remove('point-active')
            carrousel2.classList.add('point-active')
            carrousel3.classList.remove('point-active')
            break
        case '-33.3%':
            carrousel.style.transform = `translate(${translate})`
            translate = '33.3%'
            carrousel1.classList.remove('point-active')
            carrousel2.classList.remove('point-active')
            carrousel3.classList.add('point-active')
            break
        case '33.3%':
            carrousel.style.transform = `translate(${translate})`
            translate = '0'
            carrousel1.classList.add('point-active')
            carrousel2.classList.remove('point-active')
            carrousel3.classList.remove('point-active')
            break
    }    
}, 5000)
/* /Handle carrousel */
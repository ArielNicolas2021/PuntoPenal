const navbar = document.getElementById('navbar')
const navbarBtn = document.getElementById('navbarBtn')

navbarBtn.addEventListener('click', () => {
    navbar.classList.toggle('active')
})

const arrow = document.getElementById('arrow')
setInterval(() => {
    arrow.classList.toggle('flecha')
}, 500);

const form = document.getElementById('form')
const nombre = document.getElementById('nombre')
const apellido = document.getElementById('apellido')
const correo = document.getElementById('correo')
const telefono = document.getElementById('telefono')
const consulta = document.getElementById('consulta')
const consultamsj = document.getElementById('consultamsj')
const messageContent = document.getElementById('messageContent')
const message = document.getElementById('message')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (nombre.value.trim() != '' && 
    apellido.value.trim() != '' &&
    correo.value.trim() != '' &&
    telefono.value.trim() != '' &&
    consulta.value.trim() != '' &&
    consultamsj.value.trim() != '') {
        messageContent.classList.add('success')
        messageContent.classList.remove('error')
        message.innerHTML = 'Datos enviados con éxito!'
        nombre.value = ''
        apellido.value = ''
        correo.value = ''
        telefono.value = ''
        consulta.value = ''
        consultamsj.value = ''
    } else {
        messageContent.classList.remove('success')
        messageContent.classList.add('error')
        message.innerHTML = 'Error al enviar los datos!'
    }
})

const closeMessage = document.getElementById('closeMessage')
closeMessage.addEventListener('click', () => {
    messageContent.classList.remove('success')
    messageContent.classList.remove('error')
})
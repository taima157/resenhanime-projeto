const menuButton = document.getElementById('btn-menu')
const header = document.querySelector('#header')

function toggleMenu(event) {
    if (event.type === 'touchstart') {
        event.preventDefault()
    }
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
    header.style.display = 'fixed'
}

menuButton.addEventListener('click', toggleMenu)
menuButton.addEventListener('touchstart', toggleMenu)

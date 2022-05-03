const menuButton = document.querySelector('#btn-menu')
const header = document.querySelector('#header')

function toggleMenu(event) {
    if (event.type === 'touchstart') {
        event.preventDefault()
    }
    const nav = document.querySelector('#nav')
    const header = document.querySelector('#header')
    const main = document.querySelector('#main')
    nav.classList.toggle('active')
    main.classList.toggle('active')
    header.classList.toggle('active')
}

menuButton.addEventListener('click', toggleMenu)
menuButton.addEventListener('touchstart', toggleMenu)

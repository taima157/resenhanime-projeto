const menuSide = document.querySelector('#menu-side')

menuSide.addEventListener('click', function(e){
    e.preventDefault(),
    function() {
        menuSide.style.display = 'block'
    }
})

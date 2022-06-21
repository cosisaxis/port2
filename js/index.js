const menu = document.getElementById('navbar-menu'),
      toggle = document.getElementById('navbar-toggle'),
      close = document.getElementById('navbar-close')


if(toggle){
    toggle.addEventListener('click', () =>{
        menu.classList.add('show-menu')
    })
}


if(close){
    close.addEventListener('click', () =>{
        menu.classList.remove('show-menu')
    })
}




const show = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay:400
})

show.reveal(`.hero-section .container-medium`)
show.reveal(`.experience .container-medium`, {delay:500})
show.reveal(`.project, .contact`, {interval: 100})
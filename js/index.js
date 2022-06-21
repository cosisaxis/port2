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
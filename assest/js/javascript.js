let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .nav');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

// counter
  jQuery(document).ready(function ($) {
            $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
        });

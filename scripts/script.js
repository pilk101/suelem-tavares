$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        var icon = $('#mobile_btn').find("i");
        icon.toggleClass('fa-bars fa-x');
    });

    let ultimoScroll = window.scrollY;
    const header = document.getElementById('cabecalho');

    window.addEventListener('scroll', () => {
        const scrollAtual = window.scrollY;
        if (window.innerWidth <= 1170)
        {
            if (scrollAtual > ultimoScroll)
                header.classList.add('escondido');
            else
                header.classList.remove('escondido');
        }
        ultimoScroll = scrollAtual;
    });

    ScrollReveal().reveal('#quem_sou_eu', {
        origin: 'top',
        distance: '50px',
        duration: 1000,
        easing: 'ease-in-out',
        reset: false
    })
    ScrollReveal().reveal('#img_abordagem', {
        origin: 'left',
        distance: '50px',
        duration: 1000,
        easing: 'ease-in-out',
        reset: false
    })
    ScrollReveal().reveal('.pessoa', {
        origin: 'right',
        distance: '50px',
        duration: 1000,
        easing: 'ease-in-out',
        interval: 500,
        reset: false
    })
});
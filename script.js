function init_menuMobile() {


    const btnMobile = document.getElementById('btn-mobile')
    const header = document.querySelector(".js-header");

    function toggleMenu() {
        const menu = document.getElementById('nav');
        const btn = document.getElementById('btn-nav');
        

        if (!menu.contains(btn)) {
            menu.appendChild(btn);
        } 

        menu.classList.toggle('active')
        btn.classList.toggle('active')
        header.classList.toggle('burger')

    }

    btnMobile.addEventListener('click', toggleMenu)

    function redefinir() {
        const menu = document.getElementById("nav");
        const btn = document.getElementById("btn-nav");
        const largura = window.innerWidth;
        
        if (largura > 900) {
            if (menu.contains(btn)) {
                header.appendChild(btn);
            }
        } else {
            menu.appendChild(btn);
        }
        // menu.classList.remove("active");
        // btn.classList.remove("active");
    }
    window.addEventListener('resize', redefinir)
}
init_menuMobile()

function init_animacaoHero() {
    //Animação com Scroll - ScrollReveal
    const scrollRevealOption = {
        distance: "50px",
        origin: "bottom",
        duration: 1000,
    };

    ScrollReveal().reveal(".js-img-hero", {
        ...scrollRevealOption,
        origin: "right"
    });

    ScrollReveal().reveal(".js-title-hero", {
        ...scrollRevealOption,
        delay: 500,
    });

    ScrollReveal().reveal(".js-paragrafo-hero", {
        ...scrollRevealOption,
        delay: 700,
    });

    ScrollReveal().reveal(".js-cta", {
        ...scrollRevealOption,
        delay: 900,
    });

    ScrollReveal().reveal(".js-img-mobile1", {
        ...scrollRevealOption,
        delay: 600,
    });

    ScrollReveal().reveal(".js-img-mobile2", {
        ...scrollRevealOption,
        delay: 800,
    });

    ScrollReveal().reveal(".js-img-mobile3", {
        ...scrollRevealOption,
        delay: 1000,
    });

    ScrollReveal().reveal(".js-img-mobile4", {
        ...scrollRevealOption,
        delay: 1200,
    });
}
init_animacaoHero()


function alterarBtn() {
    const conteudo = document.querySelector(".js-conteudo-left");
    const cta = document.querySelector('.cta')
    const picture = document.querySelector('.js-picture');
    const largura = window.innerWidth;

    if (largura < 900) {
        conteudo.removeChild(cta);
        picture.appendChild(cta)
    }
}
alterarBtn()

    
function init_menuMobile() {
//Função para abertura do menu mobile
    const btnMobile = document.getElementById('btn-mobile')
    const header = document.querySelector(".js-header");

    function toggleMenu() {
    //Função para ativar o menu mobile ao click
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
    //Função para inserir o botão CTA dentro do menu mobile (NAV)
    //quando o tamanho da tela for menor que 900px e retirar ele quando maior que 900px
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
    //Função de animação dos elementos do Hero
    const scrollRevealOption = {
        distance: "50px",
        origin: "bottom",
        duration: 1000,
        reset: true,
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
        delay: 700,
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
//Função para alterar a posição do menu CTA do header para permanecer abaixo da imagem
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

function init_animarIcones() {
    const sectionIcone1 = document.querySelector(".js-section-icon-1");
    const sectionIcone2 = document.querySelector(".js-section-icon-2");

    const iconOne = document.querySelector("#icon-hero-one");
    const textIconOne = document.querySelector("#js-text-icon-one");
    const iconTwo = document.querySelector("#icon-hero-two");
    const textIconTwo = document.querySelector("#js-text-icon-two");

    function animarIcone1(elemento, posicaoY) {
        gsap.from(elemento, {
            opacity: 0,
            duration: 2,
            y: posicaoY,
            scrollTrigger: {
                trigger: sectionIcone1,
                start: "top center",
                end: "bottom center",
                scrub: true,
                
            },
        });
    }

    function animarIcone2(elemento, posicaoY) {
        gsap.from(elemento, {
            opacity: 0,
            duration: 2,
            y: posicaoY,
            scrollTrigger: {
                trigger: sectionIcone2,
                start: "top center",
                end: "bottom center",
                scrub: true,
            },
        });
    }

    animarIcone1(iconOne, 100);
    animarIcone1(textIconOne, 150);
    animarIcone2(iconTwo, 100);
    animarIcone2(textIconTwo, 150);
}
init_animarIcones();

function revelarTitulo(titulo, subtitulo) {
//Função criada para inserir as animações dos títulos e Subtítulos das sections
    const scrollRevealSobre = {
        distance: "100px",
        origin: "bottom",
        duration: 1000,
        reset: true,
    };

    ScrollReveal().reveal(titulo, {
        ...scrollRevealSobre,
        origin: "right",
    });

    ScrollReveal().reveal(subtitulo, {
        ...scrollRevealSobre,
        delay: 500,
    });
}
revelarTitulo(".js-sobre-title", ".js-sobre-sub-title");


function init_animacao_sobre() {
    //Animação da section Sobre. A tela fica fixa até que todas as animações sejam executadas com o Scroll
    const largura = window.innerWidth;
    if (largura > 1000 && largura < 1400) { 
        let timeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".sobre-bg",
                start: "top center", // Inicia quando a seção atinge o topo -100px
                end: "+=70%", // Mantém a seção fixa por um tempo antes de seguir
                scrub: true, // Suaviza as animações conforme o scroll
                // markers: true,
                // pin: true, // Mantém a seção fixa durante a animação
            },
        });

        // Animação dos diferenciais em sequência
        const iconesAnimar = document.querySelectorAll(".diferenciais-icon-container");
        iconesAnimar.forEach((element, index) => {
            timeline.from(element, {
                opacity: 0,
                x: 50,
                duration: 2,
                stagger: 0.2
            }, "-=0.3"); //O 0.3 faz com que a próxima animação inicie 0.3s após a anterior
        });

        // Animação dos tracejados
        const tracoAnimar = document.querySelectorAll(".js-traco-desktop");
        tracoAnimar.forEach((traco, index) => {
            timeline.from(traco, {
                opacity: 0,
                x: -30, // Movendo da esquerda para a posição original
                duration: 0.6,
                stagger: 0.2
            }, "-=0.3"); //O 0.3 faz com que a próxima animação inicie 0.3s após a anterior
        });

        // Botões no final
        timeline.from(".sobre-contato", { 
            opacity: 0, 
            y: 50, 
            duration: 0.6 
        }, "-=0.1");
    } else if (largura > 1400) { 
        let timeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".sobre-bg",
                start: "top center", // Inicia quando a seção atinge o topo -100px
                end: "center center", // Mantém a seção fixa por um tempo antes de seguir
                scrub: true, // Suaviza as animações conforme o scroll
                // markers: true,
                // pin: true, // Mantém a seção fixa durante a animação
            },
        });

        // Animação dos diferenciais em sequência
        const iconesAnimar = document.querySelectorAll(".diferenciais-icon-container");
        iconesAnimar.forEach((element, index) => {
            timeline.from(element, {
                opacity: 0,
                y: 50,
                duration: 0.6,
                stagger: 0.2
            }, "-=0.3"); //O 0.3 faz com que a próxima animação inicie 0.3s após a anterior
        });

        // Animação dos tracejados
        const tracoAnimar = document.querySelectorAll(".js-traco-desktop");
        tracoAnimar.forEach((traco, index) => {
            timeline.from(traco, {
                opacity: 0,
                x: -30, // Movendo da esquerda para a posição original
                duration: 0.6,
                stagger: 0.2
            }, "-=0.3"); //O 0.3 faz com que a próxima animação inicie 0.3s após a anterior
        });

        // Botões no final
        timeline.from(".sobre-contato", { 
            opacity: 0, 
            y: 50, 
            duration: 0.6 
        }, "-=0.1");
    } else if (largura < 900) {
        const iconeMobile = document.querySelectorAll('.diferenciais-icon-container');
        const sectionIconeMobile = document.querySelector(".diferenciais");

        iconeMobile.forEach((elemento) => {
            gsap.from(elemento, {
                opacity:0,
                duration: 2,
                y: 50,
                scrollTrigger: {
                    trigger: sectionIconeMobile,
                    start: 'top center',
                    end: 'bottom center',
                }
            })
        })
    }
}
init_animacao_sobre();
revelarTitulo(".js-servicos-title", ".js-servicos-sub-title");

function init_animacaoCards() {

    ScrollReveal().reveal(".js-card-users", {
        duration: 800,
        origin: "bottom",
        distance: "50px",
        interval: 200,
        reset: true,
    })

}
init_animacaoCards()

function init_animarChamada() {

    const scrollRevealOption = {
        distance: "50px",
        origin: "left",
        duration: 1000,
        reset: true,
    };

    ScrollReveal().reveal(".js-chamada-conteudo-texto", {
        ...scrollRevealOption,
        delay: 500,
    });

    ScrollReveal().reveal(".js-botao-chamada", {
        ...scrollRevealOption,
        delay: 600,
    })

    ScrollReveal().reveal(".js-chamada-img", {
        ...scrollRevealOption,
        origin: "right",
        delay: 700,
    });
}
init_animarChamada()

const tabMenu = document.querySelectorAll('.js-tabmenu .equipe-card-info');
const tabContent = document.querySelectorAll('.js-tabcontent .profissional');

if(tabMenu.length && tabContent.length) {


    tabContent[0].classList.add('ativo');


    function activeTab(index) {
        tabContent.forEach((content) => {
            content.classList.remove('ativo');
        });
        tabContent[index].classList.add('ativo');
    }

    tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', function(event) {
            event.preventDefault();
            activeTab(index)
        });
    }); 
}
revelarTitulo(".js-equipe-title");


/*FUNÇÃO PARA ANIMAÇÃO DOS CARDS DE EQUIPE*/
function init_animacao_equipe() {

    ScrollReveal().reveal('.js-equipe-card', {
        duration: 800,
        origin: 'left',
        distance: '50px',
        interval: 200, // Cada elemento será animado com 200ms de diferença
        reset: true,
    });

    ScrollReveal().reveal(".js-tabcontent", {
        duration: 800,
        origin: 'right',
        distance: '50px',
        reset: true,
    });

}; init_animacao_equipe();

// CARROSSEL - SERVIÇOS MOBILE ------------------------------------------------------

function init_carrossel() {

    var swiper = new Swiper(".swiper", {
        grabCursor: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true
        },
        breakpoints: {
            300: {
                slidesPerView: 1.5,
                spaceBetween: 16
            },
            380: {
                slidesPerView: 1.5,
                spaceBetween: 20
            },
            400: {
                slidesPerView: 1.5,
                spaceBetween: 40
            },
            500: {
                slidesPerView: 1.5,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 2.5,
                spaceBetween: 40
            },
            900: {
                slidesPerView: 4,
                spaceBetween: 40
            },
        }
    });
} init_carrossel();

// CÓDIGO PARA O MODAL DA SECTION DE EQUIPE
function init_modalEquipe() {

    const largura = window.innerWidth
    const botao = document.querySelectorAll(".equipe-card-info a");
    const botao1 = botao[0]
    const botao2 = botao[1]
    const botao3 = botao[2]
    const botao4 = botao[3]
    const closeSofia = document.querySelector('.close-sofia')
    const closeMariana = document.querySelector(".close-mariana");
    const closeLaura = document.querySelector(".close-laura");
    const closeRenata = document.querySelector(".close-renata");
    const modalSofia = document.querySelector(".modal-bg-sofia");
    const modalMariana = document.querySelector(".modal-bg-mariana");
    const modalLaura = document.querySelector(".modal-bg-laura");
    const modalRenata = document.querySelector(".modal-bg-renata");


    if (largura <= 1010) {
        function desable(event) {
            event.preventDefault();
        };
        botao.forEach((link) => {
            link.addEventListener('click', desable)
        });
        botao1.addEventListener('click', () => {
            modalSofia.classList.add("modal-bg-active");
        });
        botao2.addEventListener("click", () => {
            modalMariana.classList.add("modal-bg-active");
        });
        botao3.addEventListener("click", () => {
            modalLaura.classList.add("modal-bg-active");
        });
        botao4.addEventListener("click", () => {
            modalRenata.classList.add("modal-bg-active");
        });
        closeSofia.addEventListener('click', () => {
            modalSofia.classList.remove("modal-bg-active");
        });
        closeMariana.addEventListener("click", () => {
            modalMariana.classList.remove("modal-bg-active");
        });
        closeLaura.addEventListener("click", () => {
            modalLaura.classList.remove("modal-bg-active");
        });
        closeRenata.addEventListener("click", () => {
            modalRenata.classList.remove("modal-bg-active");
        });
    } else {
        console.log('maior que 900')
    }
}init_modalEquipe();

revelarTitulo(".vazando", ".vazando h1");

const testimonialCard1 = document.querySelectorAll(".js-testimonial-card")[0];
const testimonialCard2 = document.querySelectorAll(".js-testimonial-card")[1];

const scrollRevealOption = {
    distance: "100px",
    origin: "left",
    duration: 1000,
    reset: true,
}

ScrollReveal().reveal(testimonialCard1, {
    ...scrollRevealOption
});
ScrollReveal().reveal(testimonialCard2, {
    ...scrollRevealOption,
    origin: "right"
});
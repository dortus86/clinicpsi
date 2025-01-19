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
        menu.removeChild(btn);
        header.appendChild(btn);
    } else {
        menu.appendChild(btn);
    }
    menu.classList.remove("active");
    btn.classList.remove("active");
}
window.addEventListener('resize', redefinir)
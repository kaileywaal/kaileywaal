function toggleMenu(e) {
    if(e.type != "resize") {
        document.querySelector('.hamburger-icon').classList.toggle('collapsible--open');
        document.querySelector('.nav-bar').classList.toggle('nav-bar-collapsible--open');
    }    

    else if(window.screen.width >= 650) {
        document.querySelector('.hamburger-icon').classList.remove('collapsible--open');
        document.querySelector('.nav-bar').classList.remove('nav-bar-collapsible--open');
    } 
}

window.addEventListener("resize", toggleMenu);
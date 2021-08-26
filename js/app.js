function toggleMenu(e) {
    if(e.type != "resize") {
        console.log(e.type);
        document.querySelector('.hamburger-icon').classList.toggle('collapsible--open');
        document.querySelector('.nav-bar').classList.toggle('nav-bar-collapsible--open');
    }    

    if(window.width >= 650) {
        console.log("if")
        document.querySelector('.hamburger-icon').classList.remove('collapsible--open');
        document.querySelector('.nav-bar').classList.remove('nav-bar-collapsible--open');
    } 
}

window.addEventListener("resize", toggleMenu);
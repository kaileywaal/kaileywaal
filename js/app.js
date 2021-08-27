window.onload = adjustLightModeSlider;
window.onload = getThemeFromLocalStorage;

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

// Get dark mode from local storage

function getThemeFromLocalStorage() {
    localStorage.getItem('theme') === 'dark-mode' ? setTheme('dark-mode') : setTheme('light-mode');
    adjustLightModeSlider();
}

// Set theme by passing the corresponding class name as an argument
function setTheme(themeName) {
    //Set the theme in local storage so it works on page reload
    localStorage.setItem('theme', themeName);
    // Set document theme to theme name
    document.documentElement.className = themeName;
}

// Add event listener to toggle button and call this function to toggle the theme.
function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') === 'dark-mode';
    // if currentTheme is dark mode, change the checkbox to checked so the toggle is in correct position
    
    // If current theme is dark mode, change to light mode
    //If current theme is light mode, change to dark mode
    //If no current theme is in storage, set to light mode
    currentTheme ? setTheme('light-mode') : setTheme('dark-mode');
    //OPTIONAL: adjust style settings of toggle button here
    adjustLightModeSlider();
}

function adjustLightModeSlider() {
    let checkbox = document.querySelector('#checkbox');
    if(localStorage.getItem('theme') === 'dark-mode') {
        checkbox.checked = true;
        let slider = document.querySelector(".slider:before");
        slider.style.transform = "translateX(22px)";
    }
}



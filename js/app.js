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
localStorage.getItem('theme') === 'dark-mode' ? setTheme('dark-mode') : setTheme('light-mode');

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
    // If current theme is dark mode, change to light mode
    //If current theme is light mode, change to dark mode
    //If no current theme is in storage, set to light mode
    currentTheme ? setTheme('light-mode') : setTheme('dark-mode');

    //OPTIONAL: adjust style settings of toggle button here
}
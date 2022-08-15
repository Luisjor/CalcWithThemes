const ThemeSelector = document.querySelectorAll(".themeSelector");

ThemeSelector.forEach(item => {
    if (item.value === localStorage.theme) {
        item.checked = true;
    }
    item.addEventListener("click", () => {
        setTheme(item.value)
    })

})

function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    console.log(localStorage.theme)
    document.documentElement.className = themeName;
}

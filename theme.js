
const ThemeSelector = document.querySelectorAll(".themeSelector");
document.documentElement.className = localStorage.theme;

if(document.documentElement.className === "undefined") {
    document.documentElement.className = "theme-blue"
} else {document.documentElement.className = localStorage.theme;}

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
    document.documentElement.className = themeName;
}

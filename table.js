const setTheme = (theme) => {
    if (theme == "light") {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
    } else if (theme == "dark") {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
    }
};

const light = document.getElementById("light");
const dark = document.getElementById("dark");

let curTheme = localStorage.getItem("theme");
if (curTheme != null) {
    setTheme(curTheme);
    if (curTheme == "light") {
        light.checked = true;
    } else if (curTheme == "dark") {
        dark.checked = true;
    }
}

light.addEventListener("input", (ev) => {
    localStorage.setItem("theme", "light");
    setTheme("light");
});

dark.addEventListener("input", (ev) => {
    localStorage.setItem("theme", "dark");
    setTheme("dark");
});

window.addEventListener("mousedown", (ev) => {
    // console.log(ev.button);
    if (ev.button == 2) {
        
    }
});
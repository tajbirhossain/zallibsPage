const bars = document.querySelector(".fa-bars")
const menu = document.querySelector("header ul")
const overlay = document.querySelector(".overlay")



bars.addEventListener("click", () => {
    menu.classList.add("active")
    overlay.classList.add("active")
})
overlay.addEventListener("click", () => {
    menu.classList.remove("active")
    overlay.classList.remove("active")
})
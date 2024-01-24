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




const userForm = document.querySelector(".inTouch form")
const nameInp = document.querySelector("#name")
const mailInp = document.querySelector("#mail")
const phoneInp = document.querySelector("#phone")
const messageInp = document.querySelector("#message")
const nameWarn = document.querySelector(".nameWarn")
const mailWarn = document.querySelector(".mailWarn")
const phoneWarn = document.querySelector(".phoneWarn")
const messageWarn = document.querySelector(".messageWarn")


userForm.addEventListener("submit", (e) => {
    e.preventDefault()
    nameWarn.classList.remove("active")
    mailWarn.classList.remove("active")
    phoneWarn.classList.remove("active")
    messageWarn.classList.remove("active")
    let warnCount = 0
    if (!nameInp.value) {
        nameWarn.classList.add("active")
        warnCount++
    }
    if (!messageWarn.value) {
        messageWarn.classList.add("active")
        warnCount++
    }
    if (!mailInp.value) {
        mailWarn.classList.add("active")
        warnCount++
    }
    if (!phoneInp.value) {
        phoneWarn.classList.add("active")
        warnCount++
    }
})
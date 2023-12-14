let cs = document.querySelector(".cs")
let cb = document.querySelector(".cb")
let body = document.querySelector("body")
let menu = document.querySelector("#menu")
let width = body.clientWidth
let height = body.clientHeight
console.log(width)
console.log(height)
body.addEventListener("mousemove", (e) => {
    let x = e.clientX
    let y = e.clientY
    cs.style.top = y + "px"
    cs.style.left = x + "px"
    cb.style.top = y + "px"
    cb.style.left = x + "px"
})
document.querySelector("body").addEventListener("mousedown", (e) => {
    cs.style.transform = "translate(-50%, -50%)scale(1.5)"
    cb.style.transform = "translate(-50%, -50%)scale(.5)"
})
document.querySelector("body").addEventListener("mouseup", (e) => {
    cs.style.transform = "translate(-50%, -50%)scale(1)"
    cb.style.transform = "translate(-50%, -50%)scale(1)"
})

body.addEventListener("contextmenu", (e) => {
    e.preventDefault()
    let x = e.clientX
    let y = e.clientY
    menu.style.display = "flex"
    if ((x + 100) <= width) {
        menu.style.removeProperty("right")
        menu.style.left = x + "px"
    }
    else {
        menu.style.removeProperty("left")
        menu.style.right = (width - x) + "px"
    }
    if ((y + 150) <= height) {
        menu.style.removeProperty("bottom")
        menu.style.top = y + "px"
    }
    else {
        menu.style.removeProperty("top")
        menu.style.bottom = (height - y) + "px"
    }
})

window.addEventListener("click", () => {
    menu.style.display = "none"
})
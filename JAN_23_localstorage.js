localStorage.setItem("data","prince")
let name="mobile"
localStorage.setItem("mblname",name)
localStorage.setItem("mblname","ok")

let nm = localStorage.getItem("mblname")
document.write("<h1>"+nm+"</h1")

localStorage.removeItem("mblname")

localStorage.clear()
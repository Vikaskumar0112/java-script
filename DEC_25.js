let st
function start(){
    let head =document.querySelector("#head")
    let num = 0
    st =setInterval(()=>{head.innerHTML=num++},1000)


    
}
function stop(){
    clearInterval(st)
}
setTimeout(()=>alert("setttimeout call"),10000)

let btn1=document.querySelector(".btn1")
btn1.addEventListener('click',function(){alert("clicked")})

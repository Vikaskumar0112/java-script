
let num=Math.trunc(Math.random()*1000+1)
console.log(num)

const fun=() =>{
    let st1=document.querySelector('#st1')
    let st2=document.querySelector('#st2')
    let st3=document.querySelector('#st3')

    st1.innerHTML=Math.trunc(Math.random()*20+1)
    st2.innerHTML=Math.trunc(Math.random()*20+1)
    st3.innerHTML=Math.trunc(Math.random()*20+1)

}

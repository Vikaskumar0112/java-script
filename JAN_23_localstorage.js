// localStorage.setItem("data","prince")
// let name="mobile"
// localStorage.setItem("mblname",name)
// localStorage.setItem("mblnam","ok")
// localStorage.setItem("mblnamO","ok1")

// let nm = localStorage.getItem("mblname")
// document.write("<h1>"+nm+"</h1>")

// // localStorage.removeItem("mblname")

// // localStorage.clear()



// let person_ob= {
//     name : "vikas",
//     email : "vikas123@gmail.com",
//     password : "123vd"
// }

// localStorage.setItem("userdata",JSON.stringify(person_ob))

// let data=localStorage.getItem("userdata")
// console.log(data)


const datasubmit =()=>{
    let userdata = {
        name : document.querySelector('#uname').value,
        name : document.querySelector('#uemail').value,
        name : document.querySelector('#upass').value,
    }
    localStorage.setItem("userdata",JSON.stringify(userdata))
}
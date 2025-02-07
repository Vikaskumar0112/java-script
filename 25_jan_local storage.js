function Auth(){
    let signup = {
    name : document.querySelector('#name').value,
    email : document.querySelector('#email').value,
    password : document.querySelector('#pass').value
}

 localStorage.set("userdata",JSON.stringify(signup))
}

var data = JSON.parse(localStorage.getItem("userdata"))
function loginAuth(){
    let logindata = {
        email: document.querySelector('#loginemail').value,
        password: document.querySelector('#loginpass').value,
    }

    if(data.email != logindata.email)
}
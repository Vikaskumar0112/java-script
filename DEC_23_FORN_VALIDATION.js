function validate(){
let name = document.querySelector("#name").value
let age = document.querySelector("#age").value
let contact = document.querySelector("#contact").value
let email = document.querySelector("#email").value
let password = document.querySelector("#password").value
let cpassword = document.querySelector("#cpassword").value

if(name ==""){
    alert("please fill out your name")
    document.querySelector('#name').focus()
    return false
}
else if(age ==""){
    alert("please fill ur age")
    document.querySelector("#age").focus()
    return false
}
else if (isNaN(age)) {
    alert("Age Should Be in number")
    document.querySelector("#age").focus()
    return false
}
else if(contact ==""){
    alert("enter your contact number")
    document.querySelector("#contact").focus()
    return false
}
else if(isNaN(contact)){
    alert("contact should be in number")
    document.querySelector('#contact').focus()
    return false
}
else if(contact.length>10 || contact.length<10){
    alert("contact should be 10 digit")
    document.querySelector('#contact').focus()
    return false
}
else if(email == ""){
    alert("please enter email")
    document.querySelector("#email").focus()
    return false
}
else if (!(email.includes("@"))) {
    alert("use @ for Validation")
    document.querySelector("#email").focus()
    return false
}
else if(password == ""){
    alert("please enter password")
    document.querySelector("#password").focus()
    return false
}
else if (!(password.match(/[~!@#$%^&*({})]/))) {
    alert("please enter aleast one special charactor")
    document.querySelector("#email").focus()
    return false
}
else if(cpassword == ""){
    alert("please enter your conform password password")
    document.querySelector("#cpassword").focus()
    return false
}
else if(password != cpassword){
    alert("password miss match")
    document.querySelector("#cpassword").focus()
    return false
}


}
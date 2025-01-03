// let obj = {
//     name : "vikas"
//     contact : 123123

// }

let emp = {
emp_name : "aditya",
emp_id : 201,
emp_age : 22,
emp_designation : "Devloper",
emp_account:{
    emp_salary : 15000,
    emp_acname : "SBI",
    emp_acbalance : "Rs 4/- only",
}


}

let ob2 = {
    name : "vikas",
    demo : function(){
        alert("inside object")
    },
    friends : ["harsh","avisha","vikas","umesh"]
}
ob1.demo()
console.log(ob1.friend[0]);

let ob3 = {
    name : "cybrom",
    fun()=function(){
        console.log(this.name);
    }
}
ob3.fun()
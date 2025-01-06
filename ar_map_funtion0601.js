// map()  funtion


// let ar =[1,2,3,4,5,6,7,8];
// let neww =ar.map((t)=>{return t*t})
// console.log(neww);





//ar.filter funtion

// let ar =[1,2,3,4,5,6,7,8,12,45,15,18];

// let nar =ar.filter((w)=>{return w%2==0})
// console.log(nar);

let student = [
{
    id : 1,
    sname : "akash",
    age : 22,
    city : "bhopal",
},
{
    id : 2,
    sname : "ajay",
    age : 25,
    city : "indore",
},
{
    id : 3,
    sname : "vijay",
    age : 28,
    city : "raisen",
},

]

let st=student.map((e)=>{return e.sname})
console.log(st)


let st_filter= student.filter((e)=>{return e.age>20})
console.log(st_filter)



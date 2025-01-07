// map() funtion
// map() funtion it is predefine funtion 
// iska use array se data ko fetch karne ke liye kiya jata h
// yah arry return karta h
//yah call back funtion ko accept karta h
//yah purane array ko modify nhi karta

let arr = [2,4,8,10,15,20,22,25];
let a=arr.map((t)=>{return t*4});
console.log(a);


// filter funtion
//yah funtion array me se data ko filter karke deta h
//arry ke har element ko check karta hai aur jo call back funtion ki condition ko satisfy karta h use return karta h
// yah bhi purane arry ko modify nhi karta
// jab arry me kuch spacifiq element ko chunnan ho to iska use karte h

let arr1=[2,4,8,10,15,20,22,25];
let newarr=arr1.filter((e)=>{return e%2==0})
console.log(newarr)


//=================================

let emp= [
    {
        id :1,
        name: "ajay",
        age: 30,
        salary: 30000,
    },
    
    {
        id :2,
        name: "mohit",
        age: 26,
        salary: 24000,
    },

    {
        id :3,
        name: "rahul",
        age: 24,
        salary: 35000,
    },
    {
        id :4,
        name: "dinesh",
        age: 32,
        salary: 28000,
    }
    
]

let empm=emp.map((p)=>{return p.name})
console.log(empm)

let emps=emp.filter((k)=>{return k.salary>25000})
console.log(emps)




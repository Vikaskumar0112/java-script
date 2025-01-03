let ar = []

// for(let a = 0; a<10; a++){
//     ar[a] = parseInt(prompt("enter element"))
// }
// let sum = 0
// for(let v of ar){
//     if(v%2!=0){
//         sum =sum+v
//     }
// }
// console.log(sum);

for(let k in ar){
    console.log(k);
}
ar.push("kuch bhi",909)

console.log(ar)

ar.pop()
console.log(ar)

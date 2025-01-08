let student=[
    {
        Roll:1,
        Name:"ajay",
        Age:10,
        city:"Bhopal"
    },

    {
        Roll:2,
        Name:"vikas",
        Age:12,
        city:"indore"
    },
    {
        Roll:3,
        Name:"sumit",
        Age:14,
        city:"sihor"
    },
    {
        Roll:4,
        Name :"dilip",
        Age:16,
        city:"satna"
    },

]

let finaldata = student.map((e)=>`
<tr>
  <td> ${e.Roll}</td>
  <td> ${e.Name}</td>
  <td> ${e.Age}</td>
  <td> ${e.city}</td>
</tr>


`).join("")
document.querySelector('#displaydata').innerHTML=finaldata
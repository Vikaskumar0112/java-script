async function retrive_Data(){
    let data = await fetch("____________")
    let final_data =await data.json()
    let tdata = final_data.map((e)=>`
        <tr>
            <td>${e.id}</td>
            <td>${e.age}</td>
            <td>${e.contect}</td>
            <td>${e.city}</td>
        </tr>
    `).join("")
    document.querySelector('#displaydata').innerHTML=tdata

}
retrive_Data()
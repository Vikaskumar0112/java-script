async function fetch_json(){
   let data = await fetch("")
   let final_data =await data.json()
   console.log(final_data)
}
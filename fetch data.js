async function fetch_json(){
   let data = await fetch("https://jsonplaceholder.typicode.com/posts")
   let final_data =await data.json()
   console.log(final_data)
}
async  function getData()
{
    const url = axios.get('https://jsonplaceholder.typicode.com/users')
    const result = await url.data
    console.log(result)
    return result
}
console.log(getData())
let getUsers = async function(){
    const url = await fetch('https://jsonplaceholder.typicode.com/users')
    const result = await url.json()
    return result
}
getUsers().then((data)=>console.log(data))
const getTodos = async ()=>{
    try{
        const url = axios.get('https://jsonplaceholder.typicode.com/users')
        const result = await url.data
        console.log(result.slice(0,10))
        return result.slice(0,10)
    }catch(err){
        console.log(err)
    }finally {
        console.log('Congratulations!')
    }
}
console.log(getTodos())


const user = {
    name: "Bektur",
    surname: 'Ryskulov',
    age:20,
    address:{
        country:'KG',

    }
}


// ======================================================================


Fetch()

fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
        // console.log('res', res)
        console.log(res.json())
        // res.json()
    })
    .then((data)=> console.log(data))











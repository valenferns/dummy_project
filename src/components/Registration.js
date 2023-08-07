import React,{useState} from "react"
import Axios from 'axios'
import './Registration.css'
export default function Registration() {
    // const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    function signUp(){
        let items={email,password}
        console.warn(items)
        Axios.post('https://reqres.in/api/register',{
            email: email,
            password: password
        })
        .then(result=>{
            console.log(result.data)
        })
        .catch(err=>{
            console.log(err)
        })
        
        Axios.get("https://reqres.in/api/users?page=2")
        .then((response)=>{
            console.log(response.data)
        })
    }
  
  return (
    <div className='main'>
        
        <div className='reg-form'>
        <h1>
            Registration Page
        </h1>
        <br />
            {/* <input type="text" placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} value={name}/> */}
            <br />
            <input type="text" placeholder='email' onChange={(e)=>setEmail(e.target.value)} value={email}/>
            <br />
            <input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)} value={password}/>
            <br />
            <button className='btn1' onClick={signUp}>Submit</button>
        </div>
    </div>
  )
}

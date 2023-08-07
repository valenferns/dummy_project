import React, { useEffect, useState } from 'react'
import Axios from 'axios'
export default function AxiosTut() {
    const [data,setData]=useState([])
  useEffect(()=>{
    Axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
        console.log(response)
        setData(response.data)
    })
    },[])  
  return (
    <div>AxiosTut {data.map((data)=>{
        return(
            <div>
                {data.name}
            </div>
        )
    })}</div>
  )
}

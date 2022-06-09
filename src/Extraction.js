import {useState} from 'react'
export const Extraction=()=>{

    const[user,setUser]=useState("")

    const like=()=>{
        alert(user+" has clicked")
    }

    const praba=(anu)=>{
        setUser(anu.target.value)
        // console.log(anu.target.name)
        // console.log(anu.target.value)
        // console.log(anu.target.placeholder)
    }

    return(<>
        <input type="text" name={user} placeholder="Just an name" onChange={praba}/>
        <button onClick={like}>Chase Me If u can!</button>
    </>)
}
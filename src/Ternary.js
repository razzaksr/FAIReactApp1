import { useState } from "react"

export const Ternary=()=>{

    const[wish,setWish]=useState("nothing")
    const[result,setResult]=useState("")
    const[decor,setDecor]=useState({color:'white',backgroundColor:'black'})

    const trigger=(tmp)=>{
        setWish(tmp.target.value)
    }

    const pressed=()=>{
        //(condition)?trueblock:falseblock
        (wish==='spring')?setDecor({color:'white',backgroundColor:'green'}):
        (wish==='rainy')?setDecor({color:'blue',backgroundColor:'grey'}):
        (wish==='summer')?setDecor({color:'black',backgroundColor:'yellow'}):
        (wish==='winter')?setDecor({color:'white',backgroundColor:'skyblue'}):
        setDecor({color:'green',backgroundColor:'orange'})
        
        setResult(wish)
    }

    return(<>
        <input type="text" name="season" 
            placeholder="Tell us favorite season" onChange={trigger}
        />
        <button onClick={pressed}>Click</button>
        {/* {wish} */}
        <p style={decor}>{result}</p>
    </>)
}
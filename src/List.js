import { useEffect, useState } from "react"
import { Create } from "./Create"
import { executeListing } from "./Storage"
//import { affect, executeListing, loading } from "./Storage"
// import {loading} from './Storage'

export const List=()=>{

    const[tmpArr,setTmpArr]=useState([])

    const[cview,setCview]=useState(false)

    useEffect(()=>{
        //affect()
        setTmpArr(executeListing())
    },[])

    return(
    <>
        <div className="container mt-3">
        {(cview)?
        <>
            <Create/>
            <button className="btn btn-outline-secondary" onClick={()=>{
                setCview(false)
                window.location.assign("/")
            }}>
                    <i class="bi bi-skip-backward-circle-fill"></i>
            </button>
        </>
        :
        <>
            <button className="btn btn-outline-success" onClick={()=>{
                setCview(true)
            }}>
                <i class="bi bi-newspaper"></i>
            </button>
            <div className="row justify-content-center">
                <table className="table table-bordered text-center table-hover col-lg-8 col-md-10 col-sm-12 shadow">
                    <thead>
                        <tr>
                            <th>Resource Id</th>
                            <th>Resource Name</th>
                            <th>Resource Issue</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tmpArr.map((ele,ind)=>(
                            <tr>
                                <td>{ele.id}</td>
                                <td>{ele.name}</td>
                                <td>{ele.issue}</td>
                            </tr>
                        ))} 
                    </tbody>
                </table>
            </div>
            </>}
        </div>
        
    </>
    )
}
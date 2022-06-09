import { useEffect, useState } from "react"
import {records} from './API'

export const Another=()=>{

    const[myRecords,setMyRecords]=useState([])

    useEffect(()=>{
        setMyRecords(records)
    },[])

    return(<>
        <table className="table table-bordered col-lg-8 col-md-10 col-sm-12 shadow">
            <thead>
                <tr>
                    <th>Resource Id</th>
                    <th>Resource Name</th>
                    <th>Resource Issue</th>
                </tr>
            </thead>
            <tbody>
                {myRecords.map((ele,ind)=>(
                    <tr>
                        <td>{ele.id}</td>
                        <td>{ele.name}</td>
                        <td>{ele.issue}</td>
                    </tr>
                ))} 
            </tbody>
        </table>
    </>)

}
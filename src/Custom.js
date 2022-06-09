import './mycss.css'
export const Custom=()=>{

    const doIt={
        borderRadius:'100px',
    }

    return(
        <>
            <a href="https://www.oracle.com" style={{color:'red',backgroundColor:'black'}}>
                Oracle
            </a>
            <img src="corp1.jpg" width="300px" height="300px" style={doIt}/>
            <table>
                <thead>
                    <tr>
                        <th>Resource Id</th>
                        <th>Resource Name</th>
                        <th>Resource Issue</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>12001</td>
                        <td>Prabakar</td>
                        <td>Long sight</td>
                    </tr>
                    <tr>
                        <td>11201</td>
                        <td>Siliviya</td>
                        <td>Hair loss</td>
                    </tr>
                    <tr>
                        <td>12012</td>
                        <td>Anu</td>
                        <td>Short sight</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
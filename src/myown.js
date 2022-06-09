export default function Anu()
{
    return(
        <>
            <h1>This is Component created by ANU</h1>
            <Siliviya/>
        </>
    )
}

const Siliviya=()=>{
    return(
        <>
        <ol>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
        </ol>
        <Prabakar/>
        </>
    )
}

export const Prabakar=()=>{
    return(
        <a href="https://www.google.com">Search Anything in google</a>
    )
}

//export default Anu;
export {Siliviya}
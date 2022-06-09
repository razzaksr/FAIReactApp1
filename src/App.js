import Anu from "./myown"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BootSample } from "./BootSample"
import { Custom } from "./Custom"
import { GoThere } from "./GoThere"
import { Extraction } from "./Extraction"
import { Ternary } from "./Ternary"
import { Just } from "./Just"
import { Another } from "./Another"

const App=()=>{
    return (
        <>
            <h1>Welcome to the bootcamp 2022</h1>
            <p>Where you gonna learn lot</p>
            {/* <Anu/> */}
            {/* <BootSample/> */}
            {/* <Custom/> */}
            {/* <GoThere where="razak.png" agalam="100px" uyaram="100px"/> */}
            {/* <Extraction/> */}
            {/* <Ternary/> */}
            {/* <Just/> */}
            <Another/>
        </>
    )
}

export default App;
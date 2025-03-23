import { useState } from "react";
import app from "../../utils/firebaseConfig";
import {getDatabase , ref , set , push} from "firebase/database";



const Write = () =>{
    
        let [inputvalue1,setInputvalue1] = useState("");
        let [inputvalue2,setInputvalue2] = useState("");

    const saveData = async( )=>{
        const db = getDatabase(app)
        const new1= push (ref(db , "id"))
        set(new1,{name:inputvalue1,age : inputvalue2
    }).then(()=>{
        alert("success")
    }).catch(()=>{
        alert("error")
    }
    )}

    return(
        <>
        <input type="text" value={inputvalue1}
        onChange ={(e)=> setInputvalue1(e.target.value)}/>

        <input type="text" value={inputvalue2}
        onChange ={(e)=> setInputvalue2(e.target.value)}/>

        <button onClick={saveData}>click me</button>
        </>

    )
} 

export default Write;
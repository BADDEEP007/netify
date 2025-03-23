import { useEffect, useState } from "react";


const Result=() =>{
    const [Ans ,setAns] = useState(null);

    useEffect (()=>{
        const data = localStorage.getItem("Answers_submitted")
    if (data){
        alert(data)
    }
    if (!data){
        alert("no")
    }
    
   

},[]);

if (!Ans){
    alert("nodata")
}

return(
    <>
    <div>
    <p>{Ans}</p>
    </div>
    </>
);
}

export default Result;
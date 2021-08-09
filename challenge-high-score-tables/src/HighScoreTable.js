import React,{useState} from "react";
import Page  from "./Table"
const HighScore = (props) => {
    const [Ascending,setAscending] = useState(false)
    function handleAscending (){
        setAscending(!Ascending);
    } 
    return(
   <Page handleAscending={handleAscending} status={Ascending} data={props} />
)
}

export default HighScore;
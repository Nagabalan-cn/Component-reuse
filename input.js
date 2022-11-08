import React from "react";

const Input=({type,value,setvalue,label})=> 
<input
type={type} 
className="input"
value={value} 
sevalue={setvalue} 
onChange={(e)=>setvalue(e.target.value)}/>

 export default Input
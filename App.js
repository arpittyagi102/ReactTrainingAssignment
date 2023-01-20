import { useState } from "react";
import Welcome from "./components/Welcome";


function App() {
   const[name,setName]=useState("");
   const[submit,setSubmit]=useState(false);
  return (
    <div>
      Enter your name:

      <input placeholder="Enter your name:" value={name} onChange={event=>{setName(event.target.value)}} />
      <button onClick={()=>{setSubmit(!submit)}}>Submit</button>
      {(submit && name) && <Welcome name={name}></Welcome>}

      <br/><br/>
      Assignment done by Arpit Tyagi, 12012536
    </div>
    
  );
}

export default App;

import { useState } from "react";
import './style.css';
function Colormixerproject(){
    const colors=JSON.parse(localStorage.getItem("color"));
    const[r,setR]=useState(colors && colors.r?colors.r:0);
    const[g,setG]=useState(colors && colors.g?colors.g:0);
    const[b,setB]=useState(colors && colors.b?colors.b:0);
    const save=()=>{
        console.log("saved");
        localStorage.setItem("color",JSON.stringify({r,g,b}));
    }
    return (
        <div>
            <h1 className="heading">color mixer project</h1>
            <div style={{backgroundColor:'rgb('+r+','+g+','+b+')',height:'200px',width:'200px' ,margin:'auto'}}></div>
           <div className="colors">
           <label htmlFor="">Red</label>
            <input onChange={(e)=>setR(e.target.value)} value={r} type="range" min={0} max={255}/>
            <label htmlFor="">Green</label>
            <input onChange={(e)=>setG(e.target.value)} value={g}  type="range" min={0} max={255}/>
            <label htmlFor="">Blue</label>
            <input onChange={(e)=>setB(e.target.value)} value={b}  type="range" min={0} max={255}/><br/><br/>
            
           </div>
          <div className="btn">
          <button className="button" onClick={save}>Save color combination</button>
          </div>
        </div>
    );
}
export default Colormixerproject;
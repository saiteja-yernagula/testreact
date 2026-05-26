import AddDoctor from "./components/AddDoctor";
import Doctorcard from "./components/Doctorcard";
import Homecards from "./components/Homecards";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import "./components/styles.css";

import { useState,useEffect } from "react";

function App() {
const [count,setCount]=useState(0)

useEffect(()=>{

},[count])
 
  return (
    <div>
      <div>{count}</div>
      <button onClick={()=>setCount(count+1)}>clikc</button>
     
      <Navbar />
      <Section />
      <div className="doctorparent">
        <Doctorcard gender='male' name="Teja" specialization="Muscles"  />
        <Doctorcard gender='male' name="vamsi" specialization="Heart" />
        <Doctorcard gender='male' name="Raj" specialization="Legs"/>
        <Doctorcard gender='female' name="Vasavi" specialization="physchology"/>
      
      </div>
      <AddDoctor/>
   
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import AddDoctor from "./components/AddDoctor";
// import Doctorcard from "./components/Doctorcard";
// import Homecards from "./components/Homecards";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import "./components/styles.css";
import { BrowserRouter } from "react-router-dom";

// import { useState,useEffect } from "react";
import DoctorDetails from "./components/DoctorDetails";
// import Weather from "./components/Weather";
import { useState } from "react";
import useCounter from "./components/useCounter";
import Protectedroute from "./components/Protectedroute";

function App() {
  // const [count,setCount]=useState(0)
  const [islogin, setislogin] = useState(false);
  const { count, increment, decrement } = useCounter();

  // useEffect(()=>{

  // },[count])

  return (
    <div>
      {/* <div>{count}</div>
      <button onClick={()=>setCount(count+1)}>clikc</button>
      */}
      {count}
      <button onClick={increment}>inc</button>
      <button onClick={decrement}>dnc</button>
      <BrowserRouter>
        <Navbar />
        <button onClick={() => setislogin(true)}>click to login</button>
        <Routes>
          <Route path="/" element={<Section />} />
          <Route
            path="/add-doctor"
            element={
              <Protectedroute islogin={islogin}>
                <AddDoctor />
              </Protectedroute>
            }
          />

          {/* <div className="doctorparent">

<Doctorcard gender='male' name="Teja" specialization="Muscles"  />
<Doctorcard gender='male' name="vamsi" specialization="Heart" />
<Doctorcard gender='male' name="Raj" specialization="Legs"/>

</div> */}
          <Route
            path="doctor/:id"
            element={
              <Protectedroute islogin={islogin}>
                <DoctorDetails />
              </Protectedroute>
            }
          />
        </Routes>
        {/* <Doctorcard gender='female' name="Vasavi" specialization="physchology"/> */}
      </BrowserRouter>
      {/* <Weather/> */}
    </div>
  );
}

export default App;

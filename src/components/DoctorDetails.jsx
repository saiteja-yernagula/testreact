import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function DoctorDetails() {
  const { id } = useParams();

  const [singleDoctor, setSingleDoctor] = useState(null);

  async function fetchdata() {
    let doctors = await axios.get("https://doc-back.onrender.com/doctors");

    console.log(doctors);

    let finaldata = doctors.data.find((doctor) => doctor.id == id);

    setSingleDoctor(finaldata);
  }

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="container">
      <h1>Doctor Details Page</h1>

      {singleDoctor ? (
        <div className="doctorcard">
          <h2>Name: {singleDoctor.name}</h2>
          <h2>Age: {singleDoctor.age}</h2>
          <h2>Gender: {singleDoctor.gender}</h2>
          <h2>Specialization: {singleDoctor.specialization}</h2>
          <h2>Salary: {singleDoctor.salary}</h2>
        </div>
      ) : (
        <h2>Doctor not found</h2>
      )}
    </div>
  );
}

export default DoctorDetails;

import { useEffect, useState } from "react";
import Doctorcard from "./Doctorcard";

function Home({ newdoctor }) {
  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState("");
  const [specialization, setSpecialization] = useState("");

  function fetchDoctors() {
    let data = [
      {
        id: 1,
        name: "Teja",
        age: 26,
        gender: "Male",
        specialization: "Muscles",
        salary: 7000000,
      },

      {
        id: 2,
        name: "Sam",
        age: 26,
        gender: "Male",
        specialization: "Bones",
        salary: 4000000,
      },

      {
        id: 3,
        name: "Anu",
        age: 25,
        gender: "Female",
        specialization: "Heart",
        salary: 5000000,
      },
    ];
  

    setDoctors(data);
  }

  useEffect(() => {
    fetchDoctors();
  }, []);

  useEffect(() => {
    if (newdoctor) {
      setDoctors((prev) => [...prev, newdoctor]);
    }
  }, [newdoctor]);


  const filteredDoctors=doctors.filter((doctor)=>{
    return (
        doctor.name.toLowerCase().includes(search)
        &&
        (specialization=="" || doctor.specialization==specialization)
    )
  })
  return (
    <div>
      <div className="filters">
        <input
          type="text"
          placeholder="Search Doctor"
          value={search}
          className="textfield"
          onChange={(e) => setSearch(e.target.value)}
        />
  <select
        className="textfield"
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
        >

          <option value="">
            All
          </option>

          <option value="Muscles">
            Muscles
          </option>

          <option value="Bones">
            Bones
          </option>

          <option value="Heart">
            Heart
          </option>

        </select>
      </div>
      <div className="doctorparent">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <Doctorcard
              key={doctor.id}
              name={doctor.name}
              specialization={doctor.specialization}
              gender={doctor.gender}
            />
          ))
        ) : (
          <h2>no doctors found</h2>
        )}
      </div>
    </div>
  );
}

export default Home;

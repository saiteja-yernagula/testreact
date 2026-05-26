import { useEffect, useState } from "react";
import Doctorcard from "./Doctorcard";

function Homecards({ newdoc }) {

  const [doctors, setDoctors] = useState([]);

  const [search, setSearch] = useState("");

  const [specialization, setSpecialization] = useState("");

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
  function fetchdata() {
    setDoctors(data);
  }

  useEffect(() => {

    fetchdata();

  }, []);

  useEffect(() => {

    if (newdoc) {

      setDoctors((prev) => [...prev, newdoc]);

    }

  }, [newdoc]);

const filteredDoctors = doctors.filter((doctor) => {


  return (
    doctor.name.toLowerCase().includes(search)

    &&

    (specialization === "" || doctor.specialization === specialization)
  );

});

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

      <br />

      <div className="doctorparent">

        {
          filteredDoctors.length > 0

          ?

          filteredDoctors.map((val) => (

            <Doctorcard
              key={val.id}
              name={val.name}
              gender={val.gender}
              specialization={val.specialization}
            />

          ))

          :

          <h1>No Doctors Found</h1>
        }

      </div>

    </div>
  );
}

export default Homecards;
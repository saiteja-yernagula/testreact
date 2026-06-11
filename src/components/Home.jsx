import { useEffect, useState } from "react";
import Doctorcard from "./Doctorcard";
import axios from "axios";
import { useMemo } from "react";
// function Home() {
function Home({ newdoc, handleEdit }) {
  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState("");
  const [specialization, setSpecialization] = useState("");

  async function fetchDoctors() {
    try {
      let finaldata = await axios.get("http://doc-back.onrender.com/doctors");
      console.log(finaldata);

      setDoctors(finaldata.data);
    } catch (err) {
      console.log("some error is there");
    }
  }

  useEffect(() => {
    fetchDoctors();
  }, []);

  useEffect(() => {
    fetchDoctors();

    // if (newdoc) {
    //   setDoctors((prev) => [...prev, newdoc]);
    // }
  }, [newdoc]);

  async function handledelete(id) {
    alert(id);
    await axios.delete(`https://doc-back.onrender.com/doctors/${id}`);
    fetchDoctors();
  }

  const filteredDoctors = useMemo(() => {
    return doctors.filter((doctor) => {
      return (
        doctor.name.toLowerCase().includes(search) &&
        (specialization == "" || doctor.specialization == specialization)
      );
    });
  }, [search, doctors, specialization]);

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
          <option value="">All</option>

          <option value="Muscles">Muscles</option>

          <option value="Bones">Bones</option>

          <option value="Heart">Heart</option>
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
              id={doctor.id}
              handledelete={handledelete}
              handleEdit={() => handleEdit(doctor)}
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

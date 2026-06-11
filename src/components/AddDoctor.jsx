import { useState } from "react";
import Home from "./Home";
import "./styles.css";
// import Homecards from "./Homecards";
import axios from "axios";

function AddDoctor() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [salary, setSalary] = useState("");
  const [editId, setEditId] = useState(null);

  const [newdoc, setNewdoc] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    const doctor = {
      id: Date.now(),
      name,
      age,
      gender,
      specialization,
      salary,
    };

    await axios.post(`https://doc-back.onrender.com/doctors`, doctor);

    setNewdoc(doctor);

    setName("");
    setAge("");
    setGender("");
    setSpecialization("");
    setSalary("");
  }

  async function handleUpdate(e) {
    e.preventDefault();

    const updatedDoctor = {
      id: editId,
      name,
      age,
      gender,
      specialization,
      salary,
    };

    await axios.put(
      `https://doc-back.onrender.com/doctors/${editId}`,
      updatedDoctor,
    );

    setNewdoc(updatedDoctor);

    setEditId(null);

    // clearForm();
    
    setName("");
    setAge("");
    setGender("");
    setSpecialization("");
    setSalary("");
  }
  function handleEdit(doctor) {
  setEditId(doctor.id);

  setName(doctor.name);
  setAge(doctor.age);
  setGender(doctor.gender);
  setSpecialization(doctor.specialization);
  setSalary(doctor.salary);
}

  return (
    <div>
      {/* <form className="formcontainer" onSubmit={handleSubmit}> */}
        <form
  className="formcontainer"
  onSubmit={editId ? handleUpdate : handleSubmit}
>
        <input
          type="text"
          placeholder="Enter Doctor Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Select Gender</option>

          <option value="Male">Male</option>

          <option value="Female">Female</option>
        </select>

        <input
          type="text"
          placeholder="Enter Specialization"
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter Salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />

       <button>
  {editId ? "Update Doctor" : "Add Doctor"}
</button>
      </form>

      {/* <Homecards newdoc={newdoc} /> */}
      {/* <Home /> */}
      <Home newdoc={newdoc}   handleEdit={handleEdit} />
    </div>
  );
}

export default AddDoctor;

import { useState } from "react";
import Home from "./Home";
import "./styles.css";
import Homecards from "./Homecards";

function AddDoctor() {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [salary, setSalary] = useState("");

 const [newdoc,setNewdoc]=useState(null)

    function handleSubmit(e) {

        e.preventDefault();

        const doctor = {
            id: Date.now(),
            name,
            age,
            gender,
            specialization,
            salary
        };

        setNewdoc(doctor);

        setName("");
        setAge("");
        setGender("");
        setSpecialization("");
        setSalary("");
    }

    return (
        <div>

            <form className="formcontainer" onSubmit={handleSubmit}>

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

                <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                >
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

                <button>Add Doctor</button>

            </form>

          
      <Homecards newdoc={newdoc} />
      <Home newdoc={newdoc}/>

        </div>
    );
}

export default AddDoctor;
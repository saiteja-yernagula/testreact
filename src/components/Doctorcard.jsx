
import './styles.css'
import { useNavigate } from 'react-router-dom'
function Doctorcard({name,gender,specialization,id,handledelete,handleEdit}) {
  let navigate=useNavigate()
  return (
    <div className='card'>
        <img src="https://cdn-icons-png.flaticon.com/512/387/387561.png" alt="" width='100' />
        <div>
            <h2>{name}</h2>
            <p className="subtitle">{specialization}</p>
            <p className="subtitle">{gender} </p>
            <button onClick={handleEdit}>
  Edit
</button>
            <button className='btn' onClick={() => handledelete(`${id}`)}>Delete</button>
            <button className='btn' onClick={() => navigate(`/doctor/${id}`)}>view details</button>
        </div>
    </div>
  )
}

export default Doctorcard
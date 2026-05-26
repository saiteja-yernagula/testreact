
import './styles.css'
function Doctorcard({name,gender,specialization}) {
  return (
    <div className='card'>
        <img src="https://cdn-icons-png.flaticon.com/512/387/387561.png" alt="" width='100' />
        <div>
            <h2>{name}</h2>
            <p className="subtitle">{specialization}</p>
            <p className="subtitle">{gender} </p>
            <button className='btn'>view details</button>
        </div>
    </div>
  )
}

export default Doctorcard
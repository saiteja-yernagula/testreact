import './styles.css'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  let navigate=useNavigate()
  return (
    <nav>
        <h1>Doctor App</h1>
        
        <h3>
          <div>
            <button onClick={()=>navigate('/')}>HOME</button>
          </div>
          <div>
            <button onClick={()=>navigate('/add-doctor')}>Add doctor</button>
            
          </div>
        </h3>
    </nav>
  )
}

export default Navbar
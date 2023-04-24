import React ,{useState, useEffect}from 'react'
import './Updatecontact.css'
import { updatecontact,getUnqContact } from '../../api/contactApi'
import { useNavigate,useParams } from 'react-router'
const UpdateContact = () => {

  
const {id} = useParams()
const navigate = useNavigate()
  
  const [FirstName,setFirstName]=useState('')
  const [LastName,setLastName]=useState('')
  const [Email,setEmail]=useState('')
  const [Age,setAge]=useState('0')
  const [Adress,setAdress]=useState('')

}

  const handleUpdate= async(value,id)=>{               
    await  updatecontact(value,id)              
   navigate('/contact')            
   }

const UpadteContact = () => {
  return (
    <div className='bodyAddContact'   >
    <div className="container">
  {/* code here */}
  <div className="card">
    <div className="card-image">
      <h2 className="card-heading">
        Get started
        <small>Let us update your contact</small>
      </h2>
    </div>
    <form className="card-form">
      <div className="input">
        <input
          type="text"
          className="input-field"
          defaultValue="Alexander Parkinson"
          required=""
        />
        <label className="input-label">Full name</label>
      </div>
      <div className="input">
        <input
          type="text"
          className="input-field"
          defaultValue="vlockn@gmail.com"
          required=""
        />
        <label className="input-label">Email</label>
      </div>
      <div className="input">
        <input type="password" className="input-field" required="" />
        <label className="input-label">Password</label>
      </div>
      <div className="action">
        <button className="action-button">Get started</button>
      </div>
    </form>
    <div className="card-info">
      <p>
        By signing up you are agreeing to our{" "}
        <a href="#">Terms and Conditions</a>
      </p>
    </div>
  </div>
</div>

    </div>
  )
}

export default UpadteContact
import React from 'react'
import { FaHome,FaPhone,FaMailBulk } from 'react-icons/fa'
import "../routes/allroutestyles.css";
const contact = () => {
  return (
    <div className='footer'>
    <div className='footer-container'>
    <div className='left-footer'>
    <ul className='contact-modify'>
          <li>
            <h4>
              Contact Details
            </h4>
          </li>
          <li>
          <h4>
            <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            Ghaziabad
            </h4>
          
          </li>
          <li>
          <h4>
          <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
          8395815144</h4>
          </li>
      
          <li>
          <h4>
          <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
          aditya.apsingh@gmail.com
          </h4>
          </li>
        </ul>
    </div>
    </div>
    </div>
  )
}

export default contact
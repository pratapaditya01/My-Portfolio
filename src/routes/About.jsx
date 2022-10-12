import React from 'react';
import {FaInstagram,FaFacebook,FaLinkedin} from "react-icons/fa";
import { Link } from 'react-router-dom';
import "../routes/allroutestyles.css";

const about = () => {
  return (
    
    <div className='footer'>
    <div className='footer-container'>
    <div className='right-footer'>

    <ul className='under'>
    <li><h4>Connect With Us</h4></li>
    <li>
    <Link to="/instagram"><FaInstagram size={20} style={{color:"#fff",marginRight:"1rem"}}/></Link>
    <Link to="/facebook"><FaFacebook size={20} style={{color:"#fff",marginRight:"1rem"}}/></Link>
    <Link to="/linkedin"><FaLinkedin size={20} style={{color:"#fff",marginRight:"1rem"}}/></Link>
    </li>
    </ul>

</div>
</div>
</div>
  )
}

export default about
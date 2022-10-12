import React from 'react'
import "./FooterStyles.css";
import { FaHome,FaPhone,FaMailBulk, FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';
import {Link} from "react-router-dom";
const Footer = () => {
  return (
    <div className='footer'>
      
      <div className='footer-container'>
        <div className='left-footer'>
        <ul>
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
        <div className='right-footer'>

                <ul>
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

export default Footer;
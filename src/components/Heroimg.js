import React from 'react'
import HeroImgStyles  from "./Heroimgstyles.css";
import IntroImg from "../assets/img1.jpg";
import AdiImg1 from "../assets/adi1.jpg";
import {Link} from "react-router-dom";


const Heroimg = () => {
  return (
    <div className="hero">
    <div className="mask">
        <img className="into-img" 
        src={IntroImg}/>
        
    </div>
    <div className='content'>
    <img className="main-img" 
        src={AdiImg1}/>
    
      <p>Hi, I'm Aditya Pratap Singh</p>
      <h1>React Developer.</h1>
      <div className='btn-class'>
      <Link to="/project" className="btn">Projects</Link>
      
      <Link to="/contact" className="btn-light">Contact</Link>
    </div>
    </div>
   

    </div>
  )
}

export default Heroimg
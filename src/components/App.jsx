import React from "react";
// import Header from "./Header";
import "../routes/index.css";
// import Footer from "./Footer";
import Home from "../routes/Home";
import Contact from "../routes/Contact"
import About from "../routes/About"
import Project from "../routes/Project"
import {Routes,Route} from "react-router-dom"

function App() {


  return (
    <div>
    <Routes>
     <Route path="/"  element= {<Home />} />
     <Route path="/contact"  element= {<Contact />} />
     <Route path="/about"  element= {<About />} />
     <Route path="/project"  element= {<Project />} />
     {/* <Route path="/footer"  element= {<Footer />} /> */}
      </Routes>
    </div>
  );
}

export default App;

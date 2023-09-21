import React from "react";
import {Routes, Route} from 'react-router-dom';
import Aboutme from "./components/Aboutme";
import Nav from "./components/Navbar";
import Projects from "./components/Projects";
import Home from "./components/Home";
import Contact from "./components/Contact";


function App() {
  return (
    <>
          <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/aboutme' element={<Aboutme />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          </>
  );
}

export default App;

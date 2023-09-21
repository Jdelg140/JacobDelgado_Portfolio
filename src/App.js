import React from "react";
import Aboutme from "./components/Aboutme";
import Nav from "./components/Navbar";
import Projects from "./components/Projects";
import Home from "./components/Home";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <Aboutme />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

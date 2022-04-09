import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from './components/Nav';
import About from "./components/About";
import Gallery from "./components/Gallery"
//import Footer from "./components/Footer";
//import Project from "./components/Project";

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Gallery></Gallery>
        <About></About>
      </main>
       
    </div>
  );
}

export default App;

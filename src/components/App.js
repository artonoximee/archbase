import React from "react";

import './App.css';

import Navbar from "./Navbar";
import Register from "./auth/Register";

function App() {
  return (
    <div id="page" className="container-fluid bg-dark text-light">
      <div className="container">
        
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <Navbar />
            <Register />
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;

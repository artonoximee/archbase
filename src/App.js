import React, {useState} from "react";
import {Outlet} from "react-router-dom";

import './App.css';

import Navbar from "./components/Navbar";

function App() {
  const [user, setUser] = useState()
  return (
    <div id="page" className="container-fluid bg-dark text-light">
      <div className="container">
        
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <Navbar />
            <Outlet />
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;

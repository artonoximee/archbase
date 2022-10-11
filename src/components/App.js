import React from "react";

import './App.css';

import Navbar from "./Navbar";
import SignUp from "./auth/SignUp";
import { AuthProvider } from "../contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div id="page" className="container-fluid bg-dark text-light">
        <div className="container">
          
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <Navbar />
              <SignUp />
            </div>
          </div>

        </div>
      </div>
    </AuthProvider>
  );
}

export default App;

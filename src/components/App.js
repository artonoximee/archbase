import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';

import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import SignUp from "./auth/SignUp";
import LogIn from "./auth/LogIn";
import { AuthProvider } from "../contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
      <div id="page" className="container-fluid bg-dark text-light">
        <div className="container">
          
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <Navbar />
              
                <Routes>
                  <Route exact path="/" element={ <Dashboard /> } />
                  <Route path="/signup" element={ <SignUp /> } />
                  <Route path="/login" element={ <LogIn /> } />
                </Routes>
              
            </div>
          </div>

        </div>
      </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import './App.css';

import Navbar from "./Navbar";
import Home from "./Home";
import ErrorPage from "./ErrorPage";
import Dashboard from "./Dashboard";
import SignUp from "./auth/SignUp";
import LogIn from "./auth/LogIn";
import ForgotPassword from "./auth/ForgotPassword";
import UpdateProfile from "./auth/UpdateProfile";
import Project from "./projects/Project";
import ProjectDocuments from "./projects/ProjectDocuments";
import ProjectClients from "./projects/ProjectClients";
import ProjectSettings from "./projects/ProjectSettings";

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
                  <Route exact path="/" element={ <Home /> } />
                  <Route path="dashboard" element={ <PrivateRoute><Dashboard /></PrivateRoute> } />
                  <Route path="update-profile" element={ <PrivateRoute><UpdateProfile /></PrivateRoute> } />
                  <Route path="/signup" element={ <SignUp /> } />
                  <Route path="/login" element={ <LogIn /> } />
                  <Route path="/forgot-password" element={ <ForgotPassword /> } />

                  <Route path="/project/:projectId" element={ <PrivateRoute><Project /></PrivateRoute> }>
                    <Route path="documents" element={<ProjectDocuments />} />
                    <Route path="clients" element={<ProjectClients />} />
                    <Route path="settings" element={<ProjectSettings />} />
                  </Route>
                  <Route path="*" element={<ErrorPage />} />
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

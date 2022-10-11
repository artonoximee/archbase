import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Navbar() {
  const [error, setError] = useState("");
  const { currentUser, logOut } = useAuth();
  const navigate = useNavigate();

  async function handleLogOut() {
    setError("")
    try {
      await logOut();
      navigate("/login");
    } catch {
      setError("Échec de la déconnexion");
    }
  }

  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand"><i className="fa-solid fa-server text-primary"></i> Archbase</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">Accueil</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">Tarifs</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">À Propos</Link>
            </li>
          </ul>
          { 
            !currentUser && 
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="signup" className="nav-link">Inscription</Link>
              </li>
              <li className="nav-item">
                <Link to="login" className="nav-link">Connexion</Link>
              </li>
            </ul>
          }
          { 
            currentUser && 
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/update-profile" className="nav-link">{ currentUser.email }</Link>
              </li>
              <li className="nav-item">
                <Link onClick={handleLogOut} className="nav-link"><i className="fa-solid fa-right-from-bracket text-primary"></i></Link>
              </li>
            </ul>
          }
        </div>
      </div>
    </nav>
  )
}
export default Navbar;
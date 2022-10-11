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
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {
                  currentUser ? <i className="fa-solid fa-user"></i> : <i className="fa-regular fa-user"></i>
                }
              </Link>
              <ul className="dropdown-menu dropdown-menu-dark">
                {
                  !currentUser &&
                  <>
                  <li><Link to="/signup" className="dropdown-item" href="#"><i className="fa-solid fa-user-plus"></i> Inscription</Link></li>
                  <li><Link to="/login" className="dropdown-item" href="#"><i className="fa-solid fa-right-to-bracket"></i> Connexion</Link></li>
                  </>
                }
                {
                  currentUser &&
                  <>
                  <li><Link to="/dashboard" className="dropdown-item">Dashboard</Link></li>
                  <li><Link to="/update-profile" className="dropdown-item">Profil</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link onClick={handleLogOut} className="dropdown-item">Déconnexion</Link></li>
                  </>
                }
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar;
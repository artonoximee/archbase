import React, {useState} from "react";
import {onAuthStateChanged, signOut} from "firebase/auth";
import {auth} from "../firebase-config";
import {Link} from "react-router-dom";

function Navbar() {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  })

  async function logOut() {
    await signOut(auth);
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
            {
              !user &&
              <>
                <li className="nav-item">
                  <Link to="register" className="nav-link">Inscription</Link>
                </li>
                <li className="nav-item">
                  <Link to="login" className="nav-link">Connexion</Link>
                </li>
              </>
            }
            { 
              user && 
              <>
                
                <span className="navbar-text">{user.email}</span>
                
                <li className="nav-item">
                  <Link onClick={logOut} className="nav-link"><i className="fa-solid fa-right-from-bracket"></i></Link>
                </li>
              </>
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar;
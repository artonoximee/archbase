import React, {useState} from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <a href="/" className="navbar-brand"><i className="fa-solid fa-server text-primary"></i> Archbase</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a href="/" className="nav-link">Accueil</a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">Tarifs</a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">À Propos</a>
            </li>
          </ul>
          {/* <ul className="navbar-nav mb-2 mb-lg-0">
            {
              !user &&
              <>
                <li className="nav-item">
                  <a to="register" className="nav-link">Inscription</a>
                </li>
                <li className="nav-item">
                  <a to="login" className="nav-link">Connexion</a>
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
          </ul> */}
        </div>
      </div>
    </nav>
  )
}
export default Navbar;
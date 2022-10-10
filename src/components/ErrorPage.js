import React from "react";
import {Link} from "react-router-dom";

import Navbar from "./Navbar";

function ErrorPage() {
  return(
    <div id="page" className="container-fluid bg-dark text-light">
      <div className="container">
      <Navbar />
        <div className="row mt-5 justify-content-center top-margin">
          <div className="col-lg-8 col-md-12 p-5 text-center">
            <h1><i class="fa-solid fa-triangle-exclamation text-secondary"></i></h1>
            <h2>Oops, la page que vous recherchez n'existe pas</h2>
            <Link to="/" className="btn btn-outline-primary mt-5">Revenir à l'accueil ?</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage;
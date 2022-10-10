import React from "react";

function SignUp() {
  return (
    <div className="row justify-content-center top-margin">
        <div className="col-lg-6 col-md-12">

          <input 
            type="text"
            className={`form-control form-control-lg mt-3 bg-dark border-secondary text-light`}
            placeholder="Nom et prénom"
          />

          <input 
            type="email"
            className={`form-control form-control-lg mt-3 bg-dark border-secondary text-light`}
            placeholder="Adresse email"
          />

          <input 
            type="password"
            className={`form-control form-control-lg mt-3 bg-dark border-secondary text-light`}
            placeholder="Mot de passe"
          />

          <div className="d-grid gap-2">
            <button className={`btn btn-lg mt-5 btn-outline-primary`} onClick={null} type="submit">Inscription</button>
          </div>

          <div className=" bottom-margin"></div>
        </div>
      </div>
  )
}
export default SignUp;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../../contexts/AuthContext";

function ForgotPassword() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { logIn } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function submitLogIn(data) {
    try {
      setError("");
      setLoading(true);
      await logIn(data.email, data.password);
      navigate("/");
    } catch (err) {
      setError("Échec de la connexion");
    }
    setLoading(false);
  }

  return (
    <div className="row justify-content-center top-margin">
        <div className="col-lg-6 col-md-12">

          <h3>Réinitialisation du mot de passe</h3>

          <label htmlFor="email" className="form-label mt-5"><i className="fa-solid fa-envelope text-primary"></i> Email</label>
          <input 
            type="email"
            id="email"
            className={ `form-control form-control-lg bg-dark border-secondary text-light ${ errors.email && "is-invalid border-danger" }` }
            placeholder="Adresse email"
            { ...register("email", { required: true, pattern: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i }) }
          />
          { errors.email && <div className="form-text text-danger">Merci de renseigner votre adresse email pour réinitialiser votre mot de passe</div> }
        
          <div className="d-grid gap-2">
            <button className={ `btn btn-lg mt-5 btn-outline-primary` } onClick={ handleSubmit(submitLogIn) } disabled={ loading } type="submit">Réinitialiser le mot de passe</button>
          </div>

          <div className="d-grid gap-2">
            <Link to="/login" className="text-center text-secondary mt-3">Connexion</Link>
          </div>

          { error && <div className="alert alert-danger mt-3">{ error }</div> }

          <div className=" bottom-margin"></div>
        </div>
      </div>
  )
}
export default ForgotPassword;
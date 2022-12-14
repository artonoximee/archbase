import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../../contexts/AuthContext";

function SignIn() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { logIn } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function submitLogIn(data) {
    try {
      setError("");
      setLoading(true);
      await logIn(data.email, data.password);
      navigate("/dashboard");
    } catch (err) {
      setError("Échec de la connexion");
    }
    setLoading(false);
  }

  return (
    <div className="row justify-content-center top-margin">
        <div className="col-lg-6 col-md-12">

          <h3>Connexion</h3>

          <label htmlFor="email" className="form-label mt-5"><i className="fa-solid fa-envelope text-primary"></i> Email</label>
          <input 
            type="email"
            id="email"
            className={ `form-control form-control-lg bg-dark border-secondary text-light ${ errors.email && "is-invalid border-danger" }` }
            placeholder="Adresse email"
            { ...register("email", { required: true, pattern: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i }) }
          />
          { errors.email && <div className="form-text text-danger">Merci de renseigner votre adresse email pour vous connecter</div> }

          <label htmlFor="password" className="form-label mt-3"><i className="fa-sharp fa-solid fa-key text-primary"></i> Mot de passe</label>
          <input 
            type="password"
            id="password"
            className={ `form-control form-control-lg bg-dark border-secondary text-light ${ errors.password && "is-invalid border-danger" }` }
            placeholder="Mot de passe"
            { ...register("password", { required: true, minLength: 6 }) }
          />
          <div className={ `form-text ${ errors.password && "text-danger" }` }>
            Votre mot de passe doit au minimum contenir 6 caractères.
          </div>
        
          <div className="d-grid gap-2">
            <button className={ `btn btn-lg mt-5 btn-outline-primary` } onClick={ handleSubmit(submitLogIn) } disabled={ loading } type="submit">Connexion</button>
          </div>

          <div className="d-grid gap-2">
            <Link to="/forgot-password" className="text-center text-secondary mt-3">Mot de passe oublié ?</Link>
          </div>

          {/* <div className="d-grid gap-2">
            <Link to="/signup" className="text-center text-secondary mt-3">Pas encore de compte ? Créez-en un ici</Link>
          </div> */}

          { error && <div className="alert alert-danger mt-3">{ error }</div> }

          <div className=" bottom-margin"></div>
        </div>
      </div>
  )
}
export default SignIn;
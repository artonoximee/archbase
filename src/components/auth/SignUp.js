import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../contexts/AuthContext";

function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signUp, currentUser } = useAuth();
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  async function submitSignUp(data) {
    if (data.password !== data.passwordConfirm) {
      return setError("Les mots de passes ne correspondent pas, veuillez réessayer.");
    }
    try {
      setError("");
      setLoading(true);
      await signUp(data.email, data.password);
    } catch (err) {
      setError("Échec de la création du compte");
    }
    setLoading(false);
  }

  return (
    <div className="row justify-content-center top-margin">
        <div className="col-lg-6 col-md-12">

          <h3>Inscription</h3>

          { currentUser && currentUser.email }
          
          <label htmlFor="email" className="form-label mt-5"><i className="fa-solid fa-envelope text-primary"></i> Email</label>
          <input 
            type="email"
            id="email"
            className={ `form-control form-control-lg bg-dark border-secondary text-light ${errors.email && "is-invalid border-danger"}` }
            placeholder="Adresse email"
            { ...register("email", { required: true, pattern: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i }) }
          />
          { errors.email && <div className="form-text text-danger">Merci de renseigner une adresse email valide pour vous inscrire</div> }

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
          <label htmlFor="passwordConfirm" className="form-label mt-3"><i className="fa-sharp fa-solid fa-key text-primary"></i> Confirmation du mot de passe</label>
          <input 
            type="password"
            id="passwordConfirm"
            className={ `form-control form-control-lg bg-dark border-secondary text-light ${ errors.password && "is-invalid border-danger" }` }
            placeholder="Confirmation mot de passe"
            {...register("passwordConfirm", { required: true, minLength: 6 })}
          />

          <div className="d-grid gap-2">
            <button className={ `btn btn-lg mt-5 btn-outline-primary` } onClick={ handleSubmit(submitSignUp) } disabled={ loading } type="submit">Inscription</button>
          </div>

          <div className="d-grid gap-2">
            <a href="#" className="text-center text-secondary mt-3">Déjà inscrit ? Connectez-vous ici</a>
          </div>

          { error && <div className="alert alert-danger mt-3">{ error }</div> }

          <div className=" bottom-margin"></div>
        </div>
      </div>
  )
}
export default SignUp;
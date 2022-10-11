import React from "react";
import {useForm} from "react-hook-form";

function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <div className="row justify-content-center top-margin">
        <div className="col-lg-6 col-md-12">

          <h3>Inscription</h3>
          
          <label htmlFor="email" className="form-label mt-5"><i className="fa-solid fa-envelope text-primary"></i> Email</label>
          <input 
            type="email"
            id="email"
            className={`form-control form-control-lg bg-dark border-secondary text-light ${errors.email && "is-invalid border-danger"}`}
            placeholder="Adresse email"
            {...register("email", { required: true, pattern: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i })}
          />
          {errors.email && <div className="form-text text-danger">Merci de renseigner une adresse email valide pour vous inscrire</div>}

          <label htmlFor="password" className="form-label mt-3"><i className="fa-sharp fa-solid fa-key text-primary"></i> Mot de passe</label>
          <input 
            type="password"
            id="password"
            className={`form-control form-control-lg bg-dark border-secondary text-light ${errors.password && "is-invalid border-danger"}`}
            placeholder="Mot de passe"
            {...register("password", { required: true, minLength: 6 })}
          />
          <div class={`form-text ${errors.password && "text-danger"}`}>
            Votre mot de passe doit au minimum contenir 6 caractères.
          </div>

          <div className="d-grid gap-2">
            <button className={`btn btn-lg mt-5 btn-outline-primary`} onClick={handleSubmit()} type="submit">Inscription</button>
          </div>

          <div className="d-grid gap-2">
            <a href="#" className="text-center text-secondary mt-3">Déjà inscrit ? Connectez-vous ici</a>
          </div>

          <div className=" bottom-margin"></div>
        </div>
      </div>
  )
}
export default SignUp;
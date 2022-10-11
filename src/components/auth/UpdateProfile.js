import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../../contexts/AuthContext";

function UpdateProfile() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { currentUser, updateEmail, updatePassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function submitSignUp(data) {
    if (data.password !== data.passwordConfirm) {
      return setError("Les mots de passes ne correspondent pas, veuillez réessayer.");
    }

    const promises = []
    setError("");
    setLoading(true);
    if (data.email !== currentUser.email) {
      promises.push(updateEmail(data.email))
    }
    if (data.password) {
      promises.push(updatePassword(data.password))
    }

    Promise.all(promises).then(() => {
      navigate("/")
    }).catch(() => {
      setError("Échec de la mise à jour")
    }).finally(() => {
      setLoading(false);
    })
  }

  return (
    <div className="row justify-content-center top-margin">
        <div className="col-lg-6 col-md-12">

          <h3>Mettre à jour le profil</h3>

          <label htmlFor="email" className="form-label mt-5"><i className="fa-solid fa-envelope text-primary"></i> Email</label>
          <input 
            type="email"
            id="email"
            className={ `form-control form-control-lg bg-dark border-secondary text-light ${errors.email && "is-invalid border-danger"}` }
            placeholder="Adresse email"
            defaultValue={ currentUser.email }
            { ...register("email", { required: true, pattern: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i }) }
          />
          { errors.email && <div className="form-text text-danger">Merci de renseigner une adresse email valide pour vous inscrire</div> }

          <label htmlFor="password" className="form-label mt-3"><i className="fa-sharp fa-solid fa-key text-primary"></i>Nouveau mot de passe</label>
          <input 
            type="password"
            id="password"
            className={ `form-control form-control-lg bg-dark border-secondary text-light ${ errors.password && "is-invalid border-danger" }` }
            placeholder="Nouveau mot de passe"
            { ...register("password", { minLength: 6 }) }
          />
          <div className={ `form-text` }>
            Laisser vide si vous souhaitez garder le même mot de passe
          </div>
          <label htmlFor="passwordConfirm" className="form-label mt-3"><i className="fa-sharp fa-solid fa-key text-primary"></i> Confirmation du nouveau mot de passe</label>
          <input 
            type="password"
            id="passwordConfirm"
            className={ `form-control form-control-lg bg-dark border-secondary text-light ${ errors.password && "is-invalid border-danger" }` }
            placeholder="Confirmation du nouveau mot de passe"
            {...register("passwordConfirm", { minLength: 6 })}
          />

          <div className="d-grid gap-2">
            <button className={ `btn btn-lg mt-5 btn-outline-primary` } onClick={ handleSubmit(submitSignUp) } disabled={ loading } type="submit">Mettre à jour</button>
          </div>

          { error && <div className="alert alert-danger mt-3">{ error }</div> }

          <div className=" bottom-margin"></div>
        </div>
      </div>
  )
}
export default UpdateProfile;
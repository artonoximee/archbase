import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from '../../firebase-config'

function SignIn() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [errorLogin, setErrorLogin] = useState(false);

  async function login(data) {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      setErrorLogin(false)
      reset({
        email: '',
        password: ''
      })
    } catch(err) {
      setErrorLogin(true)
    }
  }

  return (
    <div className="row justify-content-center top-margin">
        <div className="col-lg-6 col-md-12">

          <input 
            type="email"
            className={`form-control form-control-lg mt-3 bg-dark border-secondary text-light ${errors.email && "is-invalid border-danger"}`}
            placeholder="Adresse email"
            {...register("email", { required: true, pattern: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i })}
          />
          {errors.email && <p className="text-danger mt-2">Merci de renseigner votre adresse email pour vous connecter</p>}

          <input 
            type="password"
            className={`form-control form-control-lg mt-3 bg-dark border-secondary text-light ${errors.password && "is-invalid border-danger"}`}
            placeholder="Mot de passe"
            {...register("password", { required: true, minLength: 6 })}
          />
          {errors.password && <p className="text-danger mt-2">Merci de renseigner votre mot de passe pour vous connecter</p>}
        
          <div className="d-grid gap-2">
            <button className={`btn btn-lg mt-5 btn-outline-primary`} onClick={handleSubmit(login)} type="submit">Connexion</button>
          </div>
          {errorLogin && <p className="text-danger text-center mt-2">Adresse email ou mot de passe invalide</p>}

          <div className=" bottom-margin"></div>
        </div>
      </div>
  )
}
export default SignIn;
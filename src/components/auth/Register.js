import React from "react";
import {useForm} from "react-hook-form";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from '../../firebase-config'

function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  // const [errorLogin, setErrorLogin] = useState(false);

  async function signUp(data) {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      window.location.reload();
    } catch(err) {
      console.log(err.message)
    }
  }

  return (
    <div className="row justify-content-center top-margin">
        <div className="col-lg-6 col-md-12">

          <input 
            type="text"
            className={`form-control form-control-lg mt-3 bg-dark border-secondary text-light ${errors.name && "is-invalid border-danger"}`}
            placeholder="Nom et prénom"
            {...register("name", { required: true })}
          />
          {errors.email && <p className="text-danger mt-2">Merci de renseigner votre nom pour vous inscrire</p>}

          <input 
            type="email"
            className={`form-control form-control-lg mt-3 bg-dark border-secondary text-light ${errors.email && "is-invalid border-danger"}`}
            placeholder="Adresse email"
            {...register("email", { required: true, pattern: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i })}
          />
          {errors.email && <p className="text-danger mt-2">Merci de renseigner une adresse email valide pour vous inscrire</p>}

          <input 
            type="password"
            className={`form-control form-control-lg mt-3 bg-dark border-secondary text-light ${errors.password && "is-invalid border-danger"}`}
            placeholder="Mot de passe"
            {...register("password", { required: true, minLength: 6 })}
          />
          {errors.password && <p className="text-danger mt-2">Merci de renseigner un mot de passe de 6 caractères minimum pour vous inscrire</p>}

          <div className="d-grid gap-2">
            <button className={`btn btn-lg mt-5 btn-outline-primary`} onClick={handleSubmit(signUp)} type="submit">Inscription</button>
          </div>

          <div className=" bottom-margin"></div>
        </div>
      </div>
  )
}
export default SignUp;
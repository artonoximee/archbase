import React, {useState} from "react";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from '../../firebase-config'

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
    } catch(err) {
      console.log(err.message)
    }
  }

  return (
    <div className="row justify-content-center top-margin">
        <div className="col-lg-6 col-md-12">

          <input 
            type="email"
            className={`form-control form-control-lg mt-3 bg-dark border-secondary text-light`}
            placeholder="Adresse email"
            onChange={e => setEmail(e.target.value)}
          />

          <input 
            type="password"
            className={`form-control form-control-lg mt-3 bg-dark border-secondary text-light`}
            placeholder="Mot de passe"
            onChange={e => setPassword(e.target.value)}
          />

          <div className="d-grid gap-2">
            <button className={`btn btn-lg mt-5 btn-outline-primary`} onClick={login} type="submit">Connexion</button>
          </div>

          <div className=" bottom-margin"></div>
        </div>
      </div>
  )
}
export default SignIn;
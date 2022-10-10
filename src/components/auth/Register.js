import React, {useState} from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import {auth} from '../../firebase-config'

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })

  async function register() {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch(err) {
      console.log(err.message);
    }
    
  }

  return (
    <div className="row justify-content-center top-margin">
        <div className="col-lg-6 col-md-12">

          <input 
            type="text"
            className={`form-control form-control-lg mt-3 bg-dark border-secondary text-light`}
            placeholder="Nom et prénom"
            onChange={e => setName(e.target.value)}
          />

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
            <button className={`btn btn-lg mt-5 btn-outline-primary`} onClick={register} type="submit">Inscription</button>
          </div>

          <div className=" bottom-margin"></div>
        </div>
      </div>
  )
}
export default SignUp;
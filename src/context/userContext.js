import React, {useState} from "react";
import {onAuthStateChanged} from "firebase/auth";
import { auth } from "../firebase-config";

const UserContext = React.createContext()

function UserContextProvider(props) {
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  
  return (
    <UserContext.Provider value={user}>
        {props.children}
    </UserContext.Provider>
  )
}

export {UserContextProvider, UserContext}
import React, {useState} from "react"
const UserContext = React.createContext()

function UserContextProvider(props) {
    const [user, setUser] = useState()
    
    function setCurrentUser(u) {
        setUser(u)
    }
    
    return (
        <UserContext.Provider value={{user, setCurrentUser}}>
            {props.children}
        </UserContext.Provider>
    )
}

export {UserContextProvider, UserContext}
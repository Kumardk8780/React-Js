import React, { useState } from "react";
import UserContext from './UserContext';

const UserContextProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [count,setCount] = useState(0)
    return(
        <UserContext.Provider value={{user,setUser , count , setCount}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;

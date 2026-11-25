import { createContext, useState } from "react";

export const UserContext = createContext();  // Create a Context
export const UserProvider = ({ children }) => { // Create a Provider
    const [user, setUser] = useState({ name: 'Guest' });
    const setLoggedinUser = (name) => {
        setUser({ name })
    }
    return <UserContext.Provider value={{ user, setLoggedinUser }}>
        {children}
    </UserContext.Provider>
}
import { createContext, useContext, useState } from "react";

//1: create a context
export const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)
//2: put some state in the context
//3: share the created context with other components




export default function AuthProvider({children}) {

    const [number, setNumber] = useState(10)

    setInterval(() => setNumber(number +1), 10000)

    return(
        <AuthContext.Provider value={{number}}>
            {children}
        </AuthContext.Provider>

    )
}
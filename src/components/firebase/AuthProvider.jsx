import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "./firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // create id / signUp
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

        // login id 
        const signIn = (email, password) => {
            setLoading(true)
            return signInWithEmailAndPassword(auth, email, password)
        }
    
        // logout 
        const logOut = () => {
            setLoading(true)
            return signOut(auth)
        }
    
        // check if the user is there or not (if user is there then loading is false)
        useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                setUser(user)
                setLoading(false)
            });
            return () => {
                unsubscribe()
            }
        }, [])
    

    const authInfo = {
        createUser,
        signIn,
        logOut,
        user,
        setLoading,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
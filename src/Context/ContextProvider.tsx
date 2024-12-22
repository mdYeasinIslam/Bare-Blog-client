import { useEffect, useState } from "react";
import { ChildrenType, ContextType } from "../Types/types";
import { AuthContext, googleProvider } from "./Context";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, User } from "firebase/auth";
import auth from "../Firebase/firebase.init";

const ContextProvider = ({ children }: ChildrenType) => {
    const [user, setUser] = useState<User>({} as User)
    const [loading,setLoading] = useState(true)
    const [darkMode,setDarkMode] = useState(false)
    //sign Up
    const signUpAuth = (email: string, password: string) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInAuth = (email: string, password: string) => {
        return signInWithEmailAndPassword(auth,email,password)
    }
    //google sing in
    const googleAuth = () => {
        return signInWithPopup(auth,googleProvider)
    }
    //sign out
    const signOutAuth = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, currentUser => {
            const userInfo = currentUser as User
            setUser(userInfo)
            setLoading(false)
        })
        return ()=>subscribe()
    }, [])
    const info: ContextType = { user, loading, setUser, signInAuth, signUpAuth, signOutAuth, googleAuth, darkMode, setDarkMode }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;
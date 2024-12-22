import { useEffect, useState } from "react";
import { ChildrenType, ContextType } from "../Types/types";
import { AuthContext } from "./Context";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from "firebase/auth";
import auth from "../Firebase/firebase.init";

const ContextProvider = ({ children }: ChildrenType) => {
    const [user, setUser] = useState<User>({} as User)
    
    //sign Up
    const signUpAuth = (email: string, password: string) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
 const signInAuth = (email: string, password: string) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    //sign out
    const signOutAuth = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            const userInfo = currentUser as User
            setUser(userInfo)
        })
        return ()=>subscribe()
    },[])
    const info:ContextType ={user,setUser,signInAuth,signUpAuth,signOutAuth}
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;
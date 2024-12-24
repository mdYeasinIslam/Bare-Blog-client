import { useEffect, useState } from "react";
import { ChildrenType, ContextType } from "../Types/types";
import { AuthContext, googleProvider } from "./Context";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, User } from "firebase/auth";
import auth from "../Firebase/firebase.init";
import axios from "axios";
import toast from "react-hot-toast";

const ContextProvider = ({ children }: ChildrenType) => {
    const [user, setUser] = useState<User>({} as User)
    const [loading,setLoading] = useState(true)
    const [darkMode, setDarkMode] = useState(false)
    const [disable,setDisable] = useState(false)
    //sign Up
    const signUpAuth = (email: string, password: string) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInAuth = (email: string, password: string) => {
        return signInWithEmailAndPassword(auth,email,password)
    }
    //update profile
    const updateAuth = (profile:object) => {
        return updateProfile(auth.currentUser as User,profile)
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
        const subscribe = onAuthStateChanged(auth, (currentUser) => {
            const userInfo = currentUser as User
            setUser(userInfo)
            if (currentUser?.email) {
                axios.post(`${import.meta.env.VITE_server}/jwt`,{ email: currentUser.email }, { withCredentials: true })
                    .then(response => {
                        console.log(response)
                        setLoading(false)
                    }).catch(e => {
                        toast.error('token is not created')
                        console.log(e)
                    })
            }
            else {
               
                 axios.post(`${import.meta.env.VITE_server}/logOut`, {}, { withCredentials: true })
                    .then(response => {
                      console.log(response)
                setLoading(false)
                    }).catch(e => {
                    console.log(e)
                })
              
            }
        })
        return ()=>subscribe()
    }, [])

    const info: ContextType = { user, loading, setUser, signInAuth, signUpAuth, signOutAuth, googleAuth, updateAuth, darkMode, setDarkMode, disable, setDisable }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;
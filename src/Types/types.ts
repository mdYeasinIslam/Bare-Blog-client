import { User, UserCredential } from "firebase/auth"

export type ChildrenType = {
    children:JSX.Element
}
export type ContextType = {
    user: User 
    loading:boolean
    setUser: React.Dispatch<React.SetStateAction<User>>
    signUpAuth: (email: string, password: string) => Promise<UserCredential>
    signInAuth: (email: string, password: string) => Promise<UserCredential>
    signOutAuth: () => Promise<void>
    googleAuth: () => Promise<UserCredential>
}
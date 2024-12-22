import { createContext } from "react";
import { ContextType } from "../Types/types";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext<ContextType | null>(null)
export const googleProvider= new GoogleAuthProvider()
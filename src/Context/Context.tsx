import { createContext } from "react";
import { ContextType } from "../Types/types";

export const AuthContext = createContext<ContextType | null>(null)

import { createContext, useState, ReactNode } from "react";
import { destroyCookie, setCookie  } from 'nookies'

import { api } from "../services/apiClient";

import  Router from "next/router";
interface AuthContextData {
    user: UserProps
    isAuthenticated: boolean
    signIn: (credentials: SignInProps)=>Promise<void>
}

interface UserProps {
    id: string
    name: string
    email: string
    endereco: string | null
    subscriptions?: SubscriptionProps | null
}

interface SubscriptionProps{
    id: string
    status: string
}

type AuthProviderProps = {
    children : ReactNode

}

interface SignInProps {
    email: string
    password: string
}


export const AuthContext = createContext({}as  AuthContextData)

export function signOut(){
    try{

        destroyCookie(null, '@barberWeb', { path: "/" })
        Router.push("/login")

    }catch(err){
        console.log(err)
    }
}

export function AuthProvider({children}: AuthProviderProps){
    const [user, setUser] = useState<UserProps>()
    const isAuthenticated = !!user

    async function signIn ({email, password}: SignInProps){
       try{
        const response = await api.post("/session", {
            email, 
            password
        })

        const { id, name, endereco, token, subscriptions } = response.data

        setCookie(null, '@barberWeb', token, {
            maxAge: 60 * 60 * 24 * 30,
            path: "/"
        });

        setUser({
            email,
            endereco,
            id,
            name,
            subscriptions
        });

        api.defaults.headers.common['Authorization'] = `Bearer ${token}`

        Router.push("/dashboard")
        
       }catch(err){
        console.log("erro ao entrar",err)
       }
    }
    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn  }}>
            {children}
        </AuthContext.Provider>
    )
}
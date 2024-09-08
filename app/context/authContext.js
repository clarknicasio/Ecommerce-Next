
"use client";

import { auth, provider } from '@/app/config/firebase';
import { createContext, useContext, useState, useEffect } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup } from "firebase/auth";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState({
        logged: false,
        email:null,
        uid: null
    });

    const registerUser = async (values) => {
        //const userCredential = await createUserWithEmailAndPassword (auth, values.email, values.password);
        await createUserWithEmailAndPassword (auth, values.email, values.password);
        //console.log(userCredential)
    
        //const user = userCredential.user;
    
            //setUser({
            //    logged: true,
            //    email: user.email, user: user.uid
            //})
    }
    
    const loginUser = async (values) => {
        //const userCredential = await signInWithEmailAndPassword (auth, values.email, values.password);
        await signInWithEmailAndPassword (auth, values.email, values.password);
        //console.log(userCredential)
    
        //const user = userCredential.user;
    
            //setUser({
            //    logged: true,
            //    email: user.email, user: user.uid
            //})
    }
    
    const logout = async () => {    
        await signOut(auth);
    }

    const googleLogin = async () => {    
        await signInWithPopup(auth, provider);
    }


    useEffect(() => { 
        onAuthStateChanged(auth, (user) => { 
            //console.log(user);

            if (user) {
                setUser({
                    logged: true, 
                    email: user.email, 
                    uid: user.uid
                });
            } else {
                setUser({
                    logged: false, 
                    email: null, 
                    uid: null
                });                
            }
        
    }) }, []);

    return (
        <AuthContext.Provider value={{
            user,
            registerUser,
            loginUser,
            logout,
            googleLogin
        }}>
            {children} 
        </AuthContext.Provider>
    )

};




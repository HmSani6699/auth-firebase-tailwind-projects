import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config';


export const AuthContext = createContext(null);

const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoding] = useState(true)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const googleProvider = new GoogleAuthProvider;

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const githubProviter = new GithubAuthProvider();

    const githubLogin = () => {
        return signInWithPopup(auth, githubProviter)
    }

    const authInfo = {
        user,
        loading,
        createUser,
        googleLogin,
        githubLogin,
        logOut,
        signIn
    }



    useEffect(() => {
        const unSubscrib = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
            setLoding(false)

        });
        return () => {
            unSubscrib()
        }
    }, [])

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
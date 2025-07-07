import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({ email: "guest@gmail.com.com" })
    const [isOpen, setIsOpen] = useState(false)
    const [loading, setLoading] = useState(true);
    const [refech, setRefech] = useState(true);
    const provider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            const user = { email: "guest@gmail.com.com" }
            setUser(user)
            setLoading(false)
        })
        return unSubscribe
    }, [])
    const authInfo = {
        user,
        isOpen, setIsOpen,
        loading, setLoading,
        refech, setRefech,
        signInWithGoogle
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../../firebase.config';
import useAxiosPublic from '../Hooks/useAxiosPublic';
// import axios from 'axios';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const axiosPublic = useAxiosPublic();
    const [user, setUser] = useState(null);
    console.log(user);
    const [loading, setLoading] = useState(true);
    const createNewUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const userLogin = (email, password) => {
		setLoading(true)
		return signInWithEmailAndPassword(auth, email, password)
	}
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
        
    };

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
        .then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
    }

    useEffect(() => {
        const Unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log(currentUser)
            console.log("state captured", currentUser?.email);
            if (currentUser?.email){
                const user = {email: currentUser.email};
                axiosPublic.post('/jwt', user)
                .then(res =>{ 
                    if (res.data.token){
                        localStorage.setItem('access-token', res.data.token);
                    }
                })
                
            }
            else{
                localStorage.removeItem('access-token');
            }
            setLoading(false);
        });
        return () => {
            Unsubscribe();
        }
    },[]);

    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        userLogin,
        loading,
        updateUserProfile
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../../firebase.config';
// import axios from 'axios';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
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
            setLoading(false);
            // console.log(currentUser)
            // console.log("state captured", currentUser?.email);
            // if (currentUser?.email){
            //     const user = {email: currentUser.email};
            //     axios.post('https://b10a11-server-side-anamul-hoque37.vercel.app/jwt', user, {withCredentials: true})
            //     .then(res =>{ 
            //         console.log('logIn token', res.data)
            //         setLoading(false);
            //     })
            //     fetch('https://b10a11-server-side-anamul-hoque37.vercel.app/user', {
            //                 method: 'POST',
            //                 headers: {
            //                     'content-type': 'application/json'
            //                 },
            //                 body: JSON.stringify(user)
            //             })
            //                 .then(res => res.json())
            //                 .then(data => {
            //                     console.log(data);
            //                 })
            // }
            // else{
            //     axios.post('https://b10a11-server-side-anamul-hoque37.vercel.app/logout', {}, {
            //         withCredentials: true
            //     })
            //     .then(res => {
            //         console.log('logout', res.data)
            //         setLoading(false);
            //     })
            // }
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
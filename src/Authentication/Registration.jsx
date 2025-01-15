import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import auth from '../../firebase.config';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { AuthContext } from './AuthProvider';
import Swal from 'sweetalert2';
import { FcGoogle } from "react-icons/fc";

const Registration = () => {
    const { createNewUser, setUser } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const provider = new GoogleAuthProvider()
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
            setError({ ...error, password: "Password must be at least 6 characters long." });
            Swal.fire({
                title: 'Error',
                text: 'Cannot Login', error,
                icon: 'error',
                footer: 'Password must be at least 6 characters long.'
            });
            return
        }
        else if (!/[A-Z]/.test(password)) {
            setError({ ...error, password: "Password must contain at least one uppercase letter." });
            Swal.fire({
                title: 'Error',
                text: 'Cannot Login', error,
                icon: 'error',
                footer: 'Password must contain at least one uppercase letter.'
            });
            return
        }
        else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            setError({ ...error, password: "Password must contain at least one special character." });
            Swal.fire({
                title: 'Error',
                text: 'Cannot Login', error,
                icon: 'error',
                footer: 'Password must contain at least one special character.'
            });
            return
        }
        setError('')
        createNewUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user)
                navigate("/")
                Swal.fire({
                    title: 'success',
                    text: 'Successfully login',
                    icon: 'success',
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                Swal.fire({
                    title: 'Error',
                    text: 'cannot login error-02',
                    icon: 'error',
                    footer: `${errorCode, errorMessage}`
                });
            });
    };

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                navigate("/")
                Swal.fire({
                    title: 'success',
                    text: 'Successfully login',
                    icon: 'success',
                });
            })
            .catch(error => {
                Swal.fire({
                    title: 'Error',
                    text: 'Cannot Login', error,
                    icon: 'error',
                    footer: 'Please check your internet connection and try again.'
                });
            })
    }

    return (
        <div className='p-6'>
            <div className="card bg-white w-11/12 sm:w-10/12 md:w-3/4 lg:w-7/12 mx-auto shrink-0 shadow-2xl">
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name="name" type="text" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input name="photo" type="text" placeholder="Photo" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type={showPassword ? 'text' : 'password'} placeholder="password" className="input input-bordered" required />
                        <button onClick={() => setShowPassword(!showPassword)} className='btn btn-xs absolute right-4 top-12'>
                            {
                                showPassword ? <FaEyeSlash className='text-2xl'/> : <FaEye className='text-2xl'/>
                            }
                        </button>
                        {
                            error.password && (
                                <label className="label">
                                    {error.password}
                                </label>
                            )
                        }
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary text-xl font-semibold bg-gradient-to-l from-slate-700 via-fuchsia-700 to-slate-700">Registration Now</button>
                    </div>
                    <p className='text-lg font-bold'>Have an account ? <Link className="text-emerald-600 font-bold" to="/login">Login</Link> </p>
                </form>
                <div className='w-full p-8 mx-auto'>
                    <button onClick={handleGoogleSignIn} className='btn text-xl font-semibold text-white w-full bg-fuchsia-600 hover:bg-fuchsia-800'>Login With Google <FcGoogle className='text-3xl'/></button>
                </div>
            </div>

        </div>
    );
};

export default Registration;
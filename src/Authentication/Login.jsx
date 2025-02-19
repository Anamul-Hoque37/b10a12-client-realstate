import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import auth from '../../firebase.config'
import { AuthContext } from './AuthProvider';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import Swal from 'sweetalert2';
import SocialLogin from './SocialLogin';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const provider = new GoogleAuthProvider();
    const { userLogin} = useContext(AuthContext);
    const [error, setError] = useState({});
    const location = useLocation();
    const emailRef = useRef();
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email =form.email.value;
        const password =form.password.value;
        userLogin(email,password)
        .then(result=>{
            const user=result.user
            Swal.fire({
                title: 'success',
                text: 'Successfully login',
                icon: 'success',
            });
            navigate(location?.state ? location.state : "/")
        })
        .catch((err)=>{
            setError({...error, login: err.code});
            Swal.fire({
                title: 'Error',
                text: 'Cannot login', err,
                icon: 'error',
                footer: 'Please check your User and Password.'
            });
        })
    };


    return (
        <div className='p-6'>
            <div className="card bg-white w-11/12 sm:w-10/12 md:w-3/4 lg:w-7/12 mx-auto shrink-0 shadow-2xl">
                <form onSubmit={handleSubmit} className="card-body">
                    <h1 className="text-2xl text-black font-bold text-center">Login Your Account</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" ref={emailRef} type="email" placeholder="email" className="input input-bordered bg-slate-50" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type={showPassword ? 'text' : 'password'} placeholder="password" className="input input-bordered" required />
                        <button onClick={()=> setShowPassword(!showPassword)} className='btn btn-xs absolute right-4 top-12'>
                        {
                            showPassword ? <FaEyeSlash className='text-2xl'/> : <FaEye className='text-2xl'/>
                        }
                         </button>
                        {
                            error.login && <label className="label text-yellow-300 text-xs">
                            wrong password !!!
                        </label>
                        }
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary text-xl font-semibold bg-gradient-to-l from-slate-700 via-fuchsia-700 to-slate-700">Login</button>
                    </div>
                    <p className='text-lg font-bold'>Don't have an account ? <Link className="text-red-600 font-bold" to="/registration">Registration</Link> </p>
                </form>
                <div className='p-8 w-full mx-auto'>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;
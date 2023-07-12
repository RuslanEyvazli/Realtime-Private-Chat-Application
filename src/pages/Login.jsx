import React, { useState } from 'react'
import {  signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from 'react-router-dom';
import { auth } from '../firebase';
const Login = () => {

    const navigate = useNavigate();
    const [err, setErr] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate("/login")
        } catch (err) {
            setErr(true);
            
        }
    }

    return (
        <div className="formContainer">
            <div className="formWrapper" style={{ padding: "50px 40px 20px 90px" }}>
                <span className="logo">Chat With Ruslan</span>
                <span className="title">Login</span>
                <form action="" className="" onSubmit={handleSubmit}>
                    <input type="email" name="" id="" placeholder="Email" />
                    <input type="password" name="" id="" placeholder="Password" />
                    <button>Sing In</button>
                </form>
                 {err && <span> Something went wrong</span>}
                <p> You  don't have an account? <Link to="/register"> Register </Link></p>
            </div>
        </div>
    )
}

export default Login
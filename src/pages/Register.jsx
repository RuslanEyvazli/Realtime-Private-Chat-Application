import React from 'react'
import Add from '../img/addAvatar.svg'
const Register = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Chat With Ruslan</span>
                <span className="title">Register</span>
                <form action="" className="">
                    <input type="text" name="" id="" placeholder="Display Name" />
                    <input type="email" name="" id="" placeholder="Email" />
                    <input type="password" name="" id="" placeholder="Password" />
                    <input style={{ display: "none" }} type="file" name="" id="file" placeholder="File" />
                    <label htmlFor='file'>
                        <img src={Add} alt="" srcset="" />
                        <span>Add an avatar</span>
                    </label>
                    <button>Sing Up</button>
                </form>
                <p> You do have an account? Login</p>
            </div>
        </div>
    )
}

export default Register
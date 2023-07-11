import React from 'react'

const Login = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper" style={{ padding: "50px 40px 20px 90px" }}>
                <span className="logo">Chat With Ruslan</span>
                <span className="title">Login</span>
                <form action="" className="">
                    <input type="email" name="" id="" placeholder="Email" />
                    <input type="password" name="" id="" placeholder="Password" />
                    <button>Sing In</button>
                </form>
                <p> You  don't have an account? Register</p>
            </div>
        </div>
    )
}

export default Login
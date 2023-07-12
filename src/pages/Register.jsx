import React, { useState } from 'react'
import Add from '../img/addAvatar.svg'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [err, setErr] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];
        console.warn(file)

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            const storageRef = ref(storage, displayName);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                (err) => {
                    setErr(true);
                },
                () => {

                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await updateProfile(res.user, { displayName, photoURL: downloadURL });
                        await setDoc(doc(db, "users", res.user.uid), {
                            uid: res.user.uid,
                            displayName,
                            email,
                            photoURL: downloadURL
                        });
                        await setDoc(doc(db, "users", res.user.uid), {});
                        navigate("/")
                    });
                }
            );

        } catch (err) {
            setErr(true);
        }

    };
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Chat With Ruslan</span>
                <span className="title">Register</span>
                <form action="" className="" onSubmit={handleSubmit}>
                    <input type="text" name="" id="text" placeholder="Display Name" />
                    <input type="email" name="" id="email" placeholder="Email" />
                    <input type="password" name="" id="password" placeholder="Password" />
                    <input style={{ display: "none" }} type="file" name="" id="file" placeholder="File" />
                    <label htmlFor='file'>
                        <img src={Add} alt="" srcSet="" />
                        <span>Add an avatar</span>
                    </label>
                    <button type='submit'>Sing Up</button>
                    {err && <span> Something went wrong</span>}
                </form>
                <p> You do have an account? <Link to="/login">Login</Link></p>
            </div>
        </div>
    )
}

export default Register
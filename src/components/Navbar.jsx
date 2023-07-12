import React from 'react'
import Ruslan from '../img/42.jpg'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
const Navbar = () => {
  const {currentUser} = useContext(AuthContext);
  return (
    <div className='navbar'>
      <span className="logo">Chat With Ruslan</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>currentUser.DisplayName</span>
        <button onClick={()=>signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
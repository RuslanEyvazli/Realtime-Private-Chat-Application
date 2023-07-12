import React from 'react'
import Ruslan from '../img/42.jpg'
const Chats = () => {
  return (
    <div className="userChat">
      <img src={Ruslan} alt="" />
      <div className="userChatInfo">
        <span>Ruslan</span>
        <p>Hello</p>
      </div>
    </div>
  )
}

export default Chats
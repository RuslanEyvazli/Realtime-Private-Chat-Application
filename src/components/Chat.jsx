import React from 'react'
import Input from './Input'
import Menu from '../img/menu.png'
import Messages from './Messages'
const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Ruslan</span>
        <img src={Menu} alt="" />
      </div>
      <Messages />
      <Input/>
    </div>
  )
}

export default Chat
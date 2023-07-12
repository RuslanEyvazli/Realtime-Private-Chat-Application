import Ruslan from '../img/42.jpg'
import React from 'react'

const Message = () => {
  return (
    <div className='message '>
      <div className="messageInfo">
        <img src={Ruslan} alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
         <img src={Ruslan} alt="" />
      </div>
    </div>
  )
}

export default Message
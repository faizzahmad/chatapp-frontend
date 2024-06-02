import React from 'react'
import Userinfo from './userinfo/Userinfo'
import Chatlist from './chatlist/Chatlist'

export default function Lists() {
  return (
    <div  className=' flex flex-col flex-1'>
        <Userinfo/>
        <Chatlist/>
    </div>
  )
}

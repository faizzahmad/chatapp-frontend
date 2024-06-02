import React, { useState } from 'react'
import { toast } from 'react-toastify'

export default function Logins() {
    const [avatar, setAvatar] = useState({
        file : null,
        url : ''
    })

    const handelAvatar = (e) => {
if(e.target.files[0]){
    setAvatar({
        file : e.target.files[0],
        url : URL.createObjectURL(e.target.files[0])
    })
    }
}

const handellogin = (e) => {
    e.preventDefault()
   toast.success('Login Successfully')
}
  return (
    <div className='w-[100%] h-[100%] flex  items-center gap-24'>
        <div className='w-[50%] flex flex-col items-center gap-5'>
            <h2 className=' text-3xl font-bold'>Welcome back</h2>
            <form onSubmit={handellogin} className=' flex flex-col items-center justify-center gap-5'>
                <input type="email " className='p-5 border-none outline-none focus:outline-none text-white darkblue rounded-[5px]  ' placeholder='info@example.in' name='email' />
                <input type="password" className='p-5 border-none outline-none focus:outline-none text-white darkblue rounded-[5px] ' placeholder='Password' name='password' />
                <button className='w-[100%] p-5 bg-[#1f8ef1] text-white rounded-[5px] font-semibold'>Log In </button>
            </form>
        </div>
        <div className='h-[80%] w-[2px] bg-[#dddddd35]'></div>
        <div className='w-[50%] flex flex-col gap-5 items-center '>
        <h2 className=' text-3xl font-bold'>Create an Account</h2>
            <form className='flex flex-col items-center justify-center gap-5 '>
            <label htmlFor="file" className=' cursor-pointer w-[100%] flex items-center gap-5  underline'>
            <img src={avatar.url || './avatar.png'} className='w-[50px] opacity-[60%] h-[50px] rounded-[10px] object-cover' alt="" />
            Upload an Image
            </label>
            <input type="file" id='file' className=' hidden' onChange={handelAvatar} />
                <input type="text " className='p-5 border-none outline-none focus:outline-none text-white darkblue rounded-[5px] ' placeholder='Username' name='username' />
                <input type="password" className='p-5 border-none outline-none focus:outline-none text-white darkblue rounded-[5px] ' placeholder='Password' name='password' />
                <button className='w-[100%] p-5 bg-[#1f8ef1] text-white rounded-[5px] font-semibold'>Sign Up </button>
            </form>
        </div>
    </div>
  )
}

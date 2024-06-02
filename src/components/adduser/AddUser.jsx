import React from 'react'

export default function AddUser() {
  return (
    <div className='p-7 darkblue2 rounded-[10px] absolute left-0  top-0 bottom-0 right-0 m-auto modaldiv'>
        <form  className=' flex gap-5'>
            <input type="text" className='bg-white p-5 rounded-[10px] outline-none' placeholder='Username' name='username' />
            <button className='p-5 rounded-[10px] bg-[#1a73e8] text-white'>Search</button>
        </form>
        <div className='user mt-8 flex items-center justify-between'>
            <div className='details flex items-center gap-5'>
                <img src="./avatar.png" className='w-[50px] h-[50px] rounded-full object-cover' alt="" />
            <span>Faiz ahmad</span>
            </div>
            <button className='p-3 rounded-[10px] bg-[#1a73e8] text-white'>Add User</button>
        </div>
    </div>
  )
}

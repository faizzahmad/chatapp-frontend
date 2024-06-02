import React from 'react'

export default function Userinfo() {
  return (
    <div className='p-5 flex items-center gap-5'>
        <div className='flex items-center gap-5'>
            <img src="./avatar.png" className='w-[50px] h-[50px] rounded-full object-cover' alt="" />
            <h2 className=' text-xl font-semibold'>Faiz ahmad</h2>
        </div>
        <div className=' flex gap-5 ms-auto'>
            <img src="./more.png" className='w-[20px] h-[20px]' alt="" />
            <img src="./video.png" className='w-[20px] h-[20px]' alt="" />
            <img src="./edit.png" className='w-[20px] h-[20px]' alt="" />
        </div>
    </div>
  )
}

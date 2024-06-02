import React, { useState } from 'react'
import AddUser from '../../adduser/AddUser'

export default function Chatlist() {
    const [addmode, setAddmode] = useState(false)
  return (
    <div className=' flex-1 overflow-auto'>
        <div className=' flex items-center gap-5 p-5'>
            <div className='w-[80%] darkblue flex items-center gap-5 rounded-[10px] p-2'>
                <img src="./search.png" alt=""  className='w-[20px] h-[20px]'/>
                <input type="text" className='bg-transparent outline-none text-white focus:outline-none'  placeholder='Search'/>
            </div>

            <img src={addmode ? './minus.png' : './plus.png' } className='w-[36px] h-[36px] darkblue cursor-pointer rounded-[10px] p-[10px]' alt="" onClick={() => setAddmode(!addmode)}/>
        </div>

        <div className=' flex items-center gap-5 p-5 cursor-pointer border-b border-[#dddddd35]'>
            <img src="./avatar.png" className='w-[50px] h-[50px] object-cover rounded-full' alt="" />
            <div className=' flex flex-col gap-1 '>
                <span className='font-[500]'>Soheb Asdani</span>
                <p className='text-sm font-[300]'>Hello</p>
            </div>
        </div>

        <div className=' flex items-center gap-5 p-5 cursor-pointer border-b border-[#dddddd35]'>
            <img src="./avatar.png" className='w-[50px] h-[50px] object-cover rounded-full' alt="" />
            <div className=' flex flex-col gap-1 '>
                <span className='font-[500]'>Soheb Asdani</span>
                <p className='text-sm font-[300]'>Hello</p>
            </div>
        </div>

        <div className=' flex items-center gap-5 p-5 cursor-pointer border-b border-[#dddddd35]'>
            <img src="./avatar.png" className='w-[50px] h-[50px] object-cover rounded-full' alt="" />
            <div className=' flex flex-col gap-1 '>
                <span className='font-[500]'>Soheb Asdani</span>
                <p className='text-sm font-[300]'>Hello</p>
            </div>
        </div>

        <div className=' flex items-center gap-5 p-5 cursor-pointer border-b border-[#dddddd35]'>
            <img src="./avatar.png" className='w-[50px] h-[50px] object-cover rounded-full' alt="" />
            <div className=' flex flex-col gap-1 '>
                <span className='font-[500]'>Soheb Asdani</span>
                <p className='text-sm font-[300]'>Hello</p>
            </div>
        </div>

        <div className=' flex items-center gap-5 p-5 cursor-pointer border-b border-[#dddddd35]'>
            <img src="./avatar.png" className='w-[50px] h-[50px] object-cover rounded-full' alt="" />
            <div className=' flex flex-col gap-1 '>
                <span className='font-[500]'>Soheb Asdani</span>
                <p className='text-sm font-[300]'>Hello</p>
            </div>
        </div>


        <div className=' flex items-center gap-5 p-5 cursor-pointer border-b border-[#dddddd35]'>
            <img src="./avatar.png" className='w-[50px] h-[50px] object-cover rounded-full' alt="" />
            <div className=' flex flex-col gap-1 '>
                <span className='font-[500]'>Soheb Asdani</span>
                <p className='text-sm font-[300]'>Hello</p>
            </div>
        </div>

        <div className=' flex items-center gap-5 p-5 cursor-pointer border-b border-[#dddddd35]'>
            <img src="./avatar.png" className='w-[50px] h-[50px] object-cover rounded-full' alt="" />
            <div className=' flex flex-col gap-1 '>
                <span className='font-[500]'>Soheb Asdani</span>
                <p className='text-sm font-[300]'>Hello</p>
            </div>
        </div>
{
    addmode && <AddUser/>
}
    </div>
  )
}

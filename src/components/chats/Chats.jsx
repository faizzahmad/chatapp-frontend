import React, { useEffect, useRef, useState } from 'react'
import EmojiPicker from 'emoji-picker-react'
export default function Chats() {
    const[open,setOpen]=useState(false);
    const[text,setText]=useState('');
    const endRef = useRef(null);

    const handelemoji = (e) => {
        setText(prev => prev + e.emoji);
        setOpen(false);
    }
    useEffect(() => {
       endRef.current?.scrollIntoView({behavior:'smooth'})
      
    },[])
  return (
    <div className=' border-r border-l border-[#dddddd35] flex-1 h-[100%] flex flex-col'>
        <div className='p-4 flex items-center justify-between border-b border-[#dddddd35]'>
            <div className=' flex items-center gap-5'>
                <img src="./avatar.png" className='w-[60px] h-[60px] rounded-full object-cover' alt="" />
                <div className=' flex flex-col gap-1'>
                    <span className=' text-lg font-bold '>Soheb Asdani</span>
                    <p className=' text-sm font-light text-[#a5a5a5]'>Lorem ipsum dolor sit.</p>
                </div>
            </div>

            <div className=' flex gap-5 items-center'>
                <img src="./phone.png" className='w-[20px] h-[20px] cursor-pointer object-cover' alt="" />
                <img src="./video.png" className='w-[20px] h-[20px] cursor-pointer  object-cover'  alt="" />
                <img src="./info.png" className='w-[20px] h-[20px] cursor-pointer  object-cover'  alt="" />
            </div>
            
        </div>

        
        <div className='p-5 flex-1 overflow-scroll flex flex-col gap-5'>
            <div className='messages max-w-[70%] flex gap-5'>
                <img src="./avatar.png" className='w-[30px] h-[30px] rounded-full object-cover' alt="" />
               <div className=' flex flex-1 flex-col gap-1'>
               <p className='p-5 pchat rounded-[10px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus placeat dolores dolor et fugiat dolorum.</p>
                <span className=' text-xs'>1 min ago</span>
               </div>
            </div>

            <div className='messages max-w-[70%] flex gap-5 ms-auto'>
               
               <div>
               <img src="https://images.unsplash.com/photo-1487954277007-8c2d6710c312?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cm9ja3N0YXJ8ZW58MHx8MHx8fDA%3D" className='w-[100%] h-[300px] object-cover rounded-[10px] mb-2' alt="" />
               <p className='bg-[#5183fe] p-5 rounded-[10px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus placeat dolores dolor et fugiat dolorum.</p>
                <span className=' text-xs'>1 min ago</span>
               </div>
            </div>
            <div className='messages max-w-[70%] flex gap-5'>
                <img src="./avatar.png" className='w-[30px] h-[30px] rounded-full object-cover' alt="" />
               <div className=' flex flex-1 flex-col gap-1'>
               <p className='p-5 pchat rounded-[10px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus placeat dolores dolor et fugiat dolorum.</p>
                <span className=' text-xs'>1 min ago</span>
               </div>
            </div>

            <div className='messages max-w-[70%] flex gap-5 ms-auto'>
               
               <div>
               <img src="https://images.unsplash.com/photo-1487954277007-8c2d6710c312?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cm9ja3N0YXJ8ZW58MHx8MHx8fDA%3D" className='w-[100%] h-[300px] object-cover rounded-[10px] mb-2' alt="" />
               <p className='bg-[#5183fe] p-5 rounded-[10px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus placeat dolores dolor et fugiat dolorum.</p>
                <span className=' text-xs'>1 min ago</span>
               </div>
            </div>
            <div ref={endRef}></div>
        </div>


        <div className='p-5 flex items-center mt-auto justify-between border-t border-[#dddddd35] gap-5'>
            <div className=' flex gap-5'>
                <img src="./img.png" className='w-[20px] h-[20px] cursor-pointer' alt="" />
                <img src="./camera.png" className='w-[20px] h-[20px] cursor-pointer' alt="" />
                <img src="./mic.png" className='w-[20px] h-[20px] cursor-pointer' alt="" />
            </div>
            <input type="text" value={text} className=' flex-1  darkblue border-none outline-none focus:outline-none p-4 border rounded-[10px]' placeholder='Type a message...'
            onChange={
                (e) => setText(e.target.value)
            
            } />
            <div className=' relative'>
                <img src="./emoji.png" className='w-[20px] h-[20px] cursor-pointer' alt="" onClick={() => setOpen(!open)} />
                <div className=' absolute left-0 bottom-[50px]'>
                <EmojiPicker open={open} onEmojiClick={handelemoji}/>
                </div>
            </div>
            <button className=' bg-indigo-600 text-white py-[10px] px-5 rounded-[5px] '>Send</button>
        </div>
    </div>
  )
}

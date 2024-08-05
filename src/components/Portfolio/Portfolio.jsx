import React, { useState } from 'react'
import poert1 from '../../assets/images/poert1.png'
import port2 from '../../assets/images/port2.png'
import port3 from '../../assets/images/port3.png'

export default function Portfolio() {
    const [show, setShow] = useState(false)
    const [src, setSrc] = useState('')

    return (
        <div className="portfolio mt-28 min-h-screen">
            <div className="container mx-auto ">
                <h2 className='text-[#2c3e50] pt-5 font-bold text-4xl'>PORTFOLIO COMPONENT</h2>

                <div className='flex justify-center gap-5 items-center text-lg mt-4 mb-5'>
                    <div className="line w-20 h-1 bg-[#2c3e50]"></div>
                    <i className="fa-solid fa-star text-[#2c3e50]"></i>
                    <div className="line w-20 h-1 bg-[#2c3e50]"></div>
                </div>

                <div className='grid md:grid-cols-3 gap-8 mb-8'>
                    <div onClick={() => {
                        setShow(true)
                        setSrc(poert1)
                    }} className="rounded-lg overflow-hidden relative group cursor-pointer">
                        <img src={poert1} className='w-full' alt="poert1" />
                        <div className="overlay absolute top-0 left-0 w-full h-full bg-[#1abc9ce6] flex justify-center items-center opacity-0 duration-500 group-hover:opacity-85 ">
                            <i className="fa-solid fa-plus text-8xl text-white"></i>
                        </div>
                    </div>
                    <div onClick={() => {
                        setShow(true)
                        setSrc(port2)
                    }} className="rounded-lg overflow-hidden relative group cursor-pointer">
                        <img src={port2} className='w-full' alt="port2" />
                        <div className="overlay absolute top-0 left-0 w-full h-full bg-[#1abc9ce6] flex justify-center items-center opacity-0 duration-500 group-hover:opacity-85 ">
                            <i className="fa-solid fa-plus text-8xl text-white"></i>
                        </div>
                    </div>
                    <div onClick={() => {
                        setShow(true)
                        setSrc(port3)
                    }} className="rounded-lg overflow-hidden relative group cursor-pointer">
                        <img src={port3} className='w-full' alt="port3" />
                        <div className="overlay absolute top-0 left-0 w-full h-full bg-[#1abc9ce6] flex justify-center items-center opacity-0 duration-500 group-hover:opacity-85 ">
                            <i className="fa-solid fa-plus text-8xl text-white"></i>
                        </div>
                    </div>
                    <div onClick={() => {
                        setShow(true)
                        setSrc(poert1)
                    }} className="rounded-lg overflow-hidden relative group cursor-pointer">
                        <img src={poert1} className='w-full' alt="poert1" />
                        <div className="overlay absolute top-0 left-0 w-full h-full bg-[#1abc9ce6] flex justify-center items-center opacity-0 duration-500 group-hover:opacity-85 ">
                            <i className="fa-solid fa-plus text-8xl text-white"></i>
                        </div>
                    </div>
                    <div onClick={() => {
                        setShow(true)
                        setSrc(port2)
                    }} className="rounded-lg overflow-hidden relative group cursor-pointer">
                        <img src={port2} className='w-full' alt="port2" />
                        <div className="overlay absolute top-0 left-0 w-full h-full bg-[#1abc9ce6] flex justify-center items-center opacity-0 duration-500 group-hover:opacity-85 ">
                            <i className="fa-solid fa-plus text-8xl text-white"></i>
                        </div>
                    </div>
                    <div onClick={() => {
                        setShow(true)
                        setSrc(port3)
                    }} className="rounded-lg overflow-hidden relative group cursor-pointer">
                        <img src={port3} className='w-full' alt="port3" />
                        <div className="overlay absolute top-0 left-0 w-full h-full bg-[#1abc9ce6] flex justify-center items-center opacity-0 duration-500 group-hover:opacity-85 ">
                            <i className="fa-solid fa-plus text-8xl text-white"></i>
                        </div>
                    </div>
                </div>
            </div>


            <div id='screen' onClick={(e) => e.target.id == "screen" && setShow(false)} className={`bg-[#0d6efd40] fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-30 ${show ? "" : "hidden"
                }`}>
                <img src={src} className='w-2/5' alt="" />
            </div>

        </div>

    )
}

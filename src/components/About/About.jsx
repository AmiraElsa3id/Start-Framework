import React from 'react'

export default function About() {
    return (
        <div className='pt-20 min-h-screen bg-[#1abc9c] flex justify-center items-center'>
            <div className="container mx-auto  w-3/4">
                <h2 className='text-white md:text-5xl font-bold mb-3 text-3xl'>ABOUT COMPONENT</h2>
                <div className='flex justify-center gap-5 items-center text-xl mt-3 mb-3'>
                    <div className="line w-20 h-1 bg-white"></div>
                    <i className="fa-solid fa-star text-white "></i>
                    <div className="line w-20 h-1 bg-white"></div>
                </div>
                <div className='grid md:grid-cols-2 text-left gap-10'>
                    <div className='text-white'>
                        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>

                    <div className='text-white'>
                        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

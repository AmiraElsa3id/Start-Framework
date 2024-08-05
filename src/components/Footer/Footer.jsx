import React from 'react'

export default function Footer() {
    return (
        <footer>
            <div className='p-10 bg-[#2c3e50]'>
                <div className="container text-white mx-auto ">
                    <div className='grid md:grid-cols-3'>
                        <div className="location m-6">
                            <h3 className='font-semibold text-3xl mb-3'>LOCATION</h3>
                            <p className='mb-4'>2215 John Daniel Drive</p>
                            <p className='mb-4'>Clark, MO 65243</p>
                        </div>

                        <div className="social m-6">
                            <h3 className='font-semibold text-3xl mb-3'>AROUND THE WEB</h3>
                            <div className="social-icons text-base flex justify-center items-center">
                                <div className="me-2 size-8 border rounded-full cursor-pointer flex justify-center items-center">
                                    <i className="fa-brands fa-facebook icon"></i>
                                </div>
                                <div className="me-2 size-8 border rounded-full cursor-pointer flex justify-center items-center">
                                    <i className="fa-brands fa-twitter  icon"></i></div>

                                <div className="me-2 size-8 border rounded-full cursor-pointer flex justify-center items-center">
                                    <i className="fa-brands fa-linkedin-in  icon"></i>
                                </div>

                                <div className="me-2 size-8 border rounded-full cursor-pointer flex justify-center items-center">
                                    <i className="fa-solid fa-globe  icon"></i>
                                </div>
                            </div>
                        </div>

                        <div className="freelancer m-6">
                            <h3 className='font-semibold text-3xl mb-3'>ABOUT FREELANCER</h3>
                            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className='bg-[#1a252f] p-3'>
                <div className="container mx-auto">
                    <p className='text-white mb-4'>Copyright © Your Website 2021</p>
                </div>
            </div>
        </footer>
    )
}

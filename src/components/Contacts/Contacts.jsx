import React, { useState } from 'react'

export default function Contacts() {

    const [name, setName] = useState(false);
    const [age, setAge] = useState(false);
    const [email, setEmail] = useState(false);
    const [password, setPassword] = useState(false);

    return (
        <div className="contacts mb-14 mt-28">
            <div className="container mx-auto">
                <h2 className='text-[#2c3e50] pt-5 font-bold text-4xl'>CONTACT SECTION</h2>

                <div className='flex justify-center gap-5 items-center text-lg mt-4 mb-5'>
                    <div className="line w-20 h-1 bg-[#2c3e50]"></div>
                    <i className="fa-solid fa-star text-[#2c3e50]"></i>
                    <div className="line w-20 h-1 bg-[#2c3e50]"></div>
                </div>

                <div className="form w-1/2 mx-auto mt-14">
                    <div className="mb-8 relative">
                        <label htmlFor="name" className={`block ms-3 text-left text-[#1abc9c] relative duration-500  font-semibold mb-2 ${name ? "top-0 z-10" : "top-10 -z-10"}`}>userName :</label>
                        <input onInput={(e) => {
                            e.target.value == "" ? setName(false) : setName(true)
                        }} type="text" id="name" placeholder='userName' name="name" className="w-full px-4 py-2 border-t-0 border-b-2 rounded-lg focus:outline-none placeholder:text-gray-500" />
                    </div>
                    <div className="mb-8">
                        <label htmlFor="age" className={`block ms-3 text-left text-[#1abc9c] relative duration-500  font-semibold mb-2 ${age ? "top-0 z-10" : "top-10 -z-10"}`}>userAge :</label>
                        <input onInput={(e) => {
                            e.target.value == "" ? setAge(false) : setAge(true)
                        }} type="number" id="age" placeholder='userAge' name="age" className="w-full px-4 py-2 border-t-0 border-b-2 rounded-lg focus:outline-none placeholder:text-gray-500" />
                    </div>
                    <div className="mb-8">
                        <label htmlFor="email" className={`block ms-3 text-left text-[#1abc9c] relative duration-500  font-semibold mb-2 ${email ? "top-0 z-10" : "top-10 -z-10"}`}>userEmail :</label>
                        <input onInput={(e) => {
                            e.target.value == "" ? setEmail(false) : setEmail(true)
                        }} type="email" id="email" placeholder='userEmail' name="email" className="w-full px-4 py-2 border-t-0 border-b-2 rounded-lg focus:outline-none placeholder:text-gray-500" />
                    </div>
                    <div className="mb-8">
                        <label htmlFor="password" className={`block ms-3 text-left text-[#1abc9c] relative duration-500  font-semibold mb-2 ${password ? "top-0 z-10" : "top-10 -z-10"}`}>userPassword :</label>
                        <input onInput={(e) => {
                            e.target.value == "" ? setPassword(false) : setPassword(true)
                        }} type="password" id="password" placeholder='userPassword' name="password" className="w-full px-4 py-2 border-t-0 border-b-2 rounded-lg focus:outline-none placeholder:text-gray-500" />
                    </div>
                    <div className='text-left'>
                        <button className='bg-[#1abc9c] px-3 py-2 rounded-md text-white'>Send Message</button>
                    </div>
                </div>



            </div>
        </div>
    )
}

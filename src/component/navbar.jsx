import React, { useState } from 'react'

import { GiHamburgerMenu } from "react-icons/gi"

const Navbar = () => {

    const [openMenu, setoOpenMenu] = useState(false)


    return (
        <div className='flex px-3 sm:px-10 w-screen bg-sky-300 justify-between lg:items-center'>


            <div className='flex w-full lg:hidden flex-col'>
                <div className='flex w-10 h-10 p-2 border-2 border-white rounded-lg cursor-pointer '
                    onClick={() => setoOpenMenu(!openMenu)}
                >
                    <GiHamburgerMenu className='w-full h-full' />

                </div>

                <div
                    className=' flex-col'
                    style={{
                        display: openMenu ? "flex" : "none"
                    }}
                >
                    <a className='small_manu' onClick={()=>{setoOpenMenu(false)}} href="/">Home</a>
                    <a className='small_manu' onClick={()=>{setoOpenMenu(false)}} href="/about">About</a>
                    <a className='small_manu' onClick={()=>{setoOpenMenu(false)}} href="/services">Services</a>
                    <a className='small_manu' onClick={()=>{setoOpenMenu(false)}} href="/portfolio">Portfolio</a>
                    <a className='small_manu' onClick={()=>{setoOpenMenu(false)}} href="/Contact">Contact</a>
                </div>
            </div>

            <div
                className='hidden lg:flex flex-row w-full h-12 justify-between items-center'
            >
                <a className='underline' href="/">Home</a>
                <a className='underline' href="/about">About</a>
                <a className='underline' href="/services">Services</a>
                <a className='underline' href="/portfolio">Portfolio</a>
                <a className='underline' href="/contact">Contact</a>
            </div>






        </div>
    )
}

export default Navbar
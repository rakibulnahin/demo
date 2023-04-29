import React, { useState } from 'react'

import { GiHamburgerMenu } from "react-icons/gi"
import Link from 'next/link'

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
                    <Link className='small_manu' onClick={()=>{setoOpenMenu(false)}} href="/">Home</Link>
                    <Link className='small_manu' onClick={()=>{setoOpenMenu(false)}} href="/about">About</Link>
                    <Link className='small_manu' onClick={()=>{setoOpenMenu(false)}} href="/services">Services</Link>
                    <Link className='small_manu' onClick={()=>{setoOpenMenu(false)}} href="/portfolio">Portfolio</Link>
                    <Link className='small_manu' onClick={()=>{setoOpenMenu(false)}} href="/Contact">Contact</Link>
                </div>
            </div>

            <div
                className='hidden lg:flex flex-row w-full h-12 justify-between items-center'
            >
                <Link className='underline' href="/">Home</Link>
                <Link className='underline' href="/about">About</Link>
                <Link className='underline' href="/services">Services</Link>
                <Link className='underline' href="/portfolio">Portfolio</Link>
                <Link className='underline' href="/contact">Contact</Link>
            </div>






        </div>
    )
}

export default Navbar
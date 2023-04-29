import React from 'react'
import Navbar from './navbar'

const Layout = ({children}) => {
  return (
    <>
        <Navbar />
        <main className=''>{children}</main>    
    </>
  )
}

export default Layout
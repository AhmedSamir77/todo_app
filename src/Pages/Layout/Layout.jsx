import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Navbar_ from '../../Components/Navbar/Navbar'

export default function Layout() {
  return (
    <>
      <Navbar_/>
      <Outlet/>

    </>
  )
}

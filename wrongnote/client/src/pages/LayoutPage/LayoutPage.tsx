import React from 'react'
import { AddProblemComponent, NavbarComponent } from '../../components'
import { Outlet } from 'react-router-dom'

export default function LayoutPage() {
  return (
    <>
        <div className='fixed top-0 left-0 w-full'>
        <NavbarComponent />
      </div>
      <AddProblemComponent />
      <Outlet /> 
    </>
  )
}

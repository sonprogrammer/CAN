import React from 'react'
import { AddProblemComponent, NavbarComponent, ProblemComponent } from '../../components'

export default function MainPage() {
  return (
    <>
      <div className='fixed top-0 left-0 w-full'>
        <NavbarComponent />
      </div>
      <ProblemComponent />
      <AddProblemComponent />
    </>
  )
}

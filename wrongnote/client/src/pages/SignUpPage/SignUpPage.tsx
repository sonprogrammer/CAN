import React from 'react'
import { SignUpComponent } from '../../components'
import { StyledBox, StyledVideo, StyledVideoBackground } from './style'

export default function SignUpPage() {
  return (
    <StyledBox>
      <StyledVideoBackground>
        <StyledVideo autoPlay loop muted src='/landing.mp4' className='bg-video' />
      </StyledVideoBackground>
      <SignUpComponent />
    </StyledBox>
  )
}

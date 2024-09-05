import { useState } from 'react';
import { StyledBox, StyledContainer, StyledLoginBtn, StyledSignupBtn, StyledTitle, StyledVideo, StyledVideoBackground } from './style'
import { LoginComponent, SignUpComponent } from '../../components';

export default function LandingPage() {
  const [login, setLogin] = useState(false)
  const [signup, setSignup] = useState(false)


  const handleLoginClick = () => {
    setLogin(true)
  }
  const handleSignupClick = () => {
    setSignup(true)
  }
  return (
    <div>
      {!login && !signup && (
        <StyledBox>
          <StyledVideoBackground>
            <StyledVideo autoPlay loop muted src='/landing.mp4' className='bg-video' />
          </StyledVideoBackground>
          <div>
            <StyledTitle>오답노트와 문제풀이를 한번에!!</StyledTitle>
            <h1 className='text-yellow-300 absolute
            top-[35%]
            left-[47%]
            text-5xl
            mb-20'>can</h1>
          </div>
          <StyledContainer>
            <StyledLoginBtn onClick={handleLoginClick}>Login</StyledLoginBtn>
            <StyledSignupBtn onClick={handleSignupClick}>Signup</StyledSignupBtn>
          </StyledContainer>
        </StyledBox>
      )}

      {login &&
        <StyledBox>
          <StyledVideoBackground>
            <StyledVideo autoPlay loop muted src='/landing.mp4' className='bg-video' />
          </StyledVideoBackground>

          <LoginComponent />
        </StyledBox>
      }
      {signup &&
        <StyledBox>
          <StyledVideoBackground>
            <StyledVideo autoPlay loop muted src='/landing.mp4' className='bg-video' />
          </StyledVideoBackground>
          <SignUpComponent />
        </StyledBox>
      }

    </div>
  )
}

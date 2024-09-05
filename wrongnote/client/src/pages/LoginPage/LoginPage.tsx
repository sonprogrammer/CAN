import { LoginComponent } from '../../components'
import { StyledBox, StyledVideo, StyledVideoBackground } from './style'

export default function LoginPage() {

  return (
    <StyledBox>
      <StyledVideoBackground>
        <StyledVideo autoPlay loop muted src='/landing.mp4' className='bg-video' />
      </StyledVideoBackground>
      <LoginComponent />
    </StyledBox>
  )
}

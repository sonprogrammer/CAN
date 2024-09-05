import React from 'react'
import { StyledPlus } from './style'
import { useNavigate } from 'react-router-dom'

export default function AddProblemComponent() {
  const navigate = useNavigate()
  
  return (
    <StyledPlus onClick={()=>navigate('/browse/problem')}>
      +
    </StyledPlus>
  )
}

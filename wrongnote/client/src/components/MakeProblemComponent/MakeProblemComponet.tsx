import React, { useEffect, useState } from 'react'
import { StyledAnswer, StyledBox, StyledBtn, StyledContainer, StyledDescription, StyledProblem } from './style'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function MakeProblemComponet() {
  const [problemData, setProblemData] = useState({
    problem: '',
    answer: '',
    description: ''
  })
  const [currentUser, setCurrentUser] = useState(null)

    const navigate = useNavigate()


    useEffect(()=>{
      const fetchCurrentUser = async() =>{
        try {
          const response = await axios.get('http://localhost:3000/api/account/current-user',{withCredentials: true})
          setCurrentUser(response.data._id)
        } catch (error) {
          console.log('failed to get current user', error)
        }
      }
      fetchCurrentUser()
    }, [])
    
    
    const handleChange = (e) =>{
      const { name, value } = e.target
      setProblemData({...problemData, [name] : value})
    }
    
    const handleClick = async () =>{
      console.log('currentUser',currentUser)
      try {
        const response = await axios.post('http://localhost:3000/api/problem/add', 
        {...problemData, currentUser: currentUser},
        {withCredentials: true}
        )
        console.log('response',response)
        alert('succeeded to add problem')
        navigate('/browse')
      } catch (error) {
        console.log('errorㅇㄹㅇㄹ', error)
      }
    }
    
  return (
    <StyledBox>
      <StyledContainer>
        <StyledProblem name='problem' placeholder='문제를 입력하세요' onChange={handleChange}/>
        <StyledAnswer name='answer'  placeholder='정답' onChange={handleChange}/>
        <StyledDescription name='description' placeholder='해설' onChange={handleChange}/>
      </StyledContainer>
      <StyledBtn onClick={handleClick}>submit</StyledBtn>
    </StyledBox>
  )
}

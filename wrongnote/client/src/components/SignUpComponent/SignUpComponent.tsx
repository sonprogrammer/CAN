import React, { useEffect, useState } from 'react'
import { StyledContainer, StyledEmailCheckBtn, StyledInput, StyledInputWrapper, StyledSignupButton } from './style'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function SignUpComponent() {
    const [userPassword, setUserPassword] = useState('')
    const [verifyPassword, setVerifyPassword] = useState('')
    const [passwordError, setPasswordError] = useState(false)
    const [btnClick, setBtnClick] = useState(false)
    const [emailCheck, setEmailCheck] = useState(false)
    const [formData, setFormData] = useState({
        userId : '',
        userPassword : ''
    })


    const navigate = useNavigate()


    useEffect(() => {
        if (formData.userPassword !== verifyPassword) {
            setPasswordError(true)
        } else {
            setPasswordError(false)
        }
    }, [userPassword, verifyPassword])


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value})
        // setVerifyPassword(value)
    }

    const handleEmailcheck = async () =>{
        if(formData.userId == ''){
            alert('Please enter your email')
        }

        try {
            const response = await axios.get('http://localhost:3000/api/account/check-email',{
                params: {
                    email : formData.userId
                }
            })
            
            setBtnClick(true)
            if(response){
                setEmailCheck(true)
                console.log('response', response)
            }
        } catch (error) {
            setEmailCheck(false)
            console.log(error)
        }
    }

    const handleSignupClick = async () =>{
        try {
            const response = await axios.post('http://localhost:3000/api/account/signup', formData)
            console.log('response', response)
            if (!passwordError) {
                alert('가입 성공!');
                // 가입 성공 시 로그인 페이지로 이동
                navigate('/login');
            } else {
                alert(passwordError);
            }
            
        } catch (error) {
            console.log('error', error)
        }
    }


    return (
        <StyledContainer>
            <img src="/favicon.png" alt="logo" className='w-1/3 mb-5 rounded-full' />
            <div className='mb-5 font-bold'>register</div>
            <StyledInputWrapper>
            <StyledInput name='userId' value={formData.userId} type="email" placeholder='email' className='styled-input' onChange={handleChange}/>
            <StyledEmailCheckBtn onClick={handleEmailcheck}>
                중복 확인
            </StyledEmailCheckBtn>
            </StyledInputWrapper>
            <div className='mb-3 text-center'>
            {btnClick ? (emailCheck ? <p className='text-blue-500 font-bold'>사용 가능!</p> : <p className='text-red-500 font-bold'>다른 이메일을 사용하세요</p>) : ( <p></p>)}
            </div>
            <StyledInput name='userPassword' type="password" placeholder='password' value={formData.userPassword} onChange={handleChange}  />
            <StyledInput name='userPassword' type="password" placeholder='check password' value={verifyPassword} onChange={(e) => { setVerifyPassword(e.target.value) }} />
            {passwordError && <div style={{color: 'red', fontWeight:'bold', marginBottom: '10px'}}>비밀번호를 확인하세요</div>}
                <StyledSignupButton  onClick={handleSignupClick}>sign up</StyledSignupButton>


        </StyledContainer>
    )
}

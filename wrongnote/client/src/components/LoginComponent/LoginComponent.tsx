import { useEffect, useState } from 'react'
import { StyledButton, StyledTextButton, StyledContainer, StyledInput, StyledTextWrapper } from './style'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function LoginComponent() {
    const [isEmailChecked, setIsEmailChecked] = useState(false);
    const [email, setEmail] = useState('')
    const [formData, setFormData] = useState({
        userId: '',
        userPassword: '',
    })

    const navigate = useNavigate()

    //* 로그인시 로컬 스토리지에 저장된 이메일을 확인하고 있다면 입력필드에 자동 입력
    useEffect(()=>{
        const rememberEmail = localStorage.getItem('rememberEmail');
        if(rememberEmail){
            setEmail(rememberEmail)
            formData.userId = rememberEmail
            setIsEmailChecked(true)
        }
    }, [])



    const handleEmailClick = () => {
        setIsEmailChecked(!isEmailChecked);
        if(isEmailChecked == false){
            //*이메일 기억하기 체크면 이메일 로컬 스토리지에 저장
            localStorage.setItem('rememberEmail', formData.userId)
        }else{
            //*이메일 기억하기 체크가 안되어 있으면 로컬 스토리지에서 저장된이메일 제거 
            localStorage.removeItem('rememberEmail')
        }
    };




    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value})
    }

    const handleLoginClick = async () => {
        console.log('formdata', formData)
        try {
            const response = await axios.post('http://localhost:3000/api/account/login'
                , formData, { withCredentials: true}
            )
            navigate('/browse') 
            return response.data
        } catch (error) {
            alert('check your username or password')
        }
    }

    const handleKeydown = (e) =>{
        if(e.key === 'Enter'){
            if(formData.userId == ''){
                alert('Please enter your username')
            }
            if(formData.userPassword == ''){
                alert('Please enter your password')
            }
            handleLoginClick()
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        handleLoginClick(); 
    }

    return (
        <StyledContainer>
            <img src="/favicon.png" alt="logo" className='w-1/3 mb-10 rounded-full' />

                <StyledInput name='userId' type="email" placeholder='email' value={formData.userId} onChange={handleChange} onKeyDown={handleKeydown}/>
                <StyledInput name='userPassword' type="password" placeholder='password' value={formData.userPassword} onChange={handleChange} onKeyDown={handleKeydown}/>
            <div>
                <input type="checkbox" className='peer mr-2' checked={isEmailChecked} onChange={handleEmailClick}/>
                <span onClick={handleEmailClick} style={{cursor:'pointer'}}>이메일 기억하기</span>
            </div>
            <div>
                <StyledButton onClick={handleSubmit} >Login</StyledButton>
                {/* 회원정보 검사후 맞으면 main페이지로 이동 */}
                <StyledTextWrapper>
                    <span>not a member?</span>
                    <Link to='/signup'>
                        <StyledTextButton>register</StyledTextButton>
                    </Link>
                </StyledTextWrapper>
            </div>

        </StyledContainer>
    )
}

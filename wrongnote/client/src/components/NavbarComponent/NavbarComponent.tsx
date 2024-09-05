import React, { useState } from 'react'
import { StyledContainer, StyledLogo, StyledLogoutModal, StyledSearch, StyledTags } from './style'
import { Link, useNavigate } from 'react-router-dom'
import LogoutModal from './LogoutModal'
import axios from 'axios'


export default function NavbarComponent() {
    const [logout, setLogout] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    

    const navigate = useNavigate()


    const handleChange = (e) => {
        setSearchValue(e.target.value)
        navigate(`/browse/search?q=${e.target.value}`)
    }
    

    const handleLogoutClick = () => {
        setLogout(!logout)
    }

    const handleLogoutConfirm = async () => {
        try {
            const response = await axios.post('http://localhost:3000/api/account/logout')
            if(response.status === 200){
                console.log('success', response)
                navigate('/')
            }else{
                console.error('failed to logout')
            }
        } catch (error) {
            console.error('error during logout', error)
        }
    }

    const handleCancelLogout = () => {
        setLogout(false);
      };

    return (
        <StyledContainer>
            <StyledLogo>
                <Link to='/browse'>
                CAN
                </Link>
            </StyledLogo>
            <StyledSearch onChange={handleChange} value={searchValue} type='search'/>
            <StyledTags>
                <Link to='/browse/note'>my note</Link>
                <Link to='/browse/test'>20 test</Link>
                <Link className='text-black' onClick={handleLogoutClick}>logout</Link>
            </StyledTags>
            <StyledLogoutModal onClick={handleCancelLogout}>
            {logout && (
                <LogoutModal onConfirm={handleLogoutConfirm} onCancel={handleCancelLogout} text='text'/>
            )}
            </StyledLogoutModal>
        </StyledContainer>
    )
}

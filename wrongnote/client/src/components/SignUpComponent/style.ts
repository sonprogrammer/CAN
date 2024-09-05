import tw from "twin.macro";
import styled from "styled-components";

export const StyledContainer = styled.div`
    ${tw`
        flex
        flex-col
        items-center
        justify-center
        w-1/3
        p-8
        rounded-[37px]
    `}
    background-color: #e0e0e0;
    margin-top: 80px;
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-height: 100vh;
    relative
`

export const StyledInputWrapper = styled.div`
    ${tw`
        relative 
        w-full 
    `}
`

export const StyledInput = styled.input`
    ${tw`
    bg-gray-50 
    border 
    border-gray-300 
    text-gray-900 
    text-sm 
    rounded-lg 
    focus:ring-blue-500 
    focus:outline-blue-500 
    block 
    w-full 
    p-2.5
    mb-3
    `}
`

export const StyledEmailCheckBtn = styled.button`
    ${tw`
        bg-blue-500
        rounded-md
        p-[3px]
        text-white
        absolute
        mt-[6px]
    `}
    right: 2%;
    top: 0;


`

export const StyledSignupButton = styled.button`
    ${tw`
        block
        text-black
        p-[5px]
        font-bold
        rounded-lg
        bg-yellow-300
        w-full
    `}
`
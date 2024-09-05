import tw from "twin.macro";
import styled from '@emotion/styled';

export const StyledBox = styled.div`
    ${tw`
        w-full
    `}
`
export const StyledTextarea = styled.textarea`
    ${tw`
        w-full
        h-[100vh]
        p-32
        bg-blue-100
        text-2xl
        focus:border-blue-500
        focus:outline-none
    `}
`

export const StyledBtn = styled.div`
    ${tw`
        fixed
        right-10
        top-24
        cursor-pointer
        p-2
        bg-yellow-300
        rounded-lg
        font-bold
    `}
    transition: all 0.3s;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.17);
    &:hover{
        transform: scale(1.2);
        color: blue;
    }
`
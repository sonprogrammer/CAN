import tw from "twin.macro";
import styled from "styled-components";

export const StyledBox = styled.div`
    ${tw`
    mt-10
    flex
    justify-around
    flex-wrap
    gap-[30px]
    mt-[120px]
    `}
`
export const StyledContainer = styled.div`
    ${tw`
    bg-gray-400
    rounded-xl
    w-[calc(40% - 10px)]
    text-wrap
    h-[calc(40% - 10px)]
    flex
    flex-col
    items-center
    gap-2
    p-2
    mb-[10px]
    `}
    @media(max-width:768px){
        width: calc(100% - 10px)
    }
`
export const StyledContent = styled.div`
    ${tw`
    `}
    text-wrap: break-word
`
export const StyledAnswer = styled.textarea`
    ${tw`
        w-full
    `}
`
export const StyledMark = styled.button`
    ${tw`
        bg-yellow-300
        p-3
        rounded-xl
        font-bold
        mt-10
        absolute
        left-1/2
        transform -translate-x-1/2
    `}
    transition: all 0.4s;
    &:hover{
        color: blue;
        font-weight: bold;
        transform: scale(1.2) translateX(-50%);
    }
`
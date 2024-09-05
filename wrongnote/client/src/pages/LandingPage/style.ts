import tw from "twin.macro";
import styled from "styled-components";

export const StyledBox = styled.div`
    ${tw`
        // flex
        // flex-col
        // justify-center
        // items-center
        bg-black
        w-[100vw]
        h-[100vh]
    `}
`

export const StyledVideoBackground = styled.div`
    ${tw`
        w-[100%]
        h-[100%]
    `}
`

export const StyledVideo = styled.video`
    ${tw`
        w-full
        h-[100vh]
    `}
`

export const StyledTitle = styled.div`
    ${tw`
        absolute
        top-[25%]
        left-[30%]
        text-5xl
        mb-20
        text-white
    `}
`

export const StyledContainer = styled.div`
    ${tw`
    absolute
    top-[50%]
    left-[35%]
        flex
        gap-20
        justify-center
    `}
`

export const StyledLoginBtn = styled.button`
    ${tw`
        text-center
        items-center
        text-3xl
        font-bold
        px-5  
        p-3
        bg-yellow-300
        rounded-xl
        w-[200px]
    `}
`
export const StyledSignupBtn = styled.button`
    ${tw`
    text-white
    text-center
    items-center
    text-3xl
    font-bold
    px-5  
    p-3
    bg-blue-500
    rounded-xl
    w-[200px]
    `}
`
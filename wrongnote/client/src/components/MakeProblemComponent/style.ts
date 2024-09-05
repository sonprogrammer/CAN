import tw from "twin.macro";
import styled from "styled-components";

export const StyledBox = styled.div`
    ${tw`
        flex
        flex-col
        justify-between
        bg-gray-300
        m-4
        items-center
        w-1/2
        h-[80vh]
        mt-[120px]
        rounded-2xl
        mr-auto
        ml-auto
    `}
`
export const StyledContainer = styled.div`
    ${tw`
        flex
        flex-col
        w-[80%]
        mt-10
        h-[80%]
        mb-5
    `}
`
export const StyledProblem = styled.textarea`
    ${tw`
        p-2
        mb-5
        h-[50%]
        resize-none
    `}
`
export const StyledAnswer = styled.textarea`
    ${tw`
    p-2
    mb-5
    resize-none
    `}
`
export const StyledDescription = styled.textarea`
    ${tw`
    p-2
    h-[30%]
    resize-none
    `}
`
export const StyledBtn = styled.button`
    ${tw`
        bg-yellow-300
        w-[80%]
        h-[7%]
        rounded-xl
        font-bold
        text-xl
        mb-10
    `}
`
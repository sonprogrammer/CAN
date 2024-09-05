import tw from "twin.macro";
import styled from 'styled-components'


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

export const StyledContainer = styled.div<{answerStatus: boolean}>`
    ${tw`
        bg-gray-300
        rounded-xl
        w-[calc(40% - 10px)]
        text-wrap
        h-32
        flex
        flex-col
        items-center
        gap-2
        p-2
    `}
    h1{
        font-size: 30px;
        margin-bottom: 10px;
        cursor: pointer;
    }

    ${props => props.answerStatus ? `
        h1:hover{
            color: white;
        }
    ` : `color: black;`}

    h1:hover{
        background-color: ${props => props.answerStatus ? 'blue' : 'red'};
        border-radius: 15px;
    }
    p{
        font-size: 24px;
        margin-left: 10px;
        margin-right: 10px;
        word-wrap: break-all;
    }
    @media(max-width:768px){
        width: calc(100% - 10px)
    }
`

export const StyledModalOverlay = styled.div`
    ${tw`
        fixed
        top-0
        left-0
        w-full
        h-full
        flex
        justify-center
    `}
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    align-items: center;
`
export const StyledModalContent = styled.div`
    ${tw`
        w-[80%]
        h-[80%]
        bg-white
        p-10
        rounded-md
        relative
    `}
`

export const StyledEditProblem = styled.textarea`
    ${tw`
        resize-none
        h-[60%]
        p-3
        mb-3
    `}
    border: 1px solid black
`
export const StyledEditAnswer = styled.textarea`
    ${tw`
        resize-none
        h-[12%]
        p-3
        mb-3
    `}
    border: 1px solid black
`
export const StyledEditDescription = styled.textarea`
    ${tw`
        resize-none
        h-[50%]
        p-3
    `}
    border: 1px solid black
`


export const StyledCloseButton = styled.div`
    ${tw`
        absolute
        top-[10px]
        right-[10px]
        bg-transparent	
        cursor-pointer
        text-[18px]
    `}
    &:hover{
        padding: 3px;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius:10px;
        color: white;
    }
`

export const StyledEditBtn = styled.div`
    ${tw`
    bottom-[10px]
    w-[70px]
    text-center
    bg-blue-500
    text-white
    p-2
    font-semibold
    rounded-md
    cursor-pointer
    text-[18px]
    mx-auto
    mt-20
    `}
    transition: all 0.4s;
    &:hover{
        transform: scale(1.2);
    }
`

export const StyledDeleteBtn = styled.div`
    ${tw`
    bottom-[10px]
    w-[70px]
    text-center
    bg-red-500
    text-white
    p-2
    font-semibold
    rounded-md
    cursor-pointer
    text-[18px]
    mx-auto
    mt-20
    `}
    transition: all 0.4s;
    &:hover{
        transform: scale(1.2);
    }
`

export const StyledContent = styled.div`
    ${tw`
        w-full
        h-[80%]
        flex
        flex-col
        mt-5
        p-5
    `}
    border: blue solid 1px;
    p{
        margin-bottom: 20px;
    }
    h2{
        margin-bottom: 20px;
        font-size: 20px;
        color: blue;
        font-weight: bold;
    }
`

//
export const StyledLogoutModal = styled.div`
  ${tw`
    
    flex
    justify-center
    items-center
  `}


`
export const StyledLogoutModalContainer = styled.div`
    ${tw`
    fixed top-0 left-0 w-full h-full flex justify-center 
    items-center bg-black bg-opacity-50
    z-40

    `};

    `

    export const StyledLogoutModalContent = styled.div`
  ${tw`
  bg-[#bebebe] p-8 rounded-xl shadow-md
  `
}
  p{
    color: black;
  }
  z-index: 9999;
  
`

export const StyledButtons = styled.div`
  ${tw`
    flex
    justify-center
    mt-2
    
  `}

  button {
    ${tw`
      px-4
      py-2
      transition-all
      duration-300
      rounded-md
      font-semibold
    `}

    &:first-child {
      ${tw`
        mr-4
        text-red-500

      `}
    }

    &:hover {
      ${tw`
        transform
        scale-105
      `}
    }

    &:first-child:hover {
      ${tw`
        bg-red-500
        text-white
      `}
    }

    &:last-child:hover {
      ${tw`
        bg-black
        text-white
      `}
    }
  }`
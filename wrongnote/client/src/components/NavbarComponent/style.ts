import tw from "twin.macro";
import styled from 'styled-components'


export const StyledContainer = styled.div`
    ${tw`
        w-full
        flex
        justify-between
        text-2xl
        font-bold
        p-4
        bg-blue-500
        h-20
        items-center
    `}
`

export const StyledLogo = styled.div`
    ${tw`
        mr-auto
        bg-yellow-500
        rounded-xl
        p-1
        items-center
        flex
    `}
`
export const StyledSearch = styled.input.attrs({placeholder: 'Search'})`
    ${tw`
        mx-auto
        rounded-3xl
        h-10
        text-left
        px-4
        outline-none
    `}
    
`
export const StyledTags = styled.div`
    ${tw`
        flex
        ml-auto
        text-white
    `}
        gap: 20px;
        & > a:hover {
            color: yellow;
        }
        & >a:last-child:hover{
            color: red;
        }
`


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
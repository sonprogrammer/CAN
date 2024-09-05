import tw from "twin.macro";
import styled from '@emotion/styled';

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
`
export const StyledInput = styled.input`
    ${tw`
    bg-gray-50 
    border 
    border-gray-300 
    text-gray-900 
    text-sm rounded-lg 
    focus:ring-blue-500 
    focus:outline-blue-500 
    block 
    w-full 
    p-2.5
    mb-3
    `}
`

// export const StyledCheckbox = styled.input`
//   ${tw`sr-only`}
// `;

export const StyledButton = styled.button`
    ${tw`
    w-full 
    my-5 
    text-white 
    focus:outline-none 
    focus:ring-4 
    focus:ring-blue-300 
    font-bold 
    rounded-full 
    text-lg 
    px-5 
    py-2.5 
    text-center
    `}
    background-color: #6799FF;
    &:hover {
        opacity: 90%;
    }
`;

export const StyledTextWrapper = styled.div`
  ${tw`flex gap-[10px] items-center`}
  justify-content:space-between
    color:#9b59b6
`;

export const StyledTextButton = styled.div`
  ${tw`font-bold cursor-pointer`}
  color: #003399;
`;
// export const StyledContainer = styled.div`
//     ${tw`

//     `}
// `
import React from 'react';
import {
  StyledLogoutModalContainer,
  StyledLogoutModalContent,
  StyledButtons,
} from './style';



export default function DeleteModal({onConfirm, onCancel}) {
  return (
    <StyledLogoutModalContainer>
      <StyledLogoutModalContent>
        <p>정말 삭제 하시겠습니까?</p>
        <StyledButtons>
          <button onClick={onConfirm}>확인</button>
          <button onClick={onCancel}>취소</button>
        </StyledButtons>
      </StyledLogoutModalContent>
    </StyledLogoutModalContainer>
  );
}
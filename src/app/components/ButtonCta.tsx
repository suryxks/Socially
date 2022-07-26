import styled from "styled-components";

export const ButtonCta = styled.button`
    color: var(--white);
    background-color: var(--cta);
    border: 2px solid var(--cta);
    border-radius:4px;
  font-weight: 400;
 padding:4px 6px;
 height: fit-content;
 display: flex;
 align-items: center;
 justify-content: center;
 &:hover{
    cursor: pointer;
    background-color: var(--btn-hover);
 }
`
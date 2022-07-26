import React from "react";
import styled from "styled-components";
import { ButtonCta } from "./ButtonCta";
export const Header=()=>{
    return (
    <HeaderWrapper>
       <BrandName>Socially</BrandName>
       <ButtonCta>Sign in</ButtonCta>
    </HeaderWrapper>)
}

const HeaderWrapper=styled.nav`
position: fixed;
top:0;
    display: flex;
    border-bottom: 2px solid var(--grey-border);
    width: 100%;
    height: 70px;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    grid-area: header;
`
const BrandName=styled.h3`
    color: var(--cta);
    font-weight: bolder;
    
`
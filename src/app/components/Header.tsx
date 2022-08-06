import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "app/hooks";
import { authStateSelector, logout } from "features/authentication/authSlice";
import { ButtonCta } from "./ButtonCta";
import { StyledLink } from "./StyledLink";

export const Header = () => {
    const auth = useAppSelector(authStateSelector)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { isAuthenticated } = auth;
    return (
        <HeaderWrapper>
            <StyledLink to='/home'>Socially</StyledLink>
            <ButtonCta onClick={() => {
                if (isAuthenticated) {
                    dispatch(logout())
                } else {
                    navigate('/')
                }
            }}>{isAuthenticated ? 'logout' : 'Sign in'}</ButtonCta>
        </HeaderWrapper>)
}
const HeaderWrapper = styled.nav`
    position: sticky;
    top:0;
    display: flex;
    border-bottom: 2px solid var(--grey-border);
    width: 100%;
    height: 70px;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    grid-area: header;
    background-color: var(--dark-bg);
    z-index: 2;
`
const BrandName = styled.h3`
    color: var(--cta);
    font-weight: bolder;
    
`
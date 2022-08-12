import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";
import { MdAdd } from 'react-icons/md'
import { useAppSelector, useAppDispatch } from "app/hooks";
import { IconContainer } from "./AppNavbar";
import { authStateSelector, logout } from "features/authentication/authSlice";
import { setPostModalContent,openPostModal,closePostModal } from "features/modals/modalSlice";
import { ButtonCta } from "./ButtonCta";
import { StyledLink } from "./StyledLink";
import { Menu } from "./Menu";
export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    const toggleMenu = () => setIsMenuOpen(state => !state);
    const auth = useAppSelector(authStateSelector)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { isAuthenticated } = auth;
    return (
        <HeaderWrapper>
            <StyledLink to='/home'>Socially</StyledLink>
            <HeaderActions>
                {isAuthenticated ? <>
                    <ButtonCta onClick={() => {
                        dispatch(openPostModal())
                    }}>
                        <IconContainer>
                            <MdAdd />
                        </IconContainer>New Post</ButtonCta>
                    <Avatar src={auth.userData?.avatarURL} alt={auth.username} sx={{ border: '2px solid grey', cursor: 'pointer' }} onClick={toggleMenu} />
                </>
                    : (
                        <ButtonCta onClick={() => {
                            if (isAuthenticated) {
                                dispatch(logout())
                            } else {
                                navigate('/')
                            }
                        }}>{isAuthenticated ? 'logout' : 'Sign in'}</ButtonCta>)
                }
                <Menu isActive={isMenuOpen} setIsActive={setIsMenuOpen} />
            </HeaderActions>
        </HeaderWrapper>)
}
const HeaderActions = styled.div`
    display: flex;
    align-items: center;
    gap:1rem;
`
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
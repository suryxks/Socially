import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { IconContainer } from "./AppNavbar";
import { authStateSelector, logout } from "features/authentication/authSlice";
import { MdLogout, MdPersonOutline } from 'react-icons/md'
type menuProps = {
    isActive: boolean,
    setIsActive: (state: boolean) => void,
}
export const Menu = ({ isActive, setIsActive }: menuProps) => {
    const navigate = useNavigate();
    const auth = useAppSelector(authStateSelector);
    const { username } = auth;
    const dispatch = useAppDispatch()
    return isActive ? (
        <MenuContainer>
            <MenuItem onClick={() => {
                navigate(`/profile/${username}`)
                setIsActive(false)
            }}><IconContainer><MdPersonOutline /></IconContainer><MenuContent>Profile</MenuContent></MenuItem>
            <MenuItem onClick={() => {
                dispatch(logout())
                setIsActive(false)
            }}><IconContainer><MdLogout /></IconContainer><MenuContent>Logout</MenuContent></MenuItem>
        </MenuContainer>) : null
}

const MenuContainer = styled.ul`
    display: flex;
    flex-direction: column;
    min-width: 150px;
    background-color: var(--card-bg);
    border: 2px solid var(--grey-border);
    position: absolute;
    right: 2.5rem;
    top:3.5rem;
    border-radius:4px ;
    padding: 2px;
`
const MenuContent = styled.span`
padding-left:1rem ;
`
const MenuItem = styled.li`
    list-style: none;
    display: flex;
    padding: 5px;
    align-items: center;
    cursor: pointer;
    &:hover{
        background-color: var(--btn-hover);
        border-radius: 4px;
        }
`
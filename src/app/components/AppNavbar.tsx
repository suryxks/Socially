import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { IoMdAddCircleOutline } from "react-icons/io";
import {
    MdOutlineExplore,
    MdExplore,
    MdBookmark,
    MdOutlineBookmarkBorder,
    MdPersonOutline, MdPerson
} from "react-icons/md";
type NavLinkProps = {
    isactive: boolean,
}
export const AppNavbar = () => {
    const location = useLocation();
    const { pathname } = location;
    return (
        <NavContainer>
            <Nav>
                <ListContainer>
                    <ListItem isactive={pathname === '/home'}>
                        <StyledNavLink to='/home'>
                            <IconContainer>
                                {pathname === '/home' ? <AiFillHome /> : <AiOutlineHome />}
                            </IconContainer>
                            <TabName>Home</TabName>
                        </StyledNavLink>
                    </ListItem>
                    <ListItem isactive={pathname === '/explore'}>
                        <StyledNavLink to='/explore'>
                            <IconContainer>
                                {pathname === '/explore' ? <MdExplore /> : <MdOutlineExplore />}
                            </IconContainer>

                            <TabName>Explore</TabName>
                        </StyledNavLink>
                    </ListItem>
                    <ListItem isactive={pathname === '/profile'}>
                        <StyledNavLink to='/profile'>
                            <IconContainer>
                                {pathname === '/profile' ? <MdPerson /> : <MdPersonOutline />}
                            </IconContainer>

                            <TabName>Profile</TabName>
                        </StyledNavLink>
                    </ListItem>
                </ListContainer>
            </Nav>
        </NavContainer>)
}
const NavContainer = styled.div`
    position: fixed;
    top:5rem;
    left:2rem;
`
const Nav = styled.nav`
 margin: 1rem 3rem;
 grid-area: navbar;
 position: sticky;
 top:5rem;
 left:5rem;
`;
export const IconContainer = styled.i`
font-size: 1.3rem
;`
const ListContainer = styled.ul``;

const TabName = styled.div`
margin-left:1.5rem ;
`
const StyledNavLink = styled(Link)`
    width: 200px;
    color:var(--white);
    text-decoration: none;
    display: flex;
    align-items: center;
   
 &:visited{
    text-decoration: none;
    color:var(--white);
 }
`

const ListItem = styled.li<NavLinkProps>`
text-decoration: none;
list-style: none;
margin:10px;
background-color: ${props => props.isactive ? 'var(--cta)' : ''};
&:hover{
    background-color: ${props => props.isactive ? 'var(--cta)' : 'var(--grey-border)'};
}
padding:6px 8px;
border-radius: 4px;
`;
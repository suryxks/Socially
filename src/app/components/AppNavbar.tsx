import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import {
    MdOutlineExplore,
    MdExplore,
    MdBookmark,
    MdOutlineBookmarkBorder,
    MdPersonOutline, MdPerson
} from "react-icons/md";
import { useAppSelector } from "app/hooks";
import { RootState } from "app/store";
type NavLinkProps = {
    isactive: boolean,
}
export const AppNavbar = () => {
    const location = useLocation();
    const profile = useAppSelector((state: RootState) => state.auth.userData);
    const username = profile?.username;
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
                    <ListItem isactive={pathname === `/profile/${username}`}>
                        <StyledNavLink to={`/profile/${username}`}>
                            <IconContainer>
                                {pathname === '/profile' ? <MdPerson /> : <MdPersonOutline />}
                            </IconContainer>

                            <TabName>Profile</TabName>
                        </StyledNavLink>
                    </ListItem>
                    <ListItem isactive={pathname === '/bookmarks'}>
                        <StyledNavLink to='/bookmarks'>
                            <IconContainer>
                                {pathname === '/bookmarks' ? <MdBookmark /> : <MdOutlineBookmarkBorder />}
                            </IconContainer>

                            <TabName>Bookmarks</TabName>
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
    grid-area: navbar;
    background-color: var(--dark-bg);
    z-index: 9;
   @media(max-width:550px),(max-width: 1100px){
    bottom: 0;
    left: 0;
    right: 0;
    top: auto;
    width: 100%;
   }
`
const Nav = styled.nav`
 margin: 1rem 3rem;
 grid-area: navbar;
 position: sticky;
 top:5rem;
 left:5rem;
 @media(max-width:550px),(max-width: 1100px){
    margin:0;
   }
`;
export const IconContainer = styled.i`
font-size: 1.3rem
;`
const ListContainer = styled.ul`
 @media (max-width: 550px),(max-width:1100px) {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      
}

`;

const TabName = styled.div`
margin-left:1.5rem ;
@media (max-width: 550px){
  display: none;
}


@media(max-width:1100px) {
    margin: 0 auto;
}
`
const StyledNavLink = styled(Link)`
    width: 200px;
    color:var(--white);
    text-decoration: none;
    display: flex;
    align-items: center;
    @media (max-width: 550px){
        width: max-content;
     display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}


@media(max-width:1100px){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
   
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
max-width: fit-content;
@media (max-width: 550px){
  /* display: none; */
  display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}


@media(max-width:1100px)and(min-width:550px){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
`;
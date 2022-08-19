import React from "react";
import styled from "styled-components";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import { ButtonCta } from "./ButtonCta";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { followUser } from "features/users/usersSlice";
import { user } from "app/types";
export const FoLLowUserSuggestion = () => {
    const dispatch = useAppDispatch();
    const users = useAppSelector(state => state.users.users);
    const auth = useAppSelector(state => state.auth);
    let { userData: currentUser } = auth;
    currentUser = users.find(user => user.username === currentUser?.username) || null;
    const { encodedToken: token } = auth
    const following = currentUser?.following || [];
    const usersNotFollowed = users.filter((user: user) => {
        const isUserFollewed: user | undefined = following.find((item: user) => item.username === user.username)
        if (!isUserFollewed && currentUser?.username !== user.username) return true;
        return false
    });
    return (<ListWrapper>
        <ListContainer>
            <ListHeader>Suggestions For you</ListHeader>
            {usersNotFollowed.length === 0 ? <span>You have followed all suggested users</span> :
                usersNotFollowed.map(user => {
                    const { username, avatarURL, firstName, lastName, _id: userId } = user;
                    return (<User to={`/profile/${username}`} key={userId}>
                        <Avatar src={avatarURL} alt={username} sx={{ height: 48, width: 48 }} />
                        <UserDetailsWrapper>
                            <Name>{`${firstName + " "}${lastName}`}</Name>
                            <UserName >{`${'@' + username}`}</UserName>
                        </UserDetailsWrapper>
                        <FollowButton onClick={(e) => {
                            e.preventDefault();
                            dispatch(followUser({ userId, token }))
                        }
                        }>Follow</FollowButton>
                    </User>)
                }
                )}

        </ListContainer>
    </ListWrapper>)
}
const FollowButton = styled(ButtonCta)`
    margin-left: auto;
`
const UserName = styled.p`
color:grey;
margin:0 0.5rem;
`;
const UserDetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
const User = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    &:visited{
        color: inherit;
    }
    cursor:pointer;
    color: inherit;
    margin: 1rem;
  `
const Name = styled.p`
    margin:0 0.5rem;
`
const ListWrapper = styled.div`
    position: fixed;
    top:5rem;
    right:2rem;
    @media(max-width:1100px),(min-width:550px){
        display: none;
    }
`
const ListHeader = styled.h3``
const ListContainer = styled.div`
grid-area: suggestion;
margin: 1rem;
  width: 350px;
  background-color: var(--card-bg);
  border: 2px solid var(--grey-border);
  border-radius: 4px;
  top:5rem;
 right:1rem;
 padding:1rem;
`
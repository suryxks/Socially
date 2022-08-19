import React from "react";
import styled from "styled-components";
import Avatar from '@mui/material/Avatar';
import { useParams, Link } from "react-router-dom";
import { followUser, unfollowUser } from "features/users/usersSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { AppNavbar, PostCard, ButtonCta } from "app/components";
import { follwingUserData } from 'app/types';
import {openEditModal} from 'features/modals/modalSlice'
import { authStateSelector } from "features/authentication/authSlice";

export const Profile = () => {
    const { username } = useParams();

    const dispatch = useAppDispatch();
    const profile = useAppSelector(state => state.users.users.find(user => user.username === username));
    const auth = useAppSelector(authStateSelector);
    const userFollowingData = useAppSelector(state => state.users.users.find(user => user._id === auth?.userData?._id))?.following
    const { encodedToken: token } = auth;
    const isCurrentUser = profile?._id === auth?.userData?._id;
    const isUserFollowed = userFollowingData?.find((user: follwingUserData) => user?.username === profile?.username);
    const posts = useAppSelector(state => state.posts)
    const userPosts = posts.posts.filter(post => post.username === profile?.username);
    const userId = profile?._id;
    const unfollowHandler = () => {
        if (profile) {
            dispatch(unfollowUser({ userId, token }))
        }
    }
    const followHandler = () => {
        if (profile) {
            dispatch(followUser({ userId, token }))
        }
    }
    return (
        <PageWrapper>
            <AppNavbar />
            <ProfileWrapper>
                <Avatar alt={profile?.username} src={profile?.avatarURL} sx={{ height: 120, width: 120, border: '2px solid grey', margin: '1rem auto' }} />
                <UserDetailsWrapper>
                    <Name>{`${profile?.firstName + " "}${profile?.lastName}`}</Name>
                    <UserName>{`${'@' + profile?.username}`}</UserName>
                    {
                        isCurrentUser ?
                            <ButtonCta onClick={() => {dispatch(openEditModal())}}>Edit</ButtonCta> :
                            isUserFollowed ? <ButtonOuLined onClick={unfollowHandler}>Unfollow</ButtonOuLined> :
                                <ButtonCta onClick={followHandler}>Follow</ButtonCta>
                    }
                    <UserBio>{profile?.bio}</UserBio>
                    <UserLink href={profile?.website} target='_blank'>{profile?.website}</UserLink>
                    <UserFollowWrapper>
                        <UserFowllowLink to='/'><UserFollowCount>{`${profile?.following.length} `}</UserFollowCount><span>Following </span></UserFowllowLink>
                        <UserFowllowLink to='/'><UserFollowCount>{`${profile?.followers.length} `}</UserFollowCount><span>Followers</span></UserFowllowLink>
                    </UserFollowWrapper>
                </UserDetailsWrapper>

                {userPosts.map(post => <PostCard post={post} key={post._id} />)}
            </ProfileWrapper>
        </PageWrapper>)
}
const PageWrapper = styled.div`
display: grid;
overflow-y: auto;
grid-template-columns: 2fr 10fr;
grid-template-areas: 
"navbar content";
@media (max-width: 550px){
    grid-template-areas: 
    "content suggestion",
    "navbar navbar"
}


@media(max-width:1100px) {
    grid-template-areas: 
    "content suggestion",
    "navbar navbar";
}
`
const ButtonOuLined = styled(ButtonCta)`
background-color: var(--dark-bg);
&:hover{
    background-color: var(--dark-bg);
}
`
const ProfileWrapper = styled.div`
    grid-area:content;
    margin: 0rem auto;
    
`

const UserFollowWrapper = styled.div`
display: flex;
justify-content: space-evenly;
gap:1rem;
margin:1rem;
background-color: var(--card-bg);
border-radius: 6px;
padding: 0.5rem;
border: 2px solid var(--grey-border);
`
const UserFowllowLink = styled(Link)`
text-decoration: none;
display: flex;
flex-direction: column;
color:skyblue;
font-weight: bold;
&:visited{
    color: skyblue;
}
`
const UserFollowCount = styled.span`
    color: var(--white);
    text-align: center;
`
const UserLink = styled.a`
color:skyblue;
`
const UserBio = styled.p`
max-width:350px;
text-align: center;
`
const UserDetailsWrapper = styled.div`
margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   
`
const Name = styled.h4`
    margin:0 0.5rem;
    font-size: 1.2rem;
`
const UserName = styled.p`
color:grey;
font-size: 1.2rem;
`;
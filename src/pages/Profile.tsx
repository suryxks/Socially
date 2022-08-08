import React from "react";
import styled from "styled-components";
import Avatar from '@mui/material/Avatar';
import { useAppDispatch, useAppSelector } from "app/hooks";
import { AppNavbar, PostCard } from "app/components";
import { PageWrapper } from "./Home";
import { Link } from "react-router-dom";

export const Profile = () => {
    const profile = useAppSelector(state => state.auth.userData)
    const posts = useAppSelector(state => state.posts)
    const userPosts=posts.posts.filter(post => post.username === profile?.username)
    return (
        <PageWrapper>
            <AppNavbar />
            <ProfileWrapper>
                <Avatar alt={profile?.username} src={profile?.avatarURL} sx={{ height: 120, width: 120, border: '2px solid grey', margin: '1rem auto' }} />
                <UserDetailsWrapper>
                    <Name>{`${profile?.firstName + " "}${profile?.lastName}`}</Name>
                    <UserName>{`${'@' + profile?.username}`}</UserName>
                    <UserBio>{profile?.bio}</UserBio>
                    <UserLink href={profile?.website} target='_blank'>{profile?.website}</UserLink>
                    <UserFollowWrapper>
                        <UserFowllowLink to='/'><UserFollowCount>{`${profile?.following.length} `}</UserFollowCount><span>Following </span></UserFowllowLink>
                        <UserFowllowLink to='/'><UserFollowCount>{`${profile?.followers.length} `}</UserFollowCount><span>Followers</span></UserFowllowLink>
                    </UserFollowWrapper>
                </UserDetailsWrapper>
                {userPosts.map(post => <PostCard post={post} key={post._id } />)}
            </ProfileWrapper>
        </PageWrapper>)
}

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
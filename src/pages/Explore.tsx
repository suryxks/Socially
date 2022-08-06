import React from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { RootState } from 'app/store';
import { AppNavbar, PostCard } from 'app/components';
import { getExplorePosts } from 'utils';
import styled from 'styled-components';
import { post } from 'app/types';

export const Explore = () => {
    const auth = useAppSelector((state: RootState) => state.auth)
    const { userData } = auth;
    const following = userData ? userData.following : [];
    const posts: post[] = useAppSelector(state => state.posts.posts)
    const explorePosts = getExplorePosts(following, posts)
    return (
        <ExploreWrapper>
            <AppNavbar />
            <PostDisplay>{
                explorePosts.map(post => (
                    <PostCard key={post._id} post={post} />
                ))
            }</PostDisplay>
        </ExploreWrapper>
    )
}

const ExploreWrapper = styled.div`
display: grid;
overflow-y: auto;
grid-template-columns: 2fr 10fr;
grid-template-areas: 
"navbar content"
;
`
export const PostDisplay = styled.section`
grid-area:content;
margin: 0 auto;

`
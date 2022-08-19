import React from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { RootState } from 'app/store';
import { AppNavbar, PostCard, FoLLowUserSuggestion } from 'app/components';
import { getExplorePosts } from 'utils';
import styled from 'styled-components';
import { post } from 'app/types';

export const Explore = () => {
    const auth = useAppSelector((state: RootState) => state.auth)
    const { userData } = auth;
    const following = userData ? userData.following : [];
    const posts: post[] = useAppSelector(state => state.posts.posts)
    let explorePosts: post[] = [];
    if (userData) {
        explorePosts = getExplorePosts(following, posts, userData)
    }

    return (
        <ExploreWrapper>
            <AppNavbar />
            <PostDisplay>{
                explorePosts?.map((post: post) => (
                    <PostCard key={post._id} post={post} />
                ))
            }
                <EmptyState>You are all cought up</EmptyState>
            </PostDisplay>

            <FoLLowUserSuggestion />
        </ExploreWrapper>
    )
}

const ExploreWrapper = styled.div`
display: grid;
overflow-y: auto;
grid-template-columns: 2fr 5fr 3fr;
grid-template-areas: 
"navbar content suggestion"
;
@media (max-width: 550px){
    grid-template-areas: 
    "content content",
    "navbar navbar"
}


@media(max-width:1100px) {
    grid-template-areas: 
    "content content",
    "navbar navbar";
}
`
export const EmptyState = styled.div`
    border:4px dashed var(--grey-border);
    border-radius: 8px;
    min-width: 550px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: bold;
    margin: 1rem;
    padding: 1rem;
    @media(max-width:1100px),(min-width:550px){
        max-width: 350px;
        width: 350px;
        min-width: 350px;
    }
`
export const PostDisplay = styled.section`
grid-area:content;
margin: 0 auto;

`
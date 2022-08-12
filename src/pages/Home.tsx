import React from 'react';
import styled from 'styled-components';
import { AppNavbar, PostCard } from 'app/components';
import { PostDisplay } from './Explore';
import { useAppSelector } from 'app/hooks';
import { post } from 'app/types';
import { RootState } from 'app/store';
import { getRelatedPosts } from 'utils';
export const Home = () => {
    const auth = useAppSelector((state: RootState) => state.auth)
    const { userData } = auth;
    const following = userData ? userData.following : [];
    const posts: post[] = useAppSelector(state => state.posts.posts)
    let relatedPosts;
    if (userData) {

        relatedPosts = getRelatedPosts(following, posts,userData)
    }
    return (
        <PageWrapper>
            <AppNavbar />
            <PostDisplay >
                {relatedPosts?.map(post =>
                    <PostCard post={post} key={post._id} />
                )}
            </PostDisplay>
        </PageWrapper>);
}

export const PageWrapper = styled.div`
display: grid;
overflow-y: auto;
grid-template-columns: 2fr 10fr;
grid-template-areas: 
"navbar content"
`;

import React from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { RootState } from 'app/store';
import { AppNavbar, PostCard } from 'app/components';
import { EmptyState } from './Explore';
import styled from 'styled-components';
import { post } from 'app/types';

export const BookMarks = () => {
    const auth = useAppSelector((state: RootState) => state.auth)
    const { userData } = auth;
    const bookmarks = useAppSelector((state: RootState) => state.bookmarks.bookmarks)

    return (
        <BookMarksWrapper>
            <AppNavbar />
            <PostDisplay>{
                bookmarks.length > 0 ?
                    bookmarks.map((post: post) => (
                        <PostCard key={post._id} post={post} />
                    )) : <EmptyState>You dont have any Bookmarks</EmptyState>
            }</PostDisplay>
        </BookMarksWrapper>
    )
}

const BookMarksWrapper = styled.div`
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
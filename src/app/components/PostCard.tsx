import { post } from "app/types";
import React from "react";
import styled from "styled-components";
import Avatar from '@mui/material/Avatar';
import { useAppSelector, useAppDispatch } from "app/hooks";
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { FaRegCommentAlt } from 'react-icons/fa';
import { MdBookmarkBorder, MdBookmark } from 'react-icons/md';
import { authStateSelector } from "features/authentication/authSlice";
import { bookMarksSelector, addToBookmarks, removeFromBookmarks } from "features/bookmarks/bookmarksSlice";
import { likePost, dislikePost } from "features/posts/postsSlice";

export const PostCard = (props: { post: post }) => {
    const { _id: postId, avatarURL, firstName, lastName, username: postedBy, content, likes } = props.post;
    const dispatch = useAppDispatch();
    const authData = useAppSelector(authStateSelector);
    const bookmarks = useAppSelector(bookMarksSelector)
    const { username, encodedToken: token } = authData;
    const { likedBy, likeCount } = likes;
    const isBookmarked = bookmarks.find(post => post._id === postId) ? true : false;
    const isLikedByuser = likedBy.find(user => user.username === username) ? true : false;
    return (
        <PostWrapper key={postId}>
            <User>
                <Avatar src={avatarURL} alt={postedBy} />
                <UserDetailsWrapper>
                    <Name>{`${firstName + " "}${lastName}`}</Name>
                    <UserName>{`${'@' + postedBy}`}</UserName>
                </UserDetailsWrapper>
            </User>
            <PostContent>{content}</PostContent>
            <PostActions>
                < ActionContainer>
                    {isLikedByuser ? (<LikeFilled onClick={() => { dispatch(dislikePost({ token, postId })) }} />)
                        : (<Like onClick={() => { dispatch(likePost({ token, postId })) }} />)}
                    <Span>{likeCount > 0 ? likeCount : ''}</Span>
                </ActionContainer>
                <ActionContainer>
                    <CommentIcon />
                </ActionContainer>
                <ActionContainer>
                    {isBookmarked ?
                        <BookmarkFilled onClick={() => { dispatch(removeFromBookmarks({ token, postId })) }} /> :
                        <BookMarkIcon onClick={() => { dispatch(addToBookmarks({ token, postId })) }} />
                    }
                </ActionContainer>
            </PostActions>
        </PostWrapper>)
}
const ActionContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap:5px;
`
const Span = styled.span``;
const Like = styled(AiOutlineHeart)`
    font-size: 1.3rem;
    margin-left: 1rem;
    cursor: pointer;
`
const BookmarkFilled = styled(MdBookmark)`
    font-size: 1.3rem;
    margin-right: 1rem;
    cursor: pointer;
    color: var(--cta);
`
const LikeFilled = styled(AiFillHeart)`
    font-size: 1.3rem;
    margin-left: 1rem;
    color:red;
    cursor: pointer;
    transform: transition;
    `
const CommentIcon = styled(FaRegCommentAlt)`
    font-size: 1.3rem;
    cursor: pointer;
`
const BookMarkIcon = styled(MdBookmarkBorder)`
    font-size: 1.3rem;
    margin-right: 1rem;
    cursor: pointer;
`
const PostContent = styled.p`
    margin: 1rem;
`
const PostActions = styled.div`
    display: flex;
    align-items: center;
    justify-content:space-between;
`
const PostWrapper = styled.article`
    max-width: 650px;
    background-color: var(--card-bg);
    border: 2px solid var(--grey-border);
    border-radius: 8px;
    justify-content: center;
    margin: 1rem;
    padding: 1rem;
`
const UserDetailsWrapper = styled.div`
    display: flex;
`
const User = styled.div`
    display: flex;
    align-items: center;
`
const Name = styled.p`
    margin:0 0.5rem;
`
const UserName = styled.p`
color:grey
`;
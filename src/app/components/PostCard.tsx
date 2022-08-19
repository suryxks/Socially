import { post } from "app/types";
import React from "react";
import styled from "styled-components";
import Avatar from '@mui/material/Avatar';
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "app/hooks";
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { FaRegCommentAlt } from 'react-icons/fa';
import { MdBookmarkBorder, MdBookmark, MdMoreVert } from 'react-icons/md';
import { authStateSelector } from "features/authentication/authSlice";
import { bookMarksSelector, addToBookmarks, removeFromBookmarks } from "features/bookmarks/bookmarksSlice";
import { likePost, dislikePost, deletePost } from "features/posts/postsSlice";
import { RootState } from "app/store";

export const PostCard = (props: { post: post }) => {
    const { _id: postId, avatarURL, firstName, lastName, username: postedBy, content, likes, comments } = props.post;
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const authData = useAppSelector(authStateSelector);
    const bookmarks = useAppSelector(bookMarksSelector);
    const postUserData = useAppSelector((state: RootState) => state.users.users.find(user => user.username === postedBy));
    const { username, encodedToken: token } = authData;
    const { likedBy, likeCount } = likes;
    const isBookmarked = bookmarks.find(post => post._id === postId) ? true : false;
    const isLikedByuser = likedBy.find(user => user.username === username) ? true : false;
    return (
        <PostWrapper key={postId} onClick={() => { navigate(`/posts/${postId}`) }}>
            <FlexContainer>
                <User to={`/profile/${postUserData?.username}`} onClick={(e) => { e.stopPropagation() }}>
                    <Avatar src={avatarURL} alt={postedBy} />
                    <UserDetailsWrapper>
                        <Name>{`${firstName + " "}${lastName}`}</Name>
                        <UserName >{`${'@' + postedBy}`}</UserName>
                    </UserDetailsWrapper>
                </User>
                {username === postedBy ? <DeleteButton
                    onClick={(e) => {
                        e.stopPropagation()
                        dispatch(deletePost({ token, postId }))
                    }}>delete</DeleteButton> : null}
            </FlexContainer>
            <PostContent>{content}</PostContent>
            <PostActions>
                < ActionContainer>
                    {isLikedByuser ? (<LikeFilled
                        onClick={(e) => {
                            e.stopPropagation()
                            dispatch(dislikePost({ token, postId }))
                        }} />)
                        : (<Like
                            onClick={(e) => {
                                e.stopPropagation();
                                dispatch(likePost({ token, postId }))
                            }} />)}
                    <Span>{likeCount > 0 ? likeCount : ''}</Span>
                </ActionContainer>
                <ActionContainer>
                    <CommentIcon />
                    <Span>{comments.length > 0 ? comments.length : ''}</Span>
                </ActionContainer>
                <ActionContainer>
                    {isBookmarked ?
                        <BookmarkFilled
                            onClick={(e) => {
                                e.stopPropagation();
                                dispatch(removeFromBookmarks({ token, postId }))
                            }} /> :
                        <BookMarkIcon
                            onClick={(e) => {
                                e.stopPropagation()
                                dispatch(addToBookmarks({ token, postId }))
                            }} />
                    }
                </ActionContainer>
            </PostActions>
        </PostWrapper>)
}
const DeleteButton = styled.button`
background-color: var(--card-bg);
border:none;
color:var(--cta);
font-weight: bold;
margin-left: auto;
&:hover{
    cursor: pointer;
    color:var(--btn-hover)
}
`
const FlexContainer = styled.div`
    display: flex;
    align-items: center;
`
const ActionContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap:5px;
`
const MoreIcon = styled(MdMoreVert)`
 font-size: 1.3rem;
 margin-left: auto;
 border-radius: 50%;
 cursor:pointer;
 &:hover{
    background-color: var(--grey-border);
 }
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
    cursor: pointer;
    min-width: 650px;
    @media (max-width: 550px){
        width: 350px;
         max-width: 350px;
         min-width: 350px;
}


@media(max-width:1100px)and(min-width:550px){
    width: 550px;
         max-width: 550px;
         min-width: 550px;
}
`
const UserDetailsWrapper = styled.div`
    display: flex;
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
  `
const Name = styled.p`
    margin:0 0.5rem;
`
const UserName = styled.p`
color:grey

`;
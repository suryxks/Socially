import { post } from "app/types";
import React from "react";
import styled from "styled-components";
import Avatar from '@mui/material/Avatar';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { FaRegCommentAlt } from 'react-icons/fa';
import { MdBookmarkBorder, MdBookmark } from 'react-icons/md';

export const PostCard = (props: { post: post }) => {
    const { _id, avatarURL, firstName, lastName, username, content } = props.post;
    return (
        <PostWrapper key={_id}>
        <User>
            <Avatar src={avatarURL} alt={username} />
            <UserDetailsWrapper>
                <Name>{`${firstName + " "}${lastName}`}</Name>
                <UserName>{`${'@' + username}`}</UserName>
            </UserDetailsWrapper>
        </User>
        <PostContent>{content}</PostContent>
        <PostActions>
            <Like />
            <CommentIcon />
            <BookMarkIcon />
        </PostActions>
    </PostWrapper>)
}
const Like = styled(AiOutlineHeart)`
    font-size: 1.3rem;
    margin-left: 1rem;
`
const CommentIcon = styled(FaRegCommentAlt)`
    font-size: 1.3rem;
`
const BookMarkIcon = styled(MdBookmarkBorder)`
    font-size: 1.3rem;
    margin-right: 1rem;
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
import React, { useState } from "react";
import styled from "styled-components";
import Avatar from '@mui/material/Avatar';
import { useParams, Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "app/hooks";
import { AppNavbar, PostCard, ButtonCta } from "app/components";
import { postComment, deleteComment } from "features/posts/postsSlice";
import { authStateSelector } from "features/authentication/authSlice";
import { RootState } from "app/store";

export const SinglePostPage = () => {
    const { postId } = useParams();
    const [comment, setComment] = useState<string>('');
    const auth = useAppSelector(authStateSelector);
    const { encodedToken: token, userData } = auth;
    const dispatch = useAppDispatch();
    const post = useAppSelector((state: RootState) => state.posts.posts.find(post => post._id === postId))

    const comments = post?.comments;
    return (
        <SinglePostWrapper>
            <AppNavbar />
            <PostDisplay>
                {post ? <PostCard key={post?._id} post={post} /> : null}
                <CommentsContainer>
                    <Label htmlFor="comment">Your Reply</Label>
                    <CommentInput value={comment} onChange={(e) => setComment(e.target.value)} id='comment' />
                    <CommentButton onClick={() => {
                        if (comment.length > 0 && postId) {
                            const commentData = {
                                text: comment
                            }
                            dispatch(postComment({ commentData, token, postId }))
                            setComment('');
                        }
                    }
                    }>Comment</CommentButton>
                    <Comments>
                        {comments?.map(comment => {
                            const { firstName, username, lastName, avatarURL, _id: commentId, text } = comment;
                            const isCurrentUser = username === userData?.username;
                            return (
                                <CommentCard key={commentId}>
                                    <FlexContainer>
                                        <User to={`/profile/${username}`}>
                                            <Avatar src={avatarURL} alt={username} />
                                            <UserDetailsWrapper>
                                                <Name>{`${firstName + " "}${lastName}`}</Name>

                                            </UserDetailsWrapper>
                                        </User>
                                        {isCurrentUser ? (<DeleteButton onClick={() => {
                                            if (postId) {
                                                dispatch(deleteComment({ token, postId, commentId }))
                                            }
                                        }}>delete</DeleteButton>) : ''}

                                    </FlexContainer>
                                    <Text>{text}</Text>
                                </CommentCard>)
                        }
                        )}
                    </Comments>
                </CommentsContainer>
            </PostDisplay>

        </SinglePostWrapper >
    )
}
const CommentCard = styled.div`
 display: flex;
 flex-direction: column;
 margin: 0.5rem;
 background-color: var(--dark-bg);
 padding: 1rem;
 border-radius:4px ;
`;
const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const DeleteButton = styled.button`
background-color: var(--dark-bg);
border:none;
color:var(--cta);
font-weight: bold;
&:hover{
    cursor: pointer;
    color:var(--btn-hover)
}
`
const Comments = styled.div`
    display: flex;
    flex-direction: column;
`
const UserDetailsWrapper = styled.div`
    display: flex;
`
const Text = styled.div`
margin-left:3rem`
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


const CommentsContainer = styled.div`
    background-color: var(--card-bg);
    border: 2px solid var(--grey-border);
    margin-left: 1rem;
    border-radius: 4px;
    min-width: 650px;
    display: flex;
    /* align-items: center; */
    justify-content: center;
    flex-direction: column;
    @media (max-width: 550px){
      min-width: 350px;
      max-width: 350px;
      width: 350px;
}


@media(max-width:1100px)and(min-width:551px) {
    min-width: 550px;
      max-width: 550px;
      width: 550px;
}
`
const Label = styled.label`
    font-size: 1.3rem;
    margin: 1rem 0 0 1.5rem;
`
const CommentButton = styled(ButtonCta)`
    margin: 0rem 2rem 1rem auto;
`
const CommentInput = styled.textarea`
 width:90%;
 background-color: var(--dark-bg);
 border-radius:4px;
 height: 100px;
 margin: 1rem auto;
 color: var(--white);
`
const SinglePostWrapper = styled.div`
display: grid;
overflow-y: auto;
grid-template-columns: 2fr 10fr;
grid-template-areas: 
"navbar content";
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
;
`
export const PostDisplay = styled.section`
grid-area:content;
margin: 0 auto;
max-width: 650px;
`
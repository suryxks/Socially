import React, { useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { MdClose } from 'react-icons/md';
import { ButtonCta } from "./ButtonCta";
import { closePostModal } from '../../features/modals/modalSlice';
import { useAppDispatch, useAppSelector } from '../hooks';
import { authStateSelector } from "features/authentication/authSlice";
import { createPost } from "features/posts/postsSlice";
type modalProps = {
    isOpen: boolean,
    content: string
}
export const PostModal = ({ isOpen, content }: modalProps) => {
    const [postContent, setPostContent] = useState<string>(content)
    const dispatch = useAppDispatch();
    const auth = useAppSelector(authStateSelector);
    const { encodedToken: token } = auth;
    if (!isOpen) return null;

    return createPortal(
        <PostModalWrapper>
            <PostModalContainer>
                <CloseButton onClick={() => {
                    dispatch(closePostModal())
                    setPostContent('')
                }}><MdClose /></CloseButton>
                <ModalHeading>{content ? 'Edit Post' : 'Create Post'}</ModalHeading>
                <PostTextArea value={postContent} onChange={e => setPostContent(e.target.value)} />
                <PostButton
                    disabled={postContent === '' ? true : false}
                    onClick={() => {
                        dispatch(createPost({ token, postContent }))
                        setPostContent('');
                        dispatch(closePostModal())
                    }}
                >Post</PostButton>
            </PostModalContainer>

        </PostModalWrapper>,
        document.body
    )
}
const ModalHeading = styled.h4`
    color: var(--white);
    margin: 0.5rem 1rem;
    text-align: left;
    font-size: 1.3rem;
    font-weight: bold;
    margin-right: auto;
`
const PostModalWrapper = styled.div`
    background-color: rgba(0, 0, 0, 0.8);
    position: absolute;
    top:0;
    left:0;
    right: 0;
    bottom: 0;
    z-index: 5;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`
const PostModalContainer = styled.div`
display: flex;
border-radius:4px;
flex-direction: column;
align-items: center;
justify-content: center;
width: 350px;
max-width: 350px;
height: fit-content;
padding: 1rem;
background-color:var(--card-bg);
`
const PostTextArea = styled.textarea`
background-color: var(--dark-bg);
padding:1rem;
color:var(--white);
border-radius: 4px;
border:none;
outline: none;
width: 300px;
height: 200px;
margin-bottom: 1rem;

&:focus{
    outline: 1px solid var(--white);
}
`
const CloseButton = styled.button`
margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding:5px;
    border: none;
    border-radius: 4px;
    border: 2px solid var(--grey-border);
    
    background-color: var(--dark-bg);
    color:var(--white);
    &:focus{
        border: 4px solid var(--cta);
    }
    &:hover{
        border: 2px solid var(--white);
        cursor: pointer;
    }
`
const PostButton = styled(ButtonCta)`
    margin-left:auto;
    padding: 2px 8px;
`
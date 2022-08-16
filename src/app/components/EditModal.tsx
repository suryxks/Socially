import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { authStateSelector, editUser } from "features/authentication/authSlice";
import { closeEditModal } from "features/modals/modalSlice";
import { MdClose } from "react-icons/md";
import { createPortal } from "react-dom";
import { ButtonCta } from "./ButtonCta";
type editmodalProps = {
    isOpen: boolean,
    website: string,
    bio: string,
}
export const EditModal = ({ isOpen, website, bio }: editmodalProps) => {
    const [websiteUrl, setWebsiteUrl] = useState<string>(website);
    const [profilebio, setBio] = useState<string>(bio)
    const dispatch = useAppDispatch();
    const auth = useAppSelector(authStateSelector);
    const { userData } = auth;
    const { encodedToken: token } = auth;
    useEffect(() => {
        if (userData) {
            setWebsiteUrl(userData.website);
            setBio(userData.bio);
        }
    }, [])
    if (!isOpen) return null;

    return createPortal(
        <PostModalWrapper>
            <PostModalContainer>
                <CloseButton onClick={() => {
                    dispatch(closeEditModal())
                }}><MdClose /></CloseButton>
                <ModalHeading>Edit Profile</ModalHeading>
                <Label htmlFor="bio">Bio</Label>
                <BioTextArea value={profilebio} onChange={(e) => { setBio(e.target.value) }} />
                <Label htmlFor="website">Website</Label>
                <Input value={websiteUrl} onChange={(e) => { setWebsiteUrl(e.target.value) }} />
                <EditButton
                    onClick={() => {
                        console.log(profilebio)
                        const userDetails = {
                            website: websiteUrl,
                            bio: profilebio,
                            avatarURL: userData ? userData.avatarURL : '',
                        }
                        dispatch(editUser({ userDetails, token }))
                        dispatch(closeEditModal())
                    }}
                >edit</EditButton>
            </PostModalContainer>

        </PostModalWrapper>,
        document.body
    )
}
const Label = styled.label`
    color: var(--white);
    font-weight: bold;
    margin-left: 1rem;
`
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
/* align-items: center; */
justify-content: center;
width: 350px;
max-width: 350px;
height: fit-content;
padding: 1rem;
background-color:var(--card-bg);
`
const BioTextArea = styled.textarea`
background-color: var(--dark-bg);
padding:1rem;
color:var(--white);
border-radius: 4px;
border:none;
outline: none;
width: 300px;
height: 100px;
margin: 0.3rem auto;
overflow-x: auto;
&:focus{
    outline: 1px solid var(--white);
}
`
const Input = styled.input`
    background-color: var(--dark-bg);
    color:var(--white);
   
    padding: 0.3rem;
    border-radius: 4px;
    width: 300px;
    border: none;
    margin: 0.3rem auto;
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
const EditButton = styled(ButtonCta)`
    margin:0.5rem 0.5rem 0.5rem auto;
    padding: 2px 8px;
`
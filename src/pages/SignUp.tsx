import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom'
import { ButtonCta } from "app/components/ButtonCta";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { signup, authStateSelector } from "features/authentication/authSlice";
import { signUpdata } from "../app/types";
import { StyledLink } from "app/components/StyledLink";

export const SignUp = () => {
    const dispatch = useAppDispatch();
    const authState = useAppSelector(authStateSelector);
    const [formData, setFormData] = useState<signUpdata>({
        username: '',
        password: '',
        firstname: '',
        lastname: '',
    })
   
    const navigate = useNavigate()
    return <LoginPageWrapper>
        <Wrapper>
            <h1><Brand>Sign Up</Brand></h1>
            <h3>To enjoy all cool features</h3>
            <Form>
                <label htmlFor="firstname">firstname</label>
                <Input
                    type='text'
                    id='firstname'
                    placeholder="firstname"
                    required={true}
                    value={formData.firstname}
                    min={18}
                    onChange={(e) => setFormData(state => ({ ...state, firstname: e.target.value }))} />
                <label htmlFor="lastname">lastname</label>
                <Input
                    type='text'
                    id='lastname'
                    placeholder="lastname"
                    required={true}
                    value={formData.lastname}
                    min={18}
                    onChange={(e) => setFormData(state => ({ ...state, lastname: e.target.value }))} />
                <label htmlFor="username">Username</label>
                <Input
                    type='text'
                    id='username'
                    placeholder="userName"
                    required={true}
                    value={formData.username}
                    min={18}
                    onChange={(e) => setFormData(state => ({ ...state, username: e.target.value }))} />
                <label htmlFor="password">Password</label>
                <Input
                    type='password'
                    id='password'
                    placeholder="password"
                    required={true}
                    value={formData.password}
                    onChange={(e) => setFormData(state => ({ ...state, password: e.target.value }))} />
                <FormButton onClick={(e) => {
                    e.preventDefault()
                    if (!formData.username || !formData.password) {
                        alert('please enter username and password')
                    } else {
                        dispatch(signup(formData))
                        setFormData({ username: '', password: '', firstname: '', lastname: '' })
                        navigate('/home')
                    }
                }}
                >SignUp</FormButton>


                <div> Already have an account?<StyledLink to='/'>{`Login`}</StyledLink></div>
            </Form>
        </Wrapper>

    </LoginPageWrapper>
}

export const Wrapper = styled.div`
    text-align:center;
`
export const Brand = styled.span`
color:var(--cta)
`

export const LoginPageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    grid-area: appcontent;
    padding: 1rem;
    @media(max-width: 550px) {
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
   }
`
export const FormButton = styled(ButtonCta)`
width:100%;
margin-top:0.5rem;
`
export const OutLinedFormButton = styled(FormButton)`
 background-color: var(--card-bg);
`;
export const Image = styled.img`
    border-radius: 4px;
    width: 500px;
    @media  (max-width: 550px) {
        display: none;
   }
   @media  (max-width: 1100px) {
        display: none;
   }
`
export const Form = styled.form`
    background-color: var(--card-bg);
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    justify-content: center;
    height: fit-content;
    padding:2rem;
    gap:0.8rem;
    border-radius:0.5rem;
    border:2px solid var(--grey-border)

`
export const Input = styled.input`
    background-color: var(--dark-bg);
    border-radius: 4px;
    padding:0.5rem;
    border: none;
    width:100%;
    color:var(--white);
    &:active{
        outline: 4px solid var(--grey-border); 
        border: none;
    }
`
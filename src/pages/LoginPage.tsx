import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ButtonCta } from "app/components/ButtonCta";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { login ,authStateSelector} from "features/authentication/authSlice";
export type authFormData = {
    username: string,
    password: string,
}

const guestCredentials: authFormData = {
    username: 'reactDev',
    password: 'Sashaboi'
}

export const LoginPage = () => {
    const dispatch = useAppDispatch();
    const authState=useAppSelector(authStateSelector);
    const [formData, setFormData] = useState<authFormData>({
        username: '',
        password: ''
    })
    useEffect(()=>{
      if(authState.isAuthenticated){
        localStorage.setItem('username',authState.username)
        localStorage.setItem('encodedToken',authState.encodedToken)
      }
      return ()=>localStorage.clear()
    },[authState])
    return <LoginPageWrapper>
        <Image src='https://res.cloudinary.com/dxdefqayz/image/upload/v1658850576/Socially/Saly-1245_eqly7l_ycbrrw.png' alt='hero-image' />
        <Wrapper>
            <h1>The Ultimate<Brand> Social</Brand>  app</h1>
            <h1>Join <Brand> Socially</Brand> </h1>
            <Form>
                <label htmlFor="username">Username</label>
                <Input
                    type='text'
                    id='username'
                    placeholder="userName"
                    required={true}
                    value={formData.username}
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
                    dispatch(login(formData))
                    setFormData({username:'',password:''})
                }}
                    >login</FormButton>
                <OutLinedFormButton onClick={(e) => {
                    e.preventDefault()
                    setFormData(guestCredentials)}}
                    >Use guest login</OutLinedFormButton>
            </Form>
        </Wrapper>
    </LoginPageWrapper>
}

const Wrapper = styled.div`
    text-align:center;
`
const Brand = styled.span`
color:var(--cta)
`

const LoginPageWrapper = styled.div`
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
const FormButton = styled(ButtonCta)`
width:100%;
margin-top:0.5rem;
`
const OutLinedFormButton = styled(FormButton)`
 background-color: var(--card-bg);
`;
const Image = styled.img`
    border-radius: 4px;
    width: 500px;
    @media  (max-width: 550px) {
        display: none;
   }
`
const Form = styled.form`
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
const Input = styled.input`
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
import React, { useEffect } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { Header } from "app/components/Header";
import { AppRoutes } from "app/Routes";
import { GlobalStyles } from "GlobalStyles";
import { getAllPosts } from './features/posts/postsSlice'
import { authStateSelector, login } from "features/authentication/authSlice";
import { getUsers } from "features/users/usersSlice";
import { Toast } from "app/components/Toast";


function App() {
  const dispatch = useAppDispatch();
  const authState = useAppSelector(authStateSelector)
  useEffect(() => {
    if (authState.isAuthenticated) {
      localStorage.setItem('username', authState.username)
      localStorage.setItem('encodedToken', authState.encodedToken)
      dispatch(getAllPosts())
      dispatch(getUsers())
    }
    return () => localStorage.clear()
  }, [authState])
  return (
    <AppWrapper>
      <Header />
      <AppRoutes />
      <GlobalStyles />
      <Toast/>
    </AppWrapper>
  );
}
const AppWrapper = styled.div`
  background-color: var(--dark-bg);
  color:white;
  height: 100vh;
width: 100%;
margin: 0;
display: grid;
grid-template-rows: 1fr 15fr;
grid-template-areas: 
'header'
'appcontent'
;
`
export default App;

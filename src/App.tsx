import React from "react";
import styled from "styled-components";
// import { useAppDispatch } from "app/hooks";
import { Header } from "app/components/Header";
import { LoginPage } from "pages/LoginPage";
import { GlobalStyles } from "GlobalStyles";
import "./App.css";


function App() {
  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(login({ username: 'reactDev', password: 'Sashaboi' }))
  // }, [])
  return (
    <AppWrapper>
      <Header/>
       <LoginPage/>
      <GlobalStyles />
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

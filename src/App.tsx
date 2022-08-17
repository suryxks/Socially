import React, { useEffect } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { Header } from "app/components/Header";
import { PostModal } from "app/components/PostModal";
import { AppRoutes } from "app/Routes";
import { EditModal } from "app/components";
import { GlobalStyles } from "GlobalStyles";
import { getAllPosts } from './features/posts/postsSlice'
import { authStateSelector} from "features/authentication/authSlice";
import { getUsers } from "features/users/usersSlice";
import { getAllBookmarks } from "features/bookmarks/bookmarksSlice";
import { postModalSelector } from "features/modals/modalSlice";
import { Toast } from "app/components/Toast";

function App() {
  const dispatch = useAppDispatch();
  const authState = useAppSelector(authStateSelector)
  const postModalState = useAppSelector(postModalSelector);
  const editModalState = useAppSelector(state => state.modal.editProfile);
  const { isOpen, content } = postModalState;
  const { userData } = authState;
  const website = userData?userData.website:'';
  const bio = userData?userData.bio:'';
  useEffect(() => {
    if (authState.isAuthenticated) {
      
      localStorage.setItem('username', authState.username)
      localStorage.setItem('encodedToken', authState.encodedToken)
      dispatch(getAllPosts())
      dispatch(getUsers())
      dispatch(getAllBookmarks(authState.encodedToken))
    }
  }, [authState.isAuthenticated])
  return (
    <AppWrapper>
      <Header />
      <AppRoutes />
      <GlobalStyles />
      <Toast />
      <PostModal isOpen={isOpen} content={content} />
      <EditModal isOpen={editModalState.isOpen} website={website} bio={bio}/>
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

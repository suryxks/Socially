import { RootState } from "./../../app/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type modalState = {
  postModal: {
    isOpen: boolean;
    content: string;
  };
};
const initialState: modalState = {
  postModal: {
    isOpen: false,
    content: "",
  },
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openPostModal: (state: modalState) => {
      state.postModal.isOpen = true;
    },
    closePostModal: (state: modalState) => {
      state.postModal.isOpen = false;
    },
    setPostModalContent: (state: modalState, action: PayloadAction<string>) => {
      state.postModal.content = action.payload;
    },
  },
});
export const postModalSelector = (state: RootState) => state.modal.postModal;
export const { openPostModal, closePostModal, setPostModalContent } =
  modalSlice.actions;
export default modalSlice.reducer;

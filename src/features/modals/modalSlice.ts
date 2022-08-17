import { RootState } from "./../../app/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type modalState = {
  postModal: {
    isOpen: boolean;
    content: string;
  };
  editProfile: {
    isOpen: boolean;
    website: string;
    bio: string;
  };
};
const initialState: modalState = {
  postModal: {
    isOpen: false,
    content: "",
  },
  editProfile: {
    isOpen: false,
    website: "",
    bio: "",
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
    openEditModal: (state: modalState) => {
      state.editProfile.isOpen = true;
    },
    closeEditModal: (state: modalState) => {
      state.editProfile.isOpen = false;
    },

  },
});
export const postModalSelector = (state: RootState) => state.modal.postModal;
export const { openPostModal, closePostModal, setPostModalContent ,openEditModal,closeEditModal} =
  modalSlice.actions;
export default modalSlice.reducer;

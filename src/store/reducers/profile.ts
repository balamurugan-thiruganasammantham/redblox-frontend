import { createSlice } from '@reduxjs/toolkit';
import { ProfileInfo } from '../../_types/profile';


interface ProfileState {
    profileInfo: ProfileInfo | null;
}

const initialProfileState: ProfileState = {
    profileInfo: null
};

const profileSlice = createSlice({
  name: 'profile',
  initialState: initialProfileState,
  reducers: {
    resetState: () => initialProfileState,
  },
  extraReducers: (builder) => {
  },
});

export const { resetState } = profileSlice.actions;

export default profileSlice;

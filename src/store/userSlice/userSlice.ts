import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { UserType } from '@types';

const initialState: UserType = {
    uid: '',
    email: '',
    name: '',
    dateOfBirth: '',
    refreshToken: '',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserType>) => {
            state.uid = action.payload.uid;
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.dateOfBirth = action.payload.dateOfBirth;
        },
    },
});

export const selectMode = (state: RootState) => state.user;

export default userSlice.reducer;

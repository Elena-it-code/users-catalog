import type { User } from '@/entities';
import { createSlice } from '@reduxjs/toolkit';

export type UserState = {
  users: User[];
  isLoading: boolean;
  error: string | null;
};

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
  },
});

export const userReducer = userSlice.reducer;

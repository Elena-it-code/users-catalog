import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { User } from './types';
import { fetchUsers } from './fetchUsers';

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
    deleteUser: (state, action: PayloadAction<number>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Failed to fetch users';
      });
  },
});

export const userReducer = userSlice.reducer;
export const { deleteUser } = userSlice.actions;

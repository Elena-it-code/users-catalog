import { createAsyncThunk } from '@reduxjs/toolkit';
import type { User } from './types';

const API_URL =
  import.meta.env.VITE_API_BASE_URL || 'https://jsonplaceholder.typicode.com';

export const fetchUsers = createAsyncThunk<
  User[],
  void,
  { rejectValue: string }
>('users/fetchUsers', async (_, { rejectWithValue }) => {
  try {
    const response = await fetch(`${API_URL}/users`);

    if (!response.ok) {
      return rejectWithValue(`Ошибка сервера: ${response.status}`);
    }

    return await response.json();
  } catch {
    return rejectWithValue('Network error! Check your connection.');
  }
});

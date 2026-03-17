import { describe, it, expect } from 'vitest';
import { deleteUser, userReducer } from './userSlice';
import type { User } from '@/entities';

describe('userSlice reducer', () => {
  it('should handle deleteUser', () => {
    const initialState = {
      users: [{ id: 1, name: 'Test User', email: 'test@test.com' } as User],
      isLoading: false,
      error: null,
    };

    const action = deleteUser(1);
    const newState = userReducer(initialState, action);

    expect(newState.users.length).toBe(0);
  });
});

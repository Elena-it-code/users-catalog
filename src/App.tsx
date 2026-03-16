import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsers } from '@/entities/user/model/userSlice.ts';
import type { AppDispatch, RootState } from '@/app/store.ts';
import { UserList } from '@/widgets/user-list';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { users, isLoading, error } = useSelector(
    (state: RootState) => state.users,
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;

  return (
    <div className="app">
      <UserList users={users} />
    </div>
  );
}

export default App;

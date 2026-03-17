import type { RootState } from '@/app/store.ts';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export const UserPage = () => {
  const users = useSelector((state: RootState) => state.users.users);
  const { id } = useParams();
  const userId = Number(id);

  const user = users.find((u) => u.id === userId);

  if (!user) {
    return <h1>User not found</h1>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <p>Company: {user.company.name}</p>
      <p>City: {user.address.city}</p>
    </div>
  );
};

import s from './UserPage.module.css';
import type { AppDispatch, RootState } from '@/app/store.ts';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteUser } from '@/entities/user/model/userSlice.ts';

export const UserPage = () => {
  const users = useSelector((state: RootState) => state.users.users);
  const { id } = useParams();
  const userId = Number(id);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const user = users.find((u) => u.id === userId);

  const goBackHandler = () => navigate(-1);
  const deleteUserHandler = () => {
    dispatch(deleteUser(userId));
    navigate('/');
  };

  if (!user) {
    return <h1>User not found</h1>;
  }

  return (
    <div className={s.container}>
      <button onClick={goBackHandler} className={s.backBtn}>
        ← Go Back
      </button>

      <div className={s.content}>
        <h1>{user.name}</h1>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
        <p>Company: {user.company.name}</p>
        <p>City: {user.address.city}</p>

        <button onClick={deleteUserHandler} className={s.deleteBtn}>
          Delete
        </button>
      </div>
    </div>
  );
};

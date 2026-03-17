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
        <p>
          <span className={s.label}>Email:</span> {user.email}
        </p>
        <p>
          <span className={s.label}>Phone:</span> {user.phone}
        </p>
        <p>
          <span className={s.label}>Website:</span> {user.website}
        </p>
        <p>
          <span className={s.label}>Company:</span> {user.company.name}
        </p>
        <p>
          <span className={s.label}>City:</span> {user.address.city}
        </p>

        <button onClick={deleteUserHandler} className={s.deleteBtn}>
          Delete User
        </button>
      </div>
    </div>
  );
};

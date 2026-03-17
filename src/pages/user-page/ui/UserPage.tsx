import s from './UserPage.module.css';
import type { AppDispatch, RootState } from '@/app/store.ts';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteUser } from '@/entities/user/model/userSlice.ts';
import { useState } from 'react';

export const UserPage = () => {
  const users = useSelector((state: RootState) => state.users.users);
  const { id } = useParams();
  const userId = Number(id);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [show, setShow] = useState(false);

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
      <div className={s.content}>
        <h1>{user.name}</h1>

        <div className={s.infoBlock}>
          <p>
            <span className={s.label}>Email:</span> {user.email}
          </p>
          <p>
            <span className={s.label}>Phone:</span> {user.phone}
          </p>
          <p>
            <span className={s.label}>Website:</span> {user.website}
          </p>

          {show && (
            <>
              <p>
                <span className={s.label}>Username:</span> {user.username}
              </p>
              <p>
                <span className={s.label}>Address:</span> {user.address.street},{' '}
                {user.address.suite}, {user.address.city}
              </p>
              <p>
                <span className={s.label}>Zipcode:</span> {user.address.zipcode}
              </p>
              <p>
                <span className={s.label}>Geo:</span> {user.address.geo.lat},{' '}
                {user.address.geo.lng}
              </p>
              <p>
                <span className={s.label}>Company:</span> {user.company.name}
              </p>
              <p>
                <span className={s.label}>Catchphrase:</span>{' '}
                {user.company.catchPhrase}
              </p>
              <p>
                <span className={s.label}>BS:</span> {user.company.bs}
              </p>
            </>
          )}
        </div>

        <div className={s.actions}>
          <button onClick={goBackHandler} className={s.backBtn}>
            ← Go Back
          </button>

          <button onClick={() => setShow(!show)} className={s.showMoreBtn}>
            {show ? 'Show less' : 'Show more'}
          </button>

          <button onClick={deleteUserHandler} className={s.deleteBtn}>
            Delete User
          </button>
        </div>
      </div>
    </div>
  );
};

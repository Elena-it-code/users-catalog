import s from './UserCard.module.css';
import type { User } from '@/entities';
import { deleteUser } from '@/entities/user/model/userSlice.ts';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/app/store.ts';
import * as React from 'react';
import { Link } from 'react-router-dom';

type UserCardProps = {
  user: User;
};

export const UserCard = ({ user }: UserCardProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const deleteUserHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(deleteUser(user.id));
  };

  return (
    <div className={s.card}>
      <Link to={`/user/${user.id}`} className={s.link}>
        <h3 className={s.name}>{user.name}</h3>
        <p className={s.email}>{user.email}</p>
        <p className={s.city}>{user.address.city}</p>
      </Link>

      <button onClick={deleteUserHandler} className={s.deleteBtn}>
        Delete Card
      </button>
    </div>
  );
};

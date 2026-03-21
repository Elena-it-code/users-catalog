import s from './MainPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '@/app/store';
import { useEffect, useMemo, useState } from 'react';
import { fetchUsers, UserCard } from '@/entities';
import { Grid, Input, Select } from '@/shared/ui';
import { getSortAndFilterUsers } from '@/shared/lib';

const SORT_OPTIONS = [
  { value: '', label: 'Sort by' },
  { value: 'asc', label: 'Name (A-Z)' },
  { value: 'desc', label: 'Name (Z-A)' },
];

export const MainPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users, isLoading, error } = useSelector(
    (state: RootState) => state.users,
  );
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');
  const [limit, setLimit] = useState(6);

  useEffect(() => {
    if (users.length === 0) {
      dispatch(fetchUsers());
    }
  }, [dispatch, users.length]);

  const filteredUsers = useMemo(
    () => getSortAndFilterUsers(users, search, sort),
    [users, search, sort],
  );

  const displayedUsers = filteredUsers.slice(0, limit);

  if (error)
    return <div className={s.error}>Something went wrong: {error}</div>;

  return (
    <div className={s.pageWrapper}>
      <div className={s.filterBar}>
        <Input
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={s.searchInput}
        />
        <Select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          options={SORT_OPTIONS}
          className={s.sortSelect}
        />
      </div>

      {isLoading && !users.length ? (
        <div className={s.loaderWrapper}>Loading users...</div>
      ) : (
        <Grid>
          {displayedUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </Grid>
      )}

      {limit < filteredUsers.length && (
        <button
          onClick={() => setLimit((prev) => prev + 6)}
          className={s.showMoreBtn}
        >
          Show more
        </button>
      )}
    </div>
  );
};

import s from './MainPage.module.css';
import { UserList } from '@/widgets/user-list';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '@/app/store';
import { useEffect, useState } from 'react';
import { fetchUsers } from '@/entities/user/model/userSlice';

export const MainPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users, isLoading, error } = useSelector(
    (state: RootState) => state.users,
  );
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');
  const [limit, setLimit] = useState(6);

  const filteredUsers = users
    .filter((u) => u.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === 'asc') return a.name.localeCompare(b.name);
      if (sort === 'desc') return b.name.localeCompare(a.name);
      return 0;
    });

  const displayedUsers = filteredUsers.slice(0, limit);

  useEffect(() => {
    if (users.length === 0) {
      dispatch(fetchUsers());
    }
  }, [dispatch, users.length]);

  return (
    <div className={s.pageWrapper}>
      <div className={s.filterBar}>
        <input
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={s.searchInput}
        />
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className={s.sortSelect}
        >
          <option value="">Sort by</option>
          <option value="asc">Name (A-Z)</option>
          <option value="desc">Name (Z-A)</option>
        </select>
      </div>

      {error ? (
        <div className={s.error}>Something went wrong: {error}</div>
      ) : isLoading ? (
        <div className={s.loaderWrapper}>Loading users...</div>
      ) : (
        <UserList users={displayedUsers} />
      )}

      {!isLoading && limit < filteredUsers.length && (
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

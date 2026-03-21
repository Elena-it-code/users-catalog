import type { User } from '@/entities';

export const getSortAndFilterUsers = (
  users: User[],
  search: string,
  sort: string,
) => {
  const filtered = users.filter((user) => {
    const fullName = user.name.toLowerCase();
    const userInput = search.toLowerCase();

    return fullName.includes(userInput);
  });

  if (sort === '') {
    return filtered;
  }

  const sorted = [...filtered].sort((a, b) => {
    return sort === 'asc'
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name);
  });

  return sorted;
};

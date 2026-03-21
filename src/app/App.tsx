import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { UserPage } from '@/pages/user-page';
import { MainPage } from '@/pages/main-page';
import { Header } from '@/shared/ui';
import { ROUTES } from '@/app/routes';

export const App = () => {
  return (
    <>
      <Header
        logo={
          <Link
            to={ROUTES.HOME}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            UsersCatalog
          </Link>
        }
      />
      <Routes>
        <Route path={ROUTES.HOME} element={<MainPage />} />;
        <Route path={ROUTES.USER} element={<UserPage />} />
        <Route path="*" element={<Navigate to={ROUTES.HOME} />} />
      </Routes>
    </>
  );
};

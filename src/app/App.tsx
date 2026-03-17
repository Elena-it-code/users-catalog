import { Navigate, Route, Routes } from 'react-router-dom';
import { UserPage } from '@/pages/user-page';
import { MainPage } from '@/pages/main-page';
import { Header } from '@/widgets/header/ui';
import { ROUTES } from '@/app/routes';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path={ROUTES.HOME} element={<MainPage />} />;
        <Route path={ROUTES.USER} element={<UserPage />} />
        <Route path="*" element={<Navigate to={ROUTES.HOME} />} />
      </Routes>
    </>
  );
};

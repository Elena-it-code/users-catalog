import { Navigate, Route, Routes } from 'react-router-dom';
import { UserPage } from '@/pages/user-page';
import { MainPage } from '@/pages/main-page';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />;
      <Route path="/user/:id" element={<UserPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;

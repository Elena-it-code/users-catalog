import s from './Header.module.css';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/app/routes';


export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <Link to={ROUTES.HOME} className={s.logo}>
          UsersCatalog
        </Link>
      </div>
    </header>
  );
};

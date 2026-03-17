import s from './Header.module.css';
import { Link } from 'react-router-dom';


export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <Link to="/" className={s.logo}>
          UsersCatalog
        </Link>
      </div>
    </header>
  );
};

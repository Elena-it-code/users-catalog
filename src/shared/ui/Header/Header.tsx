import s from './Header.module.css';
import { memo, type ReactNode } from 'react';

type HeaderProps = {
  logo?: ReactNode;
  className?: string;
};

export const Header = memo(({ logo, className }: HeaderProps) => {
  return (
    <header className={`${s.header} ${className || ''}`}>
      <div className={s.container}>
        {logo && <div className={s.logo}>{logo}</div>}
      </div>
    </header>
  );
});

Header.displayName = 'Header';

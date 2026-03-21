import s from './Grid.module.css';
import { memo, type ReactNode } from 'react';

type GridProps = {
  children: ReactNode;
  className?: string;
};

export const Grid = memo(({ children, className = '' }: GridProps) => {
  return <div className={`${s.grid} ${className}`}>{children}</div>;
});

Grid.displayName = 'Grid';

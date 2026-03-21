import s from './Input.module.css';
import { type InputHTMLAttributes, memo } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = memo(({ className, ...props }: InputProps) => {
  return <input className={`${s.input} ${className || ''}`} {...props} />;
});

Input.displayName = 'Input';

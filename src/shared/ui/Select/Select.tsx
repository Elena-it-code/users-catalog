import s from './Select.module.css';
import { memo, type SelectHTMLAttributes } from 'react';

type Option = {
  value: string;
  label: string;
};

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  options: Option[];
};

export const Select = memo(({ options, className, ...props }: SelectProps) => {
  return (
    <select className={`${s.select} ${className || ''}`} {...props}>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
});

Select.displayName = 'Select';

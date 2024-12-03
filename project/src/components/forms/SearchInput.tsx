import React from 'react';
import { UseFormRegister, FieldError } from 'react-hook-form';

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  error?: FieldError;
  icon: React.ReactNode;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  label,
  name,
  register,
  error,
  icon,
  className = '',
  ...props
}) => {
  return (
    <div className="relative">
      <label className="block text-sm font-semibold text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 rounded-lg -m-1 group-hover:from-blue-100/50 group-hover:to-indigo-100/50 transition-all duration-300 opacity-0 group-hover:opacity-100" />
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-600">
            {icon}
          </div>
          <input
            {...register(name)}
            {...props}
            className={`
              block w-full pl-10 pr-4 py-2.5 text-gray-900 placeholder-gray-500
              bg-white border border-gray-300 rounded-lg
              focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
              transition-colors duration-200
              ${error ? 'border-red-500' : 'hover:border-blue-400'}
              ${className}
            `}
          />
        </div>
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error.message}</p>
      )}
    </div>
  );
};
import React from 'react';
import { UseFormRegister, FieldError } from 'react-hook-form';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string; // Label text for the input
  name: string; // Field name for react-hook-form registration
  register: UseFormRegister<any>; // Register function from react-hook-form
  error?: Partial<FieldError>; // Optional FieldError
}

export const Input: React.FC<InputProps> = ({
  label,
  name,
  register,
  error,
  type = 'text',
  ...props
}) => {
  return (
    <div className="space-y-1">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        id={name}
        type={type}
        {...register(name)}
        {...props}
        aria-invalid={!!error}
        className={`block w-full rounded-md shadow-sm sm:text-sm
          focus:ring-blue-500 focus:border-blue-500
          ${error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300'}
        `}
      />
      {error?.message && (
        <p className="text-sm text-red-600">{error.message}</p>
      )}
    </div>
  );
};

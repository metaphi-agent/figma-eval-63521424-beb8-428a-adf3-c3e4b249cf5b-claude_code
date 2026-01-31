import { ReactNode, ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'outline' | 'coral' | 'green';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-[var(--color-crocus-purple)] text-white hover:bg-[#7366e6] active:bg-[#6656d9]',
  outline: 'bg-transparent border-2 border-[var(--color-fuel-yellow)] text-[var(--color-crocus-purple)] hover:bg-[var(--color-fuel-yellow)] hover:text-white',
  coral: 'bg-[var(--color-coral)] text-white hover:bg-[#e85a3c] active:bg-[#d94a2c]',
  green: 'bg-[var(--color-green)] text-white hover:bg-[#4aad6e] active:bg-[#3a9d5e]',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center
        font-semibold rounded-full
        transition-colors duration-150
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-crocus-purple)]
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}

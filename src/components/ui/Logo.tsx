type LogoVariant = 'purple' | 'coral' | 'green';

interface LogoProps {
  variant?: LogoVariant;
  className?: string;
}

const logoConfig: Record<LogoVariant, { icon: string; textColor: string }> = {
  purple: {
    icon: '#8976FD',
    textColor: '#180638',
  },
  coral: {
    icon: '#FF6B4A',
    textColor: '#180638',
  },
  green: {
    icon: '#5BC17F',
    textColor: '#180638',
  },
};

export default function Logo({ variant = 'purple', className = '' }: LogoProps) {
  const config = logoConfig[variant];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Logo Icon */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="40" height="40" rx="12" fill={config.icon} />
        <path
          d="M12 16.5C12 15.1193 13.1193 14 14.5 14H20.5C21.8807 14 23 15.1193 23 16.5V16.5C23 17.8807 21.8807 19 20.5 19H14.5C13.1193 19 12 17.8807 12 16.5V16.5Z"
          fill="white"
        />
        <path
          d="M17 23.5C17 22.1193 18.1193 21 19.5 21H25.5C26.8807 21 28 22.1193 28 23.5V23.5C28 24.8807 26.8807 26 25.5 26H19.5C18.1193 26 17 24.8807 17 23.5V23.5Z"
          fill="white"
          fillOpacity="0.6"
        />
      </svg>

      {/* Logo Text */}
      <span
        className="text-2xl font-bold"
        style={{ color: config.textColor, fontFamily: 'var(--font-heading)' }}
      >
        SaaSto
      </span>
    </div>
  );
}

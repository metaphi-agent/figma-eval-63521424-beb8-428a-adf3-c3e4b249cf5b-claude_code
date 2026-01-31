interface StatItem {
  value: string;
  label: string;
  icon?: string;
}

interface StatsProps {
  stats: StatItem[];
  variant?: 'grid' | 'row';
  showIcons?: boolean;
  className?: string;
}

const iconColors = [
  'bg-[#E8E4FF]', // Purple tint
  'bg-[#FFF4E6]', // Orange tint
  'bg-[#E6FFF0]', // Green tint
  'bg-[#FFE6E6]', // Red tint
];

export default function Stats({
  stats,
  variant = 'row',
  showIcons = false,
  className = '',
}: StatsProps) {
  return (
    <div
      className={`
        ${variant === 'grid'
          ? 'grid grid-cols-1 gap-8'
          : 'flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16'
        }
        ${className}
      `}
    >
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className={`
            flex items-center gap-4
            ${variant === 'grid' ? 'flex-col text-center' : ''}
          `}
        >
          {showIcons && (
            <div
              className={`
                w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center
                ${iconColors[index % iconColors.length]}
              `}
            >
              {stat.icon ? (
                <img
                  src={stat.icon}
                  alt=""
                  className="w-8 h-8 lg:w-10 lg:h-10"
                />
              ) : (
                <StatIcon index={index} />
              )}
            </div>
          )}
          <div className={variant === 'grid' ? '' : 'text-left'}>
            <p className="text-3xl lg:text-4xl font-bold text-[var(--color-bright-grey)]" style={{ fontFamily: 'var(--font-heading)' }}>
              {stat.value}
            </p>
            <p className="text-[var(--color-mid-grey)] text-sm lg:text-base mt-1">
              {stat.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

function StatIcon({ index }: { index: number }) {
  const icons = [
    // User icon
    <svg key="user" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 14C18.7614 14 21 11.7614 21 9C21 6.23858 18.7614 4 16 4C13.2386 4 11 6.23858 11 9C11 11.7614 13.2386 14 16 14Z" stroke="#8976FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 28V25C8 22.2386 10.2386 20 13 20H19C21.7614 20 24 22.2386 24 25V28" stroke="#8976FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
    // Download icon
    <svg key="download" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 4V22M16 22L10 16M16 22L22 16" stroke="#FCA61F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 28H26" stroke="#FCA61F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
    // Customer icon
    <svg key="customer" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14Z" stroke="#5BC17F" strokeWidth="2"/>
      <path d="M20 14C22.2091 14 24 12.2091 24 10C24 7.79086 22.2091 6 20 6" stroke="#5BC17F" strokeWidth="2" strokeLinecap="round"/>
      <path d="M4 26V24C4 21.2386 6.23858 19 9 19H15C17.7614 19 20 21.2386 20 24V26" stroke="#5BC17F" strokeWidth="2"/>
      <path d="M22 19C24.7614 19 27 21.2386 27 24V26" stroke="#5BC17F" strokeWidth="2" strokeLinecap="round"/>
    </svg>,
    // Chart icon
    <svg key="chart" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 26V14" stroke="#FF6B4A" strokeWidth="2" strokeLinecap="round"/>
      <path d="M12 26V8" stroke="#FF6B4A" strokeWidth="2" strokeLinecap="round"/>
      <path d="M18 26V18" stroke="#FF6B4A" strokeWidth="2" strokeLinecap="round"/>
      <path d="M24 26V12" stroke="#FF6B4A" strokeWidth="2" strokeLinecap="round"/>
    </svg>,
  ];

  return icons[index % icons.length];
}

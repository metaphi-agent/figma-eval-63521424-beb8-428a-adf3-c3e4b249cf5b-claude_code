import { useState } from 'react';
import Logo from '../ui/Logo';
import Button from '../ui/Button';

type HeaderVariant = 'purple' | 'coral' | 'green';

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

interface HeaderProps {
  variant?: HeaderVariant;
}

const navItemsDefault: NavItem[] = [
  { label: 'Home', href: '#', hasDropdown: true },
  { label: 'About us', href: '#' },
  { label: 'Services', href: '#', hasDropdown: true },
  { label: 'Blog', href: '#', hasDropdown: true },
  { label: 'Contact us', href: '#' },
];

const navItemsAlt: NavItem[] = [
  { label: 'Demos', href: '#' },
  { label: 'Features', href: '#' },
  { label: 'Pricing', href: '#' },
  { label: 'Contact', href: '#' },
];

const variantConfig: Record<HeaderVariant, {
  loginColor: string;
  buttonVariant: 'outline' | 'coral' | 'green';
  navItems: NavItem[];
}> = {
  purple: {
    loginColor: 'text-[var(--color-crocus-purple)]',
    buttonVariant: 'outline',
    navItems: navItemsDefault,
  },
  coral: {
    loginColor: 'text-[var(--color-coral)]',
    buttonVariant: 'coral',
    navItems: navItemsAlt,
  },
  green: {
    loginColor: 'text-[var(--color-green)]',
    buttonVariant: 'green',
    navItems: navItemsAlt,
  },
};

export default function Header({ variant = 'purple' }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const config = variantConfig[variant];

  return (
    <header className="w-full py-6 lg:py-8">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo variant={variant} />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {config.navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-1 text-[var(--color-purple-haze)] hover:text-[var(--color-bright-grey)] transition-colors font-medium"
              >
                {item.label}
                {item.hasDropdown && (
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 4.5L6 7.5L9 4.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#"
              className={`font-semibold hover:opacity-80 transition-opacity ${config.loginColor}`}
            >
              Login
            </a>
            <Button variant={config.buttonVariant} size="md">
              Sign up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  d="M6 6L18 18M6 18L18 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            <div className="flex flex-col gap-4">
              {config.navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[var(--color-purple-haze)] hover:text-[var(--color-bright-grey)] transition-colors font-medium py-2"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
                <a
                  href="#"
                  className={`font-semibold ${config.loginColor} text-center py-2`}
                >
                  Login
                </a>
                <Button variant={config.buttonVariant} size="md" className="w-full">
                  Sign up
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

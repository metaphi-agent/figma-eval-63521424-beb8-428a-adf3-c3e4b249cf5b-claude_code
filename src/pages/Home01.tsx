import Header from '../components/blocks/Header';
import Button from '../components/ui/Button';
import Stats from '../components/blocks/Stats';

const stats = [
  { value: '15k+', label: 'Active user' },
  { value: '30k', label: 'Total Download' },
  { value: '10k', label: 'Customer' },
];

export default function Home01() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Decorative dots background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-8 grid grid-cols-8 gap-3 opacity-30">
          {Array(56).fill(null).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-[var(--color-crocus-purple)]" />
          ))}
        </div>
        <div className="absolute bottom-40 right-8 grid grid-cols-8 gap-3 opacity-30 hidden lg:grid">
          {Array(56).fill(null).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-[var(--color-crocus-purple)]" />
          ))}
        </div>
      </div>

      {/* Decorative curved lines */}
      <svg
        className="absolute top-0 left-0 w-32 h-32 lg:w-48 lg:h-48 text-[var(--color-crocus-purple)] opacity-40"
        viewBox="0 0 100 100"
        fill="none"
      >
        <path
          d="M20 80 Q 20 20, 80 20"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
        />
      </svg>

      <Header variant="purple" />

      <main className="relative">
        {/* Hero Section */}
        <section className="max-w-[1200px] mx-auto px-4 lg:px-8 pt-8 lg:pt-16 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              {/* Decorative Vase */}
              <div className="relative mb-6">
                <img
                  src="./assets/images/hero-vase-01.png"
                  alt=""
                  className="w-24 h-24 lg:w-32 lg:h-32 absolute -top-16 -left-4 lg:-left-8"
                  loading="lazy"
                />
              </div>

              <h1 className="text-4xl lg:text-[56px] font-bold leading-tight lg:leading-[1.3] text-[var(--color-bright-grey)]">
                Committed To People{' '}
                <br className="hidden lg:block" />
                Committed To{' '}
                <span className="text-[var(--color-crocus-purple)]">The Future</span>
              </h1>

              <p className="mt-6 text-lg text-[var(--color-mid-grey)] leading-relaxed max-w-md">
                An enim nullam tempor sapien gravida donec enim ipsum porta justo congue magna at
              </p>

              <Button variant="primary" size="lg" className="mt-8">
                Get Started Now
              </Button>
            </div>

            {/* Right Content - Analytics Cards */}
            <div className="order-1 lg:order-2 relative">
              {/* Yellow decorative quarter circle */}
              <div className="absolute top-0 right-0 w-64 h-64 lg:w-80 lg:h-80 bg-[var(--color-fuel-yellow)] opacity-10 rounded-bl-full -z-10" />

              <div className="relative">
                <img
                  src="./assets/images/hero-cards-01.png"
                  alt="Analytics dashboard showing follower stats, likes count of 15.9k, and reach of 256.18k"
                  className="w-full max-w-lg mx-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative bg-gradient-to-t from-white via-white to-transparent py-16">
          <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
            <Stats stats={stats} variant="row" showIcons={true} />
          </div>
        </section>
      </main>
    </div>
  );
}

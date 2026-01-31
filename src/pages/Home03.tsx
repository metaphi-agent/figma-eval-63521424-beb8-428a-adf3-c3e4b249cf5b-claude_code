import Header from '../components/blocks/Header';
import Button from '../components/ui/Button';
import Stats from '../components/blocks/Stats';

const stats = [
  { value: '115k+', label: 'Active user' },
  { value: '88k', label: 'User passive' },
  { value: '30%', label: 'Increase in user' },
  { value: '>10k', label: 'Good Testimonials' },
];

export default function Home03() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {/* Green gradient blurs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-[var(--color-green)] opacity-5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-[var(--color-green)] opacity-5 rounded-full blur-3xl" />

        {/* Orange gradient blurs */}
        <div className="absolute top-40 right-40 w-48 h-48 bg-orange-300 opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-1/3 w-64 h-64 bg-orange-300 opacity-5 rounded-full blur-3xl" />

        {/* Blue gradient blurs */}
        <div className="absolute top-60 right-1/4 w-32 h-32 bg-blue-400 opacity-10 rounded-full blur-3xl" />

        {/* Decorative dots */}
        <div className="absolute top-32 left-12 grid grid-cols-8 gap-2 opacity-30 hidden lg:grid">
          {Array(32).fill(null).map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-[var(--color-green)]" />
          ))}
        </div>

        {/* Small colored dots */}
        <div className="absolute top-24 right-32 w-4 h-4 rounded-full bg-[var(--color-green)]" />
        <div className="absolute top-48 right-48 w-2 h-2 rounded-full bg-[var(--color-green)]" />
        <div className="absolute top-32 right-1/3 w-3 h-3 rounded-full bg-red-400" />
        <div className="absolute top-64 left-1/4 w-2 h-2 rounded-full bg-blue-400" />
      </div>

      {/* Decorative curved lines */}
      <svg
        className="absolute top-20 right-10 w-40 h-48 text-[var(--color-green)] opacity-20 hidden lg:block"
        viewBox="0 0 100 150"
        fill="none"
      >
        <path
          d="M90 10 Q 90 75, 30 75 Q 10 140, 60 140"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      <svg
        className="absolute top-1/3 left-8 w-20 h-32 text-[var(--color-green)] opacity-20 hidden lg:block"
        viewBox="0 0 50 100"
        fill="none"
      >
        <path
          d="M40 10 L 10 30 L 40 90"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      <Header variant="green" />

      <main className="relative">
        {/* Hero Section */}
        <section className="max-w-[1200px] mx-auto px-4 lg:px-8 pt-8 lg:pt-12 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl lg:text-[56px] font-bold leading-tight lg:leading-[1.3] text-[var(--color-bright-grey)]">
                Manage Your{' '}
                <br className="hidden lg:block" />
                Business{' '}
                <span className="relative inline-block">
                  Finance
                  <svg
                    className="absolute -bottom-1 left-0 w-full h-8"
                    viewBox="0 0 150 30"
                    preserveAspectRatio="none"
                  >
                    <ellipse
                      cx="75"
                      cy="15"
                      rx="72"
                      ry="12"
                      stroke="#5BC17F"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </span>
                <br className="hidden lg:block" />
                Easily
              </h1>

              <p className="mt-6 text-lg text-[var(--color-mid-grey)] leading-relaxed max-w-md">
                An enim nullam tempor sapien gravida donec enim ipsum porta justo congue magna at pretium purus pretium ligula
              </p>

              <Button variant="green" size="lg" className="mt-8">
                Start 14 Days Trial
              </Button>
            </div>

            {/* Right Content - Phone Mockups */}
            <div className="relative">
              {/* Gradient background circle */}
              <div className="absolute top-1/2 right-0 w-72 h-72 lg:w-96 lg:h-96 bg-gradient-to-br from-green-50 to-green-100 rounded-full -translate-y-1/2 -z-10 opacity-50" />

              <div className="relative flex justify-center items-center">
                <img
                  src="./assets/images/hero-phones-03.png"
                  alt="Finance app showing transfer options, cards, recent category icons, and transaction history with Dribbble payment"
                  className="w-full max-w-lg"
                />

                {/* Floating card - Currency */}
                <div className="absolute -right-4 lg:-right-8 top-1/4 hidden lg:block">
                  <img
                    src="./assets/images/hero-card-currency-03.png"
                    alt="US Dollar currency selector showing $25,685.55 balance"
                    className="w-48 shadow-xl rounded-2xl"
                    loading="lazy"
                  />
                </div>

                {/* Floating card - Bottom */}
                <div className="absolute -left-4 lg:-left-8 bottom-1/4 hidden lg:block">
                  <img
                    src="./assets/images/hero-card-03.png"
                    alt="Finance summary card"
                    className="w-36 shadow-xl rounded-2xl"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative bg-white py-16 lg:py-20">
          <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
            <Stats stats={stats} variant="row" showIcons={false} />
          </div>
        </section>
      </main>
    </div>
  );
}

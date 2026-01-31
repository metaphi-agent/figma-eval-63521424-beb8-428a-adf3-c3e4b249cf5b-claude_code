import Header from '../components/blocks/Header';
import Button from '../components/ui/Button';
import Stats from '../components/blocks/Stats';

const stats = [
  { value: '15k+', label: 'Active user' },
  { value: '30k', label: 'Total Download' },
  { value: '10k', label: 'Customer' },
];

export default function Home02() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Background */}
      <div className="absolute top-0 left-0 w-full h-[900px] bg-[var(--color-peach-bg)] -z-10" />

      {/* Decorative curved lines */}
      <svg
        className="absolute top-20 left-20 w-48 h-24 text-[var(--color-coral)] opacity-30 hidden lg:block"
        viewBox="0 0 200 100"
        fill="none"
      >
        <path
          d="M10 80 Q 50 10, 100 50 T 190 30"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
        />
      </svg>

      <svg
        className="absolute top-40 right-20 w-32 h-48 text-[var(--color-coral)] opacity-30 hidden lg:block"
        viewBox="0 0 100 150"
        fill="none"
      >
        <path
          d="M90 10 Q 90 75, 30 75 Q 30 140, 70 140"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
        />
      </svg>

      <Header variant="coral" />

      <main className="relative">
        {/* Hero Section */}
        <section className="max-w-[1200px] mx-auto px-4 lg:px-8 pt-8 lg:pt-12 pb-20">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Phone */}
            <div className="hidden lg:block lg:col-span-3">
              <img
                src="./assets/images/hero-phone-left-02.png"
                alt="Mobile app showing daily todo management"
                className="w-full max-w-[280px] -rotate-12 transform"
                loading="lazy"
              />
            </div>

            {/* Center Content */}
            <div className="lg:col-span-6 text-center">
              {/* Clock decoration */}
              <div className="flex justify-center mb-6">
                <img
                  src="./assets/images/hero-clock-02.png"
                  alt=""
                  className="w-24 h-24 lg:w-32 lg:h-32"
                  loading="lazy"
                />
              </div>

              <h1 className="text-4xl lg:text-[56px] font-bold leading-tight lg:leading-[1.3] text-[var(--color-bright-grey)]">
                A collaborative{' '}
                <span className="relative">
                  Time
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 8 Q 50 0, 100 8" stroke="#FF6B4A" strokeWidth="3" fill="none" />
                  </svg>
                </span>{' '}
                <br className="hidden lg:block" />
                <span className="relative inline-block mt-2">
                  Tracking
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 8 Q 50 0, 100 8" stroke="#FF6B4A" strokeWidth="3" fill="none" />
                  </svg>
                </span>
                {' '}that you Need
              </h1>

              <p className="mt-6 text-lg text-[var(--color-mid-grey)] leading-relaxed max-w-lg mx-auto">
                An enim nullam tempor sapien gravida donec enim ipsum porta justo congue magna at pretium purus pretium ligula
              </p>

              {/* Clipboard decoration */}
              <div className="hidden lg:flex justify-end -mt-8 mr-16">
                <img
                  src="./assets/images/hero-clipboard-02.png"
                  alt=""
                  className="w-28 h-28"
                  loading="lazy"
                />
              </div>

              <Button variant="coral" size="lg" className="mt-8">
                Start 14 Days Trial
              </Button>
            </div>

            {/* Right Phone */}
            <div className="hidden lg:block lg:col-span-3">
              <img
                src="./assets/images/hero-phone-right-02.png"
                alt="Mobile app showing weekly tasks and design meeting"
                className="w-full max-w-[320px] rotate-12 transform"
                loading="lazy"
              />
            </div>
          </div>

          {/* Mobile phones (visible on mobile) */}
          <div className="flex justify-center gap-4 mt-8 lg:hidden">
            <img
              src="./assets/images/hero-phone-left-02.png"
              alt="Mobile app showing daily todo"
              className="w-32 -rotate-6"
              loading="lazy"
            />
            <img
              src="./assets/images/hero-phone-right-02.png"
              alt="Mobile app showing weekly tasks"
              className="w-32 rotate-6"
              loading="lazy"
            />
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative bg-white py-16 lg:py-20">
          <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
            <Stats stats={stats} variant="row" showIcons={false} />

            {/* Decorative dividers */}
            <div className="hidden lg:flex justify-center gap-48 mt-8">
              {[1, 2].map((i) => (
                <div key={i} className="w-px h-24 bg-gray-200" />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

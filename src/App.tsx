import { lazy, Suspense, useState } from 'react';

const Home01 = lazy(() => import('./pages/Home01'));
const Home02 = lazy(() => import('./pages/Home02'));
const Home03 = lazy(() => import('./pages/Home03'));

type PageKey = 'home01' | 'home02' | 'home03';

const pages: Record<PageKey, { component: React.LazyExoticComponent<() => JSX.Element>; label: string }> = {
  home01: { component: Home01, label: 'Home 01 (Purple)' },
  home02: { component: Home02, label: 'Home 02 (Coral)' },
  home03: { component: Home03, label: 'Home 03 (Green)' },
};

function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--color-crocus-purple)]"></div>
    </div>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState<PageKey>('home01');
  const CurrentPageComponent = pages[currentPage].component;

  return (
    <div className="relative">
      {/* Page Selector */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-white rounded-full shadow-lg px-2 py-2 flex gap-2">
        {(Object.keys(pages) as PageKey[]).map((key) => (
          <button
            key={key}
            onClick={() => setCurrentPage(key)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              currentPage === key
                ? key === 'home01'
                  ? 'bg-[var(--color-crocus-purple)] text-white'
                  : key === 'home02'
                  ? 'bg-[var(--color-coral)] text-white'
                  : 'bg-[var(--color-green)] text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {pages[key].label}
          </button>
        ))}
      </div>

      {/* Page Content */}
      <Suspense fallback={<LoadingSpinner />}>
        <CurrentPageComponent />
      </Suspense>
    </div>
  );
}

export default App;

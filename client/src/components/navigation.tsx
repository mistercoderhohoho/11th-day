import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [location] = useLocation();

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-dancing font-bold" style={{ color: 'var(--burgundy)' }}>
            💕 Birthday Month
          </h1>
          <div className="flex space-x-6">
            <Link href="/">
              <a className={`font-medium transition-colors duration-300 ${
                location === '/' ? 'text-pink-600' : 'hover:text-pink-600'
              }`} style={{ color: location === '/' ? 'var(--deep-rose)' : 'var(--burgundy)' }}>
                Home
              </a>
            </Link>
            <Link href="/letter">
              <a className={`font-medium transition-colors duration-300 ${
                location === '/letter' ? 'text-pink-600' : 'hover:text-pink-600'
              }`} style={{ color: location === '/letter' ? 'var(--deep-rose)' : 'var(--burgundy)' }}>
                Love Letter
              </a>
            </Link>
            <Link href="/gift">
              <a className={`font-medium transition-colors duration-300 ${
                location === '/gift' ? 'text-pink-600' : 'hover:text-pink-600'
              }`} style={{ color: location === '/gift' ? 'var(--deep-rose)' : 'var(--burgundy)' }}>
                Special Gift
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

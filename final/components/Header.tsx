import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-darkBg/90 backdrop-blur border-b border-popYellow/20 shadow-lg">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="font-bold text-popYellow text-xl tracking-tight">
          POPCLUB
        </Link>
        <ul className="flex gap-6 text-base font-medium">
          <li><Link href="/" className="text-darkText hover:text-popYellow">Home</Link></li>
          <li><a href="#how-it-works" className="text-darkText hover:text-popYellow scroll-smooth">How It Works</a></li>
          <li><Link href="/faq" className="text-darkText hover:text-popYellow">FAQ</Link></li>
          <li><Link href="/contact" className="text-darkText hover:text-popYellow">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
} 
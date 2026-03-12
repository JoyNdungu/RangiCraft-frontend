import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { HiSun, HiMoon } from 'react-icons/hi'
import logo from '../assets/logo.png'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between
      px-12 py-4 nav-bg backdrop-blur-2xl border-b border-theme
      transition-colors duration-300">

      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img
          src={logo}
          alt="RangiCraft logo"
          className="w-18 h-12 object-contain"
        />
        <span className="font-syne font-extrabold text-xl tracking-tight text-theme">
          Rangi<span className="text-brand-accent">Craft</span>
        </span>
      </Link>

      {/* Right side */}
      <div className="flex items-center gap-3">

        <span className="flex items-center gap-2 text-xs uppercase tracking-widest
          text-brand-accent border border-brand-accent/25 bg-brand-accent/10
          px-4 py-1.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-blink" />
          For Designers
        </span>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="w-9 h-9 rounded-xl border border-theme2 bg-theme-surface2
            flex items-center justify-center text-muted2
            hover:border-brand-accent hover:text-brand-accent
            transition-all duration-200">
          {theme === 'dark' ? <HiSun size={16} /> : <HiMoon size={16} />}
        </button>

      </div>
    </nav>
  )
}
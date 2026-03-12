import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { HiSun, HiMoon, HiMenu, HiX } from 'react-icons/hi'
import logo from '../assets/logo.png'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-bg backdrop-blur-2xl
      border-b border-theme transition-colors duration-300">

      {/* Main bar */}
      <div className="flex items-center justify-between px-6 md:px-12 py-3">

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

        {/* Desktop right side */}
        <div className="hidden md:flex items-center gap-3">
          <span className="flex items-center gap-2 text-xs uppercase tracking-widest
            text-brand-accent border border-brand-accent/25 bg-brand-accent/10
            px-4 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-blink" />
            For Designers
          </span>
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

        {/* Mobile right side */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-xl border border-theme2 bg-theme-surface2
              flex items-center justify-center text-muted2
              hover:border-brand-accent hover:text-brand-accent
              transition-all duration-200">
            {theme === 'dark' ? <HiSun size={16} /> : <HiMoon size={16} />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-9 h-9 rounded-xl border border-theme2 bg-theme-surface2
              flex items-center justify-center text-muted2
              hover:border-brand-accent hover:text-brand-accent
              transition-all duration-200">
            {menuOpen ? <HiX size={18} /> : <HiMenu size={18} />}
          </button>
        </div>

      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 pt-3 flex flex-col gap-3
          border-t border-theme">
          <span className="flex items-center gap-2 text-xs uppercase tracking-widest
            text-brand-accent border border-brand-accent/25 bg-brand-accent/10
            px-4 py-2 rounded-full w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-blink" />
            For Designers
          </span>
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="text-sm text-muted2 hover:text-theme
              transition-colors duration-200 py-1">
            Home
          </Link>
          <Link
            to="/generate"
            onClick={() => setMenuOpen(false)}
            className="text-sm text-brand-accent font-syne font-bold py-1">
            Generate Palette →
          </Link>
        </div>
      )}

    </nav>
  )
}
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import logo from '../assets/logo.png'

export default function Home() {
  const { theme } = useTheme()
  const navigate = useNavigate()

  return (
    <main className="flex flex-col items-center text-center px-6 pt-40 pb-20">

      {/* Eyebrow */}
      <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em]
        text-brand-accent border border-brand-accent/30 bg-brand-accent/10
        px-5 py-2 rounded-full mb-7 animate-fade-up">
          <img src={logo} alt="RangiCraft logo" className="w-30 h-20 object-contain" />
        RangiCraft Color Intelligence
      </div>

      {/* Headline */}
      <h1 className="font-syne font-extrabold text-5xl md:text-6xl tracking-tight
        leading-none max-w-3xl animate-fade-up mb-5 text-theme">
        Colors that{' '}
        <em className="not-italic text-brand-accent">understand</em>
        <br />your product
      </h1>

      {/* Subheading */}
      <p className="text-muted2 text-base font-light leading-relaxed
        max-w-md animate-fade-up mb-10">
        Tell us about your app, your brand mood, and how you write code and
        we'll generate a ready-to-use palette in your preferred format.
      </p>

      {/* CTA */}
      <button
        onClick={() => navigate('/generate')}
        className={`font-syne font-extrabold text-sm tracking-wide
          px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5
          ${theme === 'dark'
            ? 'bg-brand-accent text-[#080810] hover:shadow-[0_10px_36px_rgba(184,255,79,0.22)]'
            : 'bg-brand-accent text-white hover:shadow-[0_10px_36px_rgba(34,110,54,0.25)]'
          }`}
      >
        Generate My Color Theme
      </button>

    </main>
  )
}
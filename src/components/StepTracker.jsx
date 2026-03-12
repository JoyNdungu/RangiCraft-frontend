import { useGenerator } from '../context/GeneratorContext'
import { FaPaintBrush } from "react-icons/fa";

const STEPS = [
  { n: 1, label: 'App Details' },
  { n: 2, label: 'Brand Mood' },
  { n: 3, label: 'Styling Format' },
  { n: 4, label: 'Your Theme' },
]

// Shorter labels for mobile
const STEPS_MOBILE = [
  { n: 1, label: 'App' },
  { n: 2, label: 'Mood' },
  { n: 3, label: 'Style' },
  { n: 4, label: 'Theme' },
]

export default function StepTracker() {
  const { step } = useGenerator()

  return (
    <div className="flex items-center justify-center mb-8 md:mb-12">
      {STEPS.map((s, i) => (
        <div key={s.n} className="flex items-center">

          {/* Circle + label */}
          <div className="flex flex-col items-center gap-1.5 md:gap-2">
            <div className={`w-8 h-8 md:w-9 md:h-9 rounded-full border-2
              flex items-center justify-center
              font-syne font-bold text-xs md:text-sm transition-all duration-300
              ${step > s.n
                ? 'border-brand-accent bg-brand-accent/15 text-brand-accent'
                : step === s.n
                  ? 'border-brand-accent bg-brand-accent/10 text-brand-accent shadow-[0_0_0_4px_rgba(184,255,79,0.08)]'
                  : 'border-theme2 bg-theme-surface text-muted'
              }`}
            >
              {step > s.n ? '✓' : s.n === 4 ? <FaPaintBrush size={12} /> : s.n}
            </div>

            {/* Desktop label */}
            <span className={`hidden md:block text-[0.62rem] uppercase tracking-wider
              whitespace-nowrap transition-colors duration-300
              ${step === s.n
                ? 'text-brand-accent'
                : step > s.n ? 'text-brand-accent/60' : 'text-muted'
              }`}
            >
              {s.label}
            </span>

            {/* Mobile label (shorter) */}
            <span className={`md:hidden text-[0.55rem] uppercase tracking-wider
              whitespace-nowrap transition-colors duration-300
              ${step === s.n
                ? 'text-brand-accent'
                : step > s.n ? 'text-brand-accent/60' : 'text-muted'
              }`}
            >
              {STEPS_MOBILE[i].label}
            </span>
          </div>

          {/* Connector */}
          {i < STEPS.length - 1 && (
            <div className={`w-6 md:w-14 h-px mb-5 md:mb-6 mx-1 md:mx-2
              transition-colors duration-500
              ${step > s.n ? 'bg-brand-accent/40' : 'bg-theme2'}`}
            />
          )}

        </div>
      ))}
    </div>
  )
}
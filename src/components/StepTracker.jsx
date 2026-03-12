import { useGenerator } from '../context/GeneratorContext'
import { FaPaintBrush } from "react-icons/fa";

const STEPS = [
  { n: 1, label: 'App Details' },
  { n: 2, label: 'Brand Mood' },
  { n: 3, label: 'Styling Format' },
  { n: 4, label: 'Your Theme' },
]

export default function StepTracker() {
  const { step } = useGenerator()

  return (
    <div className="flex items-center justify-center mb-12">
      {STEPS.map((s, i) => (
        <div key={s.n} className="flex items-center">

          {/* Circle + label */}
          <div className="flex flex-col items-center gap-2">
            <div className={`w-9 h-9 rounded-full border-2 flex items-center justify-center
              font-syne font-bold text-sm transition-all duration-300
              ${step > s.n
                ? 'border-brand-accent bg-brand-accent/15 text-brand-accent'
                : step === s.n
                  ? 'border-brand-accent bg-brand-accent/10 text-brand-accent shadow-[0_0_0_4px_rgba(184,255,79,0.08)]'
                  : 'border-theme2 bg-theme-surface text-muted'
              }`}
            >
              {step > s.n ? '✓' : s.n === 4 ? <FaPaintBrush /> : s.n}
            </div>
            <span className={`text-[0.62rem] uppercase tracking-wider whitespace-nowrap
              transition-colors duration-300
              ${step === s.n
                ? 'text-brand-accent'
                : step > s.n
                  ? 'text-brand-accent/60'
                  : 'text-muted'
              }`}
            >
              {s.label}
            </span>
          </div>

          {/* Connector */}
          {i < STEPS.length - 1 && (
            <div className={`w-14 h-px mb-5 mx-2 transition-colors duration-500
              ${step > s.n ? 'bg-brand-accent/40' : 'bg-theme2'}`}
            />
          )}

        </div>
      ))}
    </div>
  )
}
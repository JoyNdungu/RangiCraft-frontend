import { useGenerator } from '../../context/GeneratorContext'

const FRAMEWORKS = [
  { value: 'css',      label: 'Plain CSS' },
  { value: 'tailwind', label: 'Tailwind CSS' },
  { value: 'both',     label: 'Both' },
]

const APPROACHES = [
  { value: 'css-vars',      icon: '🎨', title: 'CSS Variables',     desc: 'Define once in :root, use everywhere.',      code: 'var(--color-primary)' },
  { value: 'css-file',      icon: '📄', title: 'External .css File',desc: 'Class-based rules in a separate file.',       code: '.btn { background: … }' },
  { value: 'inline-html',   icon: '✏️', title: 'HTML Inline Style', desc: 'Direct style="" on elements.',               code: 'style="background:#1A7A52"' },
  { value: 'react-obj',     icon: '⚛️', title: 'React style={{}}',  desc: 'JSX inline objects, camelCase props.',       code: 'style={{ background: "#1A7A52" }}' },
  { value: 'classname',     icon: '🏷', title: 'className (React)', desc: 'className prop linking to CSS or Modules.',  code: 'className="btn-primary"' },
  { value: 'tailwind-util', icon: '🌬', title: 'Tailwind Utilities', desc: 'Utility classes directly in markup.',       code: 'className="bg-[#1A7A52]"' },
  { value: 'styled-comp',   icon: '💅', title: 'Styled Components', desc: 'CSS-in-JS with tagged template literals.',   code: 'styled.div`background: …`' },
  { value: 'css-modules',   icon: '📦', title: 'CSS Modules',       desc: 'Scoped .module.css imported as objects.',    code: 'styles.primaryButton' },
]

export default function StepThree() {
  const { selections, update, nextStep, prevStep } = useGenerator()

  return (
    <div className="animate-fade-up">
      <h2 className="font-syne font-extrabold text-xl md:text-2xl text-theme mb-1">
        How do you style your code?
      </h2>
      <p className="text-muted2 text-sm mb-6 md:mb-8">
        We'll output your palette in your exact format — no extra work needed.
      </p>

      {/* Framework */}
      <div className="mb-6">
        <label className="block text-xs uppercase tracking-widest text-muted mb-3">
          CSS Framework
        </label>
        <div className="flex gap-2">
          {FRAMEWORKS.map(f => (
            <button
              key={f.value}
              onClick={() => update('framework', f.value)}
              className={`flex-1 py-2.5 md:py-3 rounded-xl border text-xs md:text-sm
                transition-all duration-150
                ${selections.framework === f.value
                  ? 'border-brand-accent bg-brand-accent/10 text-brand-accent font-medium'
                  : 'border-theme bg-theme-surface text-muted2 hover:border-theme2 hover:text-theme'
                }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Approach */}
      <div className="mb-6 md:mb-8">
        <label className="block text-xs uppercase tracking-widest text-muted mb-3">
          Styling Approach
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
          {APPROACHES.map(a => (
            <button
              key={a.value}
              onClick={() => update('approach', a.value)}
              className={`text-left p-3 md:p-4 rounded-xl border-2 transition-all duration-150 relative
                ${selections.approach === a.value
                  ? 'border-brand-accent bg-brand-accent/05'
                  : 'border-theme bg-theme-surface hover:border-theme2'
                }`}
            >
              {selections.approach === a.value && (
                <span className="absolute top-3 right-3 w-5 h-5 rounded-full
                  bg-brand-accent text-[#080810] text-xs font-bold
                  flex items-center justify-center">✓</span>
              )}
              <div className="text-lg md:text-xl mb-1.5 md:mb-2">{a.icon}</div>
              <div className={`font-syne font-bold text-xs md:text-sm mb-1
                ${selections.approach === a.value ? 'text-brand-accent' : 'text-theme'}`}>
                {a.title}
              </div>
              <div className="text-xs text-muted mb-2 leading-relaxed">{a.desc}</div>
              <div className="font-mono text-[0.6rem] md:text-xs text-brand-accent
                bg-brand-accent/10 px-2 py-1 rounded-md truncate">
                {a.code}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={prevStep}
          className="px-4 md:px-6 py-3.5 md:py-4 rounded-xl border border-theme
            text-muted2 font-syne font-bold text-sm
            hover:border-theme2 hover:text-theme transition-all duration-200"
        >
          ← Back
        </button>
        <button
          onClick={nextStep}
          disabled={!selections.approach}
          className="flex-1 font-syne font-extrabold text-sm tracking-wide
            bg-brand-accent text-[#080810] py-3.5 md:py-4 rounded-xl
            hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(184,255,79,0.2)]
            transition-all duration-200
            disabled:opacity-30 disabled:cursor-not-allowed
            disabled:hover:translate-y-0 disabled:hover:shadow-none"
        >
          Generate My Theme Colors
        </button>
      </div>
    </div>
  )
}
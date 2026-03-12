import { useGenerator } from '../../context/GeneratorContext'

const MOODS = [
  { value: 'trustworthy',  label: '🛡 Trustworthy',  desc: 'Safe, reliable, stable' },
  { value: 'energetic',    label: '⚡ Energetic',     desc: 'Fast, electric, driven' },
  { value: 'calm',         label: '🌿 Calm',          desc: 'Peaceful, soft, caring' },
  { value: 'playful',      label: '🎉 Playful',       desc: 'Fun, vibrant, youthful' },
  { value: 'premium',      label: '💎 Premium',       desc: 'Luxury, refined, elite' },
  { value: 'bold',         label: '🔥 Bold',          desc: 'Strong, fearless, loud' },
  { value: 'minimal',      label: '✦ Minimal',        desc: 'Clean, quiet, focused' },
  { value: 'warm',         label: '🌅 Warm',          desc: 'Friendly, human, cozy' },
  { value: 'professional', label: '💼 Professional',  desc: 'Sharp, formal, polished' },
  { value: 'youthful',     label: '🚀 Youthful',      desc: 'Fresh, modern, curious' },
]

export default function StepTwo() {
  const { selections, update, nextStep, prevStep } = useGenerator()

  return (
    <div className="animate-fade-up">
      <h2 className="font-syne font-extrabold text-2xl text-theme mb-1">
        What's your brand personality?
      </h2>
      <p className="text-muted2 text-sm mb-8">
        Pick the vibe that best describes how your product should feel to users.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
        {MOODS.map(m => (
          <button
            key={m.value}
            onClick={() => update('mood', m.value)}
            className={`text-left p-4 rounded-xl border transition-all duration-150
              ${selections.mood === m.value
                ? 'border-brand-accent bg-brand-accent/10'
                : 'border-theme bg-theme-surface hover:border-theme2'
              }`}
          >
            <div className={`font-syne font-bold text-sm mb-1
              ${selections.mood === m.value ? 'text-brand-accent' : 'text-theme'}`}>
              {m.label}
            </div>
            <div className="text-xs text-muted">{m.desc}</div>
          </button>
        ))}
      </div>

      <div className="flex gap-3">
        <button
          onClick={prevStep}
          className="px-6 py-4 rounded-xl border border-theme text-muted2
            font-syne font-bold text-sm
            hover:border-theme2 hover:text-theme transition-all duration-200"
        >
          ← Back
        </button>
        <button
          onClick={nextStep}
          disabled={!selections.mood}
          className="flex-1 font-syne font-extrabold text-sm tracking-wide
            bg-brand-accent text-[#080810] py-4 rounded-xl
            hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(184,255,79,0.2)]
            transition-all duration-200
            disabled:opacity-30 disabled:cursor-not-allowed
            disabled:hover:translate-y-0 disabled:hover:shadow-none"
        >
          Continue →
        </button>
      </div>
    </div>
  )
}
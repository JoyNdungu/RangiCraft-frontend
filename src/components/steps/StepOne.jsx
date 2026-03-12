import { useGenerator } from '../../context/GeneratorContext'

const APP_TYPES = [
  { value: 'fintech',       label: '💰 Fintech / Money App' },
  { value: 'health',        label: '🏥 Health & Wellness' },
  { value: 'ecommerce',     label: '🛍 E-Commerce / Retail' },
  { value: 'social',        label: '👥 Social / Community' },
  { value: 'education',     label: '📚 Education / Learning' },
  { value: 'logistics',     label: '🚚 Logistics / Delivery' },
  { value: 'agriculture',   label: '🌾 Agriculture / Farming' },
  { value: 'government',    label: '🏛 Government / Civic' },
  { value: 'entertainment', label: '🎵 Entertainment / Media' },
  { value: 'saas',          label: '⚙️ SaaS / Dashboard' },
]

const MARKETS = [
  { value: 'east-africa',     label: '🇰🇪 East Africa' },
  { value: 'west-africa',     label: '🇳🇬 West Africa' },
  { value: 'southern-africa', label: '🇿🇦 Southern Africa' },
  { value: 'north-africa',    label: '🇪🇬 North Africa' },
  { value: 'pan-africa',      label: '🌍 Pan-African' },
  { value: 'global',          label: '🌐 Global' },
]

export default function StepOne() {
  const { selections, update, nextStep } = useGenerator()
  const ready = selections.appType && selections.market

  return (
    <div className="animate-fade-up">
      <h2 className="font-syne font-extrabold text-2xl text-theme mb-1">
        Tell us about your app
      </h2>
      <p className="text-muted2 text-sm mb-8">
        We'll use this to tailor the palette to your product category and market.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

        {/* App Type */}
        <div>
          <label className="block text-xs uppercase tracking-widest text-muted mb-3">
            App Category
          </label>
          <div className="flex flex-col gap-2">
            {APP_TYPES.map(a => (
              <button
                key={a.value}
                onClick={() => update('appType', a.value)}
                className={`text-left px-4 py-3 rounded-xl border text-sm
                  transition-all duration-150
                  ${selections.appType === a.value
                    ? 'border-brand-accent bg-brand-accent/10 text-brand-accent'
                    : 'border-theme bg-theme-surface text-muted2 hover:border-theme2 hover:text-theme'
                  }`}
              >
                {a.label}
              </button>
            ))}
          </div>
        </div>

        {/* Market */}
        <div>
          <label className="block text-xs uppercase tracking-widest text-muted mb-3">
            Target Market
          </label>
          <div className="flex flex-col gap-2">
            {MARKETS.map(m => (
              <button
                key={m.value}
                onClick={() => update('market', m.value)}
                className={`text-left px-4 py-3 rounded-xl border text-sm
                  transition-all duration-150
                  ${selections.market === m.value
                    ? 'border-brand-accent bg-brand-accent/10 text-brand-accent'
                    : 'border-theme bg-theme-surface text-muted2 hover:border-theme2 hover:text-theme'
                  }`}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>

      </div>

      <button
        onClick={nextStep}
        disabled={!ready}
        className="w-full font-syne font-extrabold text-sm tracking-wide
          bg-brand-accent text-[#080810] py-4 rounded-xl
          hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(184,255,79,0.2)]
          transition-all duration-200
          disabled:opacity-30 disabled:cursor-not-allowed
          disabled:hover:translate-y-0 disabled:hover:shadow-none"
      >
        Continue →
      </button>
    </div>
  )
}
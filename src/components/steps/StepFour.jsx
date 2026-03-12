import { useState } from 'react'
import { useGenerator } from '../../context/GeneratorContext'
import { getPalette, generateCode } from '../../utils/palettes'
import { savePalette } from '../../utils/paletteApi'
import { FiCopy, FiCheck, FiRefreshCw, FiBookmark } from 'react-icons/fi'

export default function StepFour() {
  const { selections, reset } = useGenerator()
  const palette = getPalette(selections.appType, selections.mood)
  const files = generateCode(palette, selections.approach, selections.framework)

  const [activeTab, setActiveTab] = useState(0)
  const [copiedHex, setCopiedHex] = useState(null)
  const [copiedCode, setCopiedCode] = useState(false)
  const [saveStatus, setSaveStatus] = useState('idle')

  const [bg, surface, primary, accent, text] = palette.colors.map(c => c.hex)

  function copyHex(hex) {
    navigator.clipboard.writeText(hex)
    setCopiedHex(hex)
    setTimeout(() => setCopiedHex(null), 2000)
  }

  function copyCode() {
    navigator.clipboard.writeText(files[activeTab]?.code || '')
    setCopiedCode(true)
    setTimeout(() => setCopiedCode(false), 2000)
  }

  async function handleSave() {
    if (saveStatus === 'saving' || saveStatus === 'saved') return
    setSaveStatus('saving')
    try {
      await savePalette({
        name:      palette.name,
        desc:      palette.desc,
        colors:    palette.colors,
        insight:   palette.insight,
        appType:   selections.appType,
        market:    selections.market,
        mood:      selections.mood,
        framework: selections.framework,
        approach:  selections.approach,
      })
      setSaveStatus('saved')
    } catch (err) {
      console.error(err)
      setSaveStatus('error')
      setTimeout(() => setSaveStatus('idle'), 3000)
    }
  }

  return (
    <div className="animate-fade-up space-y-6 md:space-y-8">

      {/* Header — stacks on mobile */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
        <div>
          <h2 className="font-syne font-extrabold text-xl md:text-2xl text-theme mb-1">
            {palette.name}
          </h2>
          <p className="text-muted2 text-sm max-w-md">{palette.desc}</p>
        </div>

        {/* Action buttons — full width on mobile */}
        <div className="flex gap-2 md:flex-shrink-0">
          <button
            onClick={handleSave}
            disabled={saveStatus === 'saving' || saveStatus === 'saved'}
            className={`flex-1 md:flex-none flex items-center justify-center gap-2
              px-4 py-2 rounded-xl text-xs font-syne font-bold transition-all duration-200
              ${saveStatus === 'saved'
                ? 'border border-brand-accent/40 bg-brand-accent/10 text-brand-accent'
                : saveStatus === 'error'
                  ? 'border border-red-500/40 bg-red-500/10 text-red-400'
                  : 'border border-theme bg-theme-surface2 text-muted2 hover:border-brand-accent hover:text-brand-accent'
              }`}
          >
            {saveStatus === 'saving' ? (
              <span className="animate-pulse">Saving…</span>
            ) : saveStatus === 'saved' ? (
              <><FiCheck size={13} /> Saved!</>
            ) : saveStatus === 'error' ? (
              'Failed — retry'
            ) : (
              <><FiBookmark size={13} /> Save Palette</>
            )}
          </button>

          <button
            onClick={reset}
            className="flex-1 md:flex-none flex items-center justify-center gap-2
              px-4 py-2 rounded-xl border border-theme text-muted2 text-xs
              font-syne font-bold hover:border-theme2 hover:text-theme
              transition-all duration-200"
          >
            <FiRefreshCw size={13} />
            Start Over
          </button>
        </div>
      </div>

      {/* Color Swatches */}
      <div>
        <p className="text-xs uppercase tracking-widest text-muted mb-3">
          Color Palette
        </p>
        <div className="grid grid-cols-5 gap-1.5 md:gap-3">
          {palette.colors.map((c) => (
            <button
              key={c.hex}
              onClick={() => copyHex(c.hex)}
              className="group rounded-lg md:rounded-xl overflow-hidden border border-theme
                hover:scale-105 transition-transform duration-200"
            >
              <div className="h-12 md:h-20 w-full relative" style={{ background: c.hex }}>
                <div className="absolute inset-0 flex items-center justify-center
                  bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {copiedHex === c.hex
                    ? <FiCheck size={14} className="text-white" />
                    : <FiCopy size={12} className="text-white" />
                  }
                </div>
              </div>
              <div className="bg-theme-surface2 p-1.5 md:p-2">
                <p className="text-[0.5rem] md:text-[0.58rem] uppercase tracking-wider text-muted hidden md:block">
                  {c.role}
                </p>
                <p className="font-mono text-[0.55rem] md:text-xs text-theme font-medium truncate">
                  {c.hex}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Mini UI Preview */}
      <div>
        <p className="text-xs uppercase tracking-widest text-muted mb-3">
          Live Preview
        </p>
        <div className="rounded-2xl overflow-hidden border border-theme">

          {/* Fake navbar */}
          <div className="flex items-center justify-between px-4 md:px-5 py-3"
            style={{ background: surface }}>
            <span className="font-syne font-bold text-sm" style={{ color: text }}>
              MyApp
            </span>
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full" style={{ background: primary }} />
              <div className="w-2 h-2 rounded-full" style={{ background: accent }} />
            </div>
          </div>

          {/* Fake body */}
          <div className="p-3 md:p-5 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4"
            style={{ background: bg }}>

            {/* Balance card */}
            <div className="rounded-xl p-3 md:p-4 md:col-span-2" style={{ background: surface }}>
              <p className="text-xs mb-2 opacity-60" style={{ color: text }}>
                Total Balance
              </p>
              <p className="font-syne font-bold text-lg md:text-xl mb-3 md:mb-4"
                style={{ color: text }}>
                KES 48,200
              </p>
              <div className="flex gap-2">
                <button className="flex-1 py-2 rounded-lg text-xs font-bold font-syne"
                  style={{ background: primary, color: text }}>
                  Send
                </button>
                <button className="flex-1 py-2 rounded-lg text-xs font-bold font-syne"
                  style={{ background: accent, color: bg }}>
                  Top Up
                </button>
              </div>
            </div>

            {/* Recent transactions */}
            <div className="rounded-xl p-3 md:p-4" style={{ background: surface }}>
              <p className="text-xs mb-3 opacity-60" style={{ color: text }}>Recent</p>
              {[
                ['Groceries', '-KES 850'],
                ['Salary',    '+KES 45K'],
                ['Rent',      '-KES 12K'],
              ].map(([label, amount]) => (
                <div key={label} className="flex justify-between items-center mb-2">
                  <span className="text-xs" style={{ color: text, opacity: 0.7 }}>
                    {label}
                  </span>
                  <span className="text-xs font-mono font-medium"
                    style={{ color: amount.startsWith('+') ? accent : primary }}>
                    {amount}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Code Output */}
      <div>
        <p className="text-xs uppercase tracking-widest text-muted mb-3">
          Code — ready to paste
        </p>

        {files.length > 1 && (
          <div className="flex gap-2 mb-3 flex-wrap">
            {files.map((f, i) => (
              <button
                key={f.label}
                onClick={() => setActiveTab(i)}
                className={`px-3 md:px-4 py-1.5 rounded-lg text-xs font-mono
                  transition-all duration-150
                  ${activeTab === i
                    ? 'bg-brand-accent/10 border border-brand-accent text-brand-accent'
                    : 'border border-theme text-muted hover:border-theme2 hover:text-theme'
                  }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        )}

        <div className="rounded-xl overflow-hidden border border-theme">
          <div className="flex items-center justify-between px-4 py-2
            bg-theme-surface2 border-b border-theme">
            <span className="font-mono text-xs text-muted truncate mr-2">
              {files[activeTab]?.filename}
            </span>
            <button
              onClick={copyCode}
              className="flex items-center gap-1.5 text-xs font-mono flex-shrink-0
                text-muted2 hover:text-brand-accent transition-colors duration-200"
            >
              {copiedCode
                ? <><FiCheck size={12} /> Copied!</>
                : <><FiCopy size={12} /> Copy</>
              }
            </button>
          </div>
          <pre className="p-3 md:p-4 text-xs font-mono leading-relaxed overflow-x-auto
            bg-[#0b0b16] text-[#c0c0d8] whitespace-pre max-h-64 md:max-h-none">
            {files[activeTab]?.code}
          </pre>
        </div>
      </div>

      {/* Cultural Insight */}
      <div className="rounded-xl border border-brand-accent/20 bg-brand-accent/5 p-4 md:p-5">
        <p className="text-xs uppercase tracking-widest text-brand-accent mb-2">
          Why this theme works
        </p>
        <p className="text-sm text-muted2 leading-relaxed">{palette.insight}</p>
      </div>

      {/* Suggestion */}
      <div className="rounded-xl border border-theme bg-theme-surface2 p-4 md:p-5
        flex items-start gap-3 md:gap-4">
        <span className="text-xl flex-shrink-0">⁉️</span>
        <div>
          <p className="text-xs uppercase tracking-widest text-muted mb-1">
            Not a preferred theme?
          </p>
          <p className="text-sm text-muted2 leading-relaxed mb-3">
            {palette.suggestion}.
          </p>
          <button
            onClick={reset}
            className="font-syne font-bold text-xs text-brand-accent
              border border-brand-accent/30 bg-brand-accent/10
              px-4 py-2 rounded-lg hover:bg-brand-accent/15
              transition-all duration-200"
          >
            ← Try Different Settings
          </button>
        </div>
      </div>

    </div>
  )
}
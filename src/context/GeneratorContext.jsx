import { createContext, useContext, useState } from 'react'


const GeneratorContext = createContext()

export function GeneratorProvider({ children }) {
  const [step, setStep] = useState(1)
  const [selections, setSelections] = useState({
    appType:   '',
    market:    '',
    mood:      '',
    framework: 'css',
    approach:  '',
  })

  const update = (key, value) =>
    setSelections(prev => ({ ...prev, [key]: value }))

  const nextStep = () => setStep(prev => Math.min(prev + 1, 4))
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1))
  const reset = () => {
    setStep(1)
    setSelections({ appType: '', market: '', mood: '', framework: 'css', approach: '' })
  }

  return (
    <GeneratorContext.Provider value={{ step, selections, update, nextStep, prevStep, reset }}>
      {children}
    </GeneratorContext.Provider>
  )
}

export const useGenerator = () => useContext(GeneratorContext)
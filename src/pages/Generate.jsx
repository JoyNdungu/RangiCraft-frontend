import { useGenerator } from '../context/GeneratorContext'
import StepTracker from '../components/StepTracker'
import StepOne from '../components/steps/StepOne'
import StepTwo from '../components/steps/StepTwo'
import StepThree from '../components/steps/StepThree'
import StepFour from '../components/steps/StepFour'
import { FaPaintBrush } from "react-icons/fa";

export default function Generate() {
  const { step } = useGenerator()

  return (
    <main className="min-h-screen px-4 md:px-6 pt-28 md:pt-32 pb-20">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em]
            text-brand-accent border border-brand-accent/30 bg-brand-accent/10
            px-4 md:px-5 py-2 rounded-full mb-4 md:mb-5">
            <FaPaintBrush /> Color Generator
          </div>
          <h1 className="font-syne font-extrabold text-2xl md:text-3xl lg:text-4xl
            tracking-tight text-theme">
            Build your perfect palette
          </h1>
          <p className="text-muted2 text-sm mt-2 md:mt-3">
            3 quick steps — then your palette is ready to use
          </p>
        </div>

        {/* Step tracker */}
        <StepTracker />

        {/* Step content */}
        <div className="bg-theme-surface border border-theme rounded-2xl p-5 md:p-8">
          {step === 1 && <StepOne />}
          {step === 2 && <StepTwo />}
          {step === 3 && <StepThree />}
          {step === 4 && <StepFour />}
        </div>

      </div>
    </main>
  )
}
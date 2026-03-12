import { Routes, Route } from 'react-router-dom'
import { useTheme } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Generate from './pages/Generate'

function App() {
  const { theme } = useTheme()

  return (
    <div className="min-h-screen bg-theme-bg text-theme font-dm transition-colors duration-300">

      {/* Background pattern — dots in light, grid in dark */}
      {theme === 'dark' ? (
        <div className="fixed inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(var(--grid) 1px, transparent 1px),
              linear-gradient(90deg, var(--grid) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px'
          }}
        />
      ) : (
        <div className="fixed inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(var(--dot) 1.2px, transparent 1.2px)`,
            backgroundSize: '24px 24px'
          }}
        />
      )}

      {/* Glow orb top-left */}
      <div className="fixed top-[-200px] left-[-150px] w-[600px] h-[600px]
        rounded-full pointer-events-none z-0 blur-[90px] transition-all duration-500"
        style={{ background: `radial-gradient(circle, var(--orb1), transparent 70%)` }}
      />

      {/* Glow orb bottom-right */}
      <div className="fixed bottom-[-150px] right-[-100px] w-[500px] h-[500px]
        rounded-full pointer-events-none z-0 blur-[90px] transition-all duration-500"
        style={{ background: `radial-gradient(circle, var(--orb2), transparent 70%)` }}
      />

      {/* Extra personality for light mode */}
      {theme === 'light' && (
        <div className="fixed top-[30%] left-[50%] -translate-x-1/2 w-[700px] h-[400px]
          rounded-full pointer-events-none z-0 blur-[120px] opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(34,110,54,0.15), transparent 70%)' }}
        />
      )}

      <div className="relative z-10">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generate" element={<Generate />} />
        </Routes>
      </div>

    </div>
  )
}

export default App
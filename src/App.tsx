import '@petank-ui/design-tokens/dist/css/_variables.css'
import '@petank-ui/design-tokens/dist/css/color-scheme.css'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Test Raton</h1>
        <p>React + Vite + Petank Design Tokens</p>
      </header>
      <main className="app-main">
        <section className="token-showcase">
          <h2>Design Tokens — Colors</h2>
          <div className="color-grid">
            {['blue', 'green', 'red', 'amber', 'violet', 'teal'].map((color) => (
              <div key={color} className="color-swatch">
                <div
                  className="swatch-preview"
                  style={{ backgroundColor: `var(--color-${color}-9-light)` }}
                />
                <span>{color}</span>
              </div>
            ))}
          </div>
        </section>
        <section className="token-showcase">
          <h2>Design Tokens — Spacing</h2>
          <div className="spacing-grid">
            {[1, 2, 4, 8, 12, 16].map((step) => (
              <div key={step} className="spacing-row">
                <span className="spacing-label">step {step}</span>
                <div
                  className="spacing-bar"
                  style={{ width: `calc(${step} * 4px)` }}
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App

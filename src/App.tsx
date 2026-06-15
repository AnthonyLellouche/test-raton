import '@petank-ui/design-tokens/dist/css/_variables.css'
import '@petank-ui/design-tokens/dist/css/color-scheme.css'
import './App.css'
import { Avatar, AvatarGroup } from './Avatar'

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
        <section className="token-showcase">
          <h2>Design Tokens — Avatar</h2>

          <div className="avatar-showcase-group">
            <h3 className="avatar-showcase-label">Letters</h3>
            <div className="avatar-showcase-rows">
              {(['blue', 'green', 'pink', 'red', 'orange', 'violet'] as const).map((color) => (
                <div key={color} className="avatar-showcase-row">
                  <span className="avatar-showcase-color-name">{color}</span>
                  <div className="avatar-showcase-sizes">
                    <Avatar size="sm" color={color} initials="AB" />
                    <Avatar size="md" color={color} initials="AB" />
                    <Avatar size="lg" color={color} initials="AB" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="avatar-showcase-group">
            <h3 className="avatar-showcase-label">Icon</h3>
            <div className="avatar-showcase-row">
              {(['blue', 'green', 'pink', 'red', 'orange', 'violet'] as const).map((color) => (
                <Avatar key={color} size="md" color={color} content="icon" />
              ))}
            </div>
          </div>

          <div className="avatar-showcase-group">
            <h3 className="avatar-showcase-label">Group</h3>
            <div className="avatar-showcase-row">
              <AvatarGroup
                size="sm"
                avatars={[
                  { color: 'blue', initials: 'AB' },
                  { color: 'green', initials: 'CD' },
                  { color: 'violet', initials: 'EF' },
                  { color: 'pink', initials: 'GH' },
                ]}
              />
              <AvatarGroup
                size="md"
                avatars={[
                  { color: 'blue', initials: 'AB' },
                  { color: 'green', initials: 'CD' },
                  { color: 'violet', initials: 'EF' },
                  { color: 'pink', initials: 'GH' },
                ]}
              />
              <AvatarGroup
                size="lg"
                avatars={[
                  { color: 'blue', initials: 'AB' },
                  { color: 'green', initials: 'CD' },
                  { color: 'violet', initials: 'EF' },
                  { color: 'pink', initials: 'GH' },
                ]}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App

import './App.css'

function App() {
  return (
    <div className="landing">
      <header className="header">
        <nav className="nav">
          <span className="logo">Family Tree</span>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#how-it-works">How it works</a>
            <a href="#signup" className="btn btn-outline">Sign in</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>
            Discover your roots.
            <br />
            <span className="highlight">Preserve your story.</span>
          </h1>
          <p className="hero-subtitle">
            Build your family tree, explore your ancestry, and share your heritage
            with future generations — all in one beautiful place.
          </p>
          <div className="hero-actions">
            <a href="#signup" className="btn btn-primary">
              Start free trial
            </a>
            <a href="#how-it-works" className="btn btn-secondary">
              See how it works
            </a>
          </div>
        </section>

        <section id="features" className="features">
          <h2>Everything you need</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">🌳</div>
              <h3>Visual family tree</h3>
              <p>Build an interactive tree and see connections across generations.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📸</div>
              <h3>Photos & memories</h3>
              <p>Attach photos, documents, and stories to each family member.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔗</div>
              <h3>Share & collaborate</h3>
              <p>Invite relatives to contribute and grow the tree together.</p>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="how-it-works">
          <h2>How it works</h2>
          <ol className="steps">
            <li>Create your account and add yourself</li>
            <li>Add parents, siblings, and children</li>
            <li>Invite family members to expand the tree</li>
            <li>Explore, discover, and preserve your history</li>
          </ol>
        </section>

        <section id="signup" className="cta">
          <h2>Ready to get started?</h2>
          <p>Join thousands of families preserving their stories.</p>
          <form className="signup-form">
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email address"
            />
            <button type="submit" className="btn btn-primary">
              Get started free
            </button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Family Tree. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App

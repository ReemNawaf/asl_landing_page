import { Link } from 'react-router-dom'
import '../App.css'

function LandingPage() {
  return (
    <div className="landing">
      <section className="hero-asl" dir="rtl">
        <div className="hero-asl-top">
          <span className="hero-brand">مشــــروع أصـــل</span>
          <span className="hero-year">2026</span>
        </div>
        <div className="hero-asl-content">
          <div className="hero-asl-title-image-wrap">
            <img
              src="/asl_tree.png"
              alt="نخلة"
              className="hero-asl-tree"
            />
            <h1 className="hero-asl-title">أصـــــــل</h1>
          </div>
          <p className="hero-asl-subtitle">
            لتوثيق شجـــرة العائلـــة العربيـــة 
            <br />
            وعرضها بتصميـم تفاعلــي مميـــز
          </p>
          <div className="hero-asl-actions">
            <a href="https://tree.aasl.app/auth-route" target="_blank" rel="noopener noreferrer" className="btn btn-asl-primary">
              ابن شجرة عائلتك
            </a>
            <Link to="/project-message" className="btn btn-ghost">
              رسالة المشروع
            </Link>
          </div>
        </div>
      </section>

      <main>

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

export default LandingPage

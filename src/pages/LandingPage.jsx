import { Link } from 'react-router-dom'
import KnownTreesSection from '../components/KnownTreesSection'
import AdvantagesSection from '../components/AdvantagesSection'
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
        <KnownTreesSection />
        <AdvantagesSection />
      </main>

      <footer className="footer" dir="rtl">
        <span className="footer-item">مشــــروع أصـــل</span>
        <span className="footer-item">طُــــــور بإحســــــــان</span>
        <a href="https://x.com/ReemNawaf" target="_blank" rel="noopener noreferrer" className="footer-item footer-item-accent">ريـــــــم المطيــــــري</a>
      </footer>
    </div>
  )
}

export default LandingPage

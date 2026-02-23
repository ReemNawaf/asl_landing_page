import { Link } from 'react-router-dom'
import './ProjectMessage.css'

function ProjectMessage() {
  return (
    <div className="project-message" dir="rtl">
      <Link to="/" className="back-link">← العودة</Link>
      <h1>رسالة المشروع</h1>
      <p>محتوى رسالة المشروع سيُضاف هنا.</p>
    </div>
  )
}

export default ProjectMessage

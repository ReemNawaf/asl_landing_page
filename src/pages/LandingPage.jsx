import { useState } from 'react'
import KnownTreesSection from '../components/KnownTreesSection'
import AdvantagesSection from '../components/AdvantagesSection'
import './ProjectMessage.css'
import '../App.css'

function LandingPage() {
  const [showProjectMessage, setShowProjectMessage] = useState(false)

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
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => setShowProjectMessage((v) => !v)}
            >
            قصة المشروع ورسالته 
            </button>
          </div>
        </div>
      </section>

      <main>
        {showProjectMessage && (
          <section className="project-message-inline" dir="rtl">
            <div className="project-message-inline-inner">
              <h2 className="asl-second-title">قصــة المشـروع ورسالتــــه</h2>

              <p>
              سألني والدي ذات يوم عن قريبة لنا من العائلة، ليعلم بعدها أني لا علم لي بأحد أبعد من
              جيل واحد عني. فطلب مني أن أحضر ورقة وقلم، فاحضرت الأيباد :) وبدأ يملي علي جذور
              العائلة ثم يخبرني بتفرع كلٍ منهم. امتلت الورقة ولم يبقى هنالك مساحة بيضاء لأكتب
              المزيد، امتلت بخطوط وتفرعات لا يستطيع أحدٌ فك شفرتها سواي.
            </p>

            <p>
              ثم قال لي والدي أن هذا هو جزءٌ بسيط مما يعلم هو، وأن عمه كان يعرف الجميع وقد توفي
              منذ سنين وذهبت كل هذه المعرفة معه، فلم يكتبها ويوثقها أحدٌ عنه. ووجدته منطقًا عجيب…
               <strong>أن نخسر البيانات في عهد ثورة البيانات</strong>.
                وأن استمر هذا النمط، فالكثير والكثير من معلومات أصلنا ستغادرنا مع من حفظها وعرفها.
              <br /><strong>كل جيل يعرف أقل بكثير من الجيل الذي يسبقه عن شجرة العائلة وأقاربه</strong>.

            </p>
              
            <p>
              فعزمت على توثيق شجرتنا، وقلت لنفسي لابد من وجود تطبيق يساعدني على حفظ وتسجيل
              معلومات الشجرة بشكل رقمي وتفاعلي بحيث يسهل تصفحها وفهمها. ووجدت تطبيقان إلى
              ثلاثة تطبيقات… ولكن هذه التطبيقات بُنيت لتحاكي أصول الأشجار الغربية. ففيها تُبنى
              الشجرة ابتداءً منك ثم تتفرع للأعلى لوالديك ثم لجدك. هذه التطبيقات لا تستطيع أن
              تحفظ وتستعرض جميع علاقات الشجرة العربية بتعقيدها، وأن حاولت إدخال شجرة بأجيالٍ
              متعددة يصبح تصفحها صعبًا أو شبه مستحيل.
            </p>

            <p>
              وبما أني مبرمجة قررت أن أبني تطبيق يناسب الأشجار العربية ويدعم تعقيداتها ويستعرضها
              بطريقة تفاعلية… وقتها في الجامعة كنت أدرس مادة اسمها "تفاعل الإنسان والحاسب" وهي
              مادة تدرس كيف يجب أن <strong>تُصمم المنتجات</strong> (وبالأخص التقنية) لتناسب احتياج
              الإنسان، وكيف أن التصميم هو جوهر نجاح أي منتج يسخدمه الإنسان. وكان مشروعها هو أن
              نحسن تصميم منتج ما، فعملت في مشروع المادة على تحليل تطبيقات تصميم أشجار العائلة،
              وما هي المفاهيم الرئيسية للتصميم التي أهُملت، واقترحت تصميم أفضل لواجهة تطبيقات
              أشجار العائلة. واسميته <strong>أصل</strong>، وكان مشروع المادة هو النواة التي عملت
              على تحسينها لاحقًا ليصبح أصل ما هو عليه اليوم.
            </p>

            <p>ورسالة مشروع أصل بسيطة</p>
            <blockquote className="project-message-quote">أعرف/أفهم شجرة عائلتك</blockquote>
            <p>وبالأخص لجيل الأيباد :)</p>
            </div>
          </section>
        )}

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

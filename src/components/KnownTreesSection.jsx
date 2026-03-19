import TreeCard from './TreeCard'
import './TreeCard.css'
import './KnownTreesSection.css'

const TREES = [
  {
    id: 1,
    title: 'شجرة الأنبياء',
    visitUrl: 'https://tree.aasl.app/trees/0ad94300-45df-17de-8a61-13ade8d68905',
    description: (
      <>
        شجرة تفاعلية تُظهر تسلسل الأنبياء عبر الأجيال، وتُبيّن الروابط بينهم من <strong>آدم عليه السلام</strong> وبداية الخلق إلى خاتم النبيين <strong>محمد بن عبدالله</strong> عليه أفضل الصلاة وأتم التسليم. يمكنك التنقّل بين العقد لاستكشاف مسار النبوّة وكيف تتابعت دعوة الهداية عبر الأجيال.
      </>
    ),
  },
  {
    id: 2,
    title: 'شجرة قريش',
    visitUrl: 'https://tree.aasl.app/trees/69008580-93bf-177c-95fb-35375e66874a',
    description: (
      <>
        شجرة تفاعلية تُبيّن نسب قبيلة قريش وتفرّعاتها عبر الأجيال، حيث تنطلق من الجد الأعلى <strong>فهر بن مالك</strong>، وتتفرّع إلى بطونها المعروفة التي شكّلت جزءًا مهمًا من تاريخ العرب. يمكنك استكشاف الفروع والعلاقات بين الأسماء، والتعرّف على امتداد هذه القبيلة التي انبثقت منها شخصيات بارزة في التاريخ الإسلامي.
      </>
    ),
  },
  {
    id: 3,
    title: 'شجرة آل سعود',
    visitUrl: 'https://tree.aasl.app/trees/2cfe9100-1739-17dc-b781-0f4333cb5fe5',
    description: (
      <>
        شجرة تفاعلية تُظهر امتداد أسرة آل سعود عبر الأجيال، من <strong>أبناء الإمام سعود بن محمد</strong> وجذورها الأولى في الدرعية، مرورًا بمؤسسي الدولة، وصولًا إلى <strong>ملك المملكة العربية السعودية عبدالعزيز بن عبدالرحمن وأبناءه</strong>. تتيح لك الشجرة استكشاف تفرّعات الأسرة وروابطها، والتعرّف على تسلسلها التاريخي الذي أسهم في قيام الدولة.
      </>
    ),
  },
]

function KnownTreesSection() {
  return (
    <section className="known-trees" dir="rtl">
      <div className="known-trees-inner">
        <h2 className="asl-second-title">أشجــــار معـروفــــة</h2>
        <p className="known-trees-description">
          نعمل على توثيق الأشجار المعروفة مثل شجرة الأنبياء، شجرة قريش، وشجرة آل سعود. وجميعها لا تزال قيد الإنشاء، ساعدنا بتوثيقها عبر إرسال مصادر ومراجع معتمدة إلى بريد المشروع{' '}
          <a href="mailto:asl.app.contact@gmail.com">asl.app.contact@gmail.com</a>
        </p>
        <div className="known-trees-grid">
        {TREES.map((tree) => (
          <TreeCard
            key={tree.id}
            title={tree.title}
            description={tree.description}
            buttonText="زيــــارة"
            visitUrl={tree.visitUrl}
          />
        ))}
        </div>
      </div>
    </section>
  )
}

export default KnownTreesSection

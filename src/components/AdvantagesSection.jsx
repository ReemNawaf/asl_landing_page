import FeatureCardOneColumn from './FeatureCardOneColumn'
import FeatureCardTwoColumn from './FeatureCardTwoColumn'
import './FeatureCardOneColumn.css'
import './FeatureCardTwoColumn.css'
import './AdvantagesSection.css'

const ADVANTAGES = [
  {
    id: 1,
    title: 'شجرة تفاعلية',
    description: 'كل عضو (عنقود Node) يمكن استعراضه كجذر للشجرة ورؤية جميع شركاءه وأبناءه وأحفاده. تأتي هذه الميزة لتسهيل استعراض جزء من الشجرة بتوسع خصوصًا عند تصميم شجرة كبيرة ومتعددة الأجيال.',
    
  },
  {
    id: 2,
    title: 'دعم خصائص الشجرة العربية',
    description: 'تبدأ الشجرة من الجذور والأجداد وتتفرع وصولًا للأبناء والأحفاد، وتعرض الشجرة كاملة مع توضيح العلاقات بين أعضاءها كـ: الأزواج، والأبناء، والحالات الخاصة متضمنةً حالات الطلاق وتعدد الزوجات.',
  },
  {
    id: 3,
    title: 'تحكم تام في طريقة عرض الشجرة',
    description: 'تستطيع التحكم بعدد الأجيال التي تظهر على الشجرة، وما إذا كنت تريد أن يعرض أزواج كل فرد على الشجرة أم لا، وغيرها من الخيارات التي تساعدك على عرض الشجرة بالطريقة المناسبة لك ولعائلتك.',
  },
  {
    id: 4,
    title: 'دعم الأزواج من داخل الشجرة',
    description: 'كحالة خاصة، عند إضافة زوج/ة من داخل الشجرة، يضاف العضو مرة واحدة فقط، ولكنه يعرض مرتين في الشجرة. الأولى في شجرته الأصلية كابن/ة (عنقود أصلي)، والأخرى يظهر العنقود باللون الأزرق (عنقود مرآة) للإشارة بأن الزوج هو عضو أصلي في الشجرة.',
  },
  {
    id: 5,
    title: 'البحث في الشجرة',
    description: 'تستطيع البحث باسم العضو في الشجرة ويتم نقلك فوريًا لموقع العضو في الشجرة.',
  },
  {
    id: 6,
    title: 'مشاركة الشجرة مع أعضاء العائلة',
    description: 'يمكنك مشاركة الشجرة مع أفراد العائلة أو جعلها خاصة لا يستطيع أحد الوصول لها إلا مالك الشجرة.',
    
  },
]

function AdvantagesSection() {
  return (
    <section className="advantages" dir="rtl">
      <div className="advantages-inner">
        <h2 className="asl-second-title">مزايـــــــا شجــــــرة أصـــل</h2>
        <div className="advantages-grids-wrapper">
          <div className="advantages-grid-first-set">
            <div className="advantages-card-tall">
              <FeatureCardOneColumn
                title={ADVANTAGES[0].title}
                description={ADVANTAGES[0].description}
              />
            </div>
            <FeatureCardTwoColumn title={ADVANTAGES[1].title} description={ADVANTAGES[1].description} />
            <FeatureCardTwoColumn title={ADVANTAGES[2].title} description={ADVANTAGES[2].description} />
          </div>
          <div className="advantages-grid-second-set">
            <div className="advantages-cards-column">
              <div className="advantages-card-spouses">
                <FeatureCardTwoColumn title={ADVANTAGES[3].title} description={ADVANTAGES[3].description} />
              </div>
              <FeatureCardTwoColumn title={ADVANTAGES[4].title} description={ADVANTAGES[4].description} />
            </div>
            <div className="advantages-card-tall">
              <FeatureCardOneColumn
                title={ADVANTAGES[5].title}
                description={ADVANTAGES[5].description}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdvantagesSection

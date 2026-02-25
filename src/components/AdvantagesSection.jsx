import FeatureCardOneColumn from './FeatureCardOneColumn'
import FeatureCardTwoColumn from './FeatureCardTwoColumn'
import './FeatureCardOneColumn.css'
import './FeatureCardTwoColumn.css'
import './AdvantagesSection.css'

const PLACEHOLDER_TEXT = 'شجرة هي شجرة شجرة هي شجرة هي شجرة شجرة هي.'

function AdvantagesSection() {
  return (
    <section className="advantages" dir="rtl">
      <div className="advantages-inner">
        <h2 className="asl-second-title">مزايـــــــا شجــــــرة أصـــل</h2>
        <div className="advantages-grid">
        <div className="advantages-card-tall">
          <FeatureCardOneColumn
            title="ميزة أ"
            description={PLACEHOLDER_TEXT}
          />
        </div>
        <FeatureCardTwoColumn title="ميزة أ" description={PLACEHOLDER_TEXT} />
        <FeatureCardTwoColumn title="ميزة أ" description={PLACEHOLDER_TEXT} />
        </div>
      </div>
    </section>
  )
}

export default AdvantagesSection

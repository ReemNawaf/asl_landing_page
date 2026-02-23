import TreeCard from './TreeCard'
import './TreeCard.css'
import './KnownTreesSection.css'

const TREES = [
  {
    id: 1,
    title: 'شجرة الرسول',
    description: 'شجرة هي شجرة هي شجرة هي شجرة هي شجرة هي شجرة هي شجرة هي شجرة هي شجرة.',
  },
  {
    id: 2,
    title: 'شجرة الرسول',
    description: 'شجرة هي شجرة هي شجرة هي شجرة هي شجرة هي شجرة هي شجرة هي شجرة هي شجرة.',
  },
  {
    id: 3,
    title: 'شجرة الرسول',
    description: 'شجرة هي شجرة هي شجرة هي شجرة هي شجرة هي شجرة هي شجرة هي شجرة هي شجرة.',
  },
]

function KnownTreesSection() {
  return (
    <section className="known-trees" dir="rtl">
      <h2 className="asl-second-title">أشجــــار معـروفــــة</h2>
      <div className="known-trees-grid">
        {TREES.map((tree) => (
          <TreeCard
            key={tree.id}
            title={tree.title}
            description={tree.description}
            buttonText="زيــــارة"
          />
        ))}
      </div>
    </section>
  )
}

export default KnownTreesSection

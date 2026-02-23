function TreeCard({ title, description, iconSrc = '/asl_tree.png', buttonText = 'زيارة', onVisit }) {
  return (
    <article className="tree-card" dir="rtl">
      <div className="tree-card-header">
        <img src={iconSrc} alt="" className="tree-card-icon" />
      </div>
      <div className="tree-card-body">
        <h3 className="tree-card-title">{title}</h3>
        <p className="tree-card-description">{description}</p>
        <button type="button" className="tree-card-btn" onClick={onVisit}>
          {buttonText}
        </button>
      </div>
    </article>
  )
}

export default TreeCard

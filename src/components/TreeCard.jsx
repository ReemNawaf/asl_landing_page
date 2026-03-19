function TreeCard({ title, description, iconSrc = '/asl_tree.png', buttonText = 'زيارة', visitUrl, onVisit }) {
  const ButtonOrLink = visitUrl ? 'a' : 'button'
  const linkProps = visitUrl
    ? { href: visitUrl, target: '_blank', rel: 'noopener noreferrer' }
    : { type: 'button', onClick: onVisit }

  return (
    <article className="tree-card" dir="rtl">
      <div className="tree-card-header">
        <img src={iconSrc} alt="" className="tree-card-icon" />
      </div>
      <div className="tree-card-body">
        <div className="tree-card-title-row">
          <h3 className="tree-card-title">{title}</h3>
          <span className="tree-card-chip">قيد الإنشاء</span>
        </div>
        <p className="tree-card-description">{description}</p>
        <ButtonOrLink className="tree-card-btn" {...linkProps}>
          {buttonText}
        </ButtonOrLink>
      </div>
    </article>
  )
}

export default TreeCard

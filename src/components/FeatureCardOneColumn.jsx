function FeatureCardOneColumn({ title, description }) {
  return (
    <article className="feature-card-one" dir="rtl">
      <div className="feature-card-one-inner">
        <div className="feature-card-one-content">
          <h3 className="feature-card-one-title">{title}</h3>
          <p className="feature-card-one-description">{description}</p>
        </div>
        <div className="feature-card-one-spacer" />
      </div>
      <div className="feature-card-one-stripe" />
    </article>
  )
}

export default FeatureCardOneColumn

function FeatureCardTwoColumn({ title, description, imageSrc }) {
  return (
    <article className="feature-card-two" dir="rtl">
      <div className="feature-card-two-content">
        <h3 className="feature-card-two-title">{title}</h3>
        <p className="feature-card-two-description">{description}</p>
      </div>
      <div className="feature-card-two-stripe">
        {imageSrc && <img src={imageSrc} alt="" className="feature-card-two-image" />}
      </div>
    </article>
  )
}

export default FeatureCardTwoColumn

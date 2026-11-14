export default function CategoryCard({ category }) {
  return (
    <article className="category-card reveal">
      <div className="category-card__image">
        <img src={category.image} alt={category.alt} loading="lazy" />
        <span className="category-card__number">{category.number}</span>
        <a
          className="category-card__arrow"
          href="#contact"
          aria-label={`Ask about ${category.title}`}
          title={`Ask about ${category.title}`}
        >
          ↗
        </a>
      </div>
      <div className="category-card__copy">
        <h3>{category.title}</h3>
        <p>{category.description}</p>
        <a href="#contact">Ask about availability <span aria-hidden="true">↗</span></a>
      </div>
    </article>
  );
}

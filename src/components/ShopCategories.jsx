import { categories } from "../data/categories.js";
import CategoryCard from "./CategoryCard.jsx";
import SectionHeading from "./SectionHeading.jsx";

export default function ShopCategories() {
  return (
    <section className="shop-section section-pad" id="shop">
      <div className="section-shell">
        <div className="shop-heading-row reveal">
          <SectionHeading
            eyebrow="A considered collection"
            title={<>Good things,<br /><em>well chosen.</em></>}
          />
          <p className="shop-intro">
            A little of what you love, a few things you haven&apos;t met yet. Every shelf is worth a closer look.
          </p>
        </div>
        <div className="category-grid">
          {categories.map((category) => <CategoryCard key={category.number} category={category} />)}
        </div>
        <p className="shop-note">A glimpse of what&apos;s in store. Selection and availability may vary.</p>
      </div>
    </section>
  );
}

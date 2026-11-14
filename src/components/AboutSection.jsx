import aboutImage from "../assets/images/humble-about.png";
import SectionHeading from "./SectionHeading.jsx";

export default function AboutSection() {
  return (
    <section className="about-section section-pad" id="about">
      <div className="about-image-wrap reveal">
        <img
          src={aboutImage}
          alt="The Humble Smoker"
          loading="lazy"
        />
        <div className="image-caption"><span className="caption-dot" /> A good place to take your time</div>
        <span className="image-vertical-label">A LOCAL STATE OF MIND — EST. BLOEMFONTEIN</span>
      </div>
      <div className="about-copy reveal">
        <SectionHeading eyebrow="About The Humble Smoker" title={<>More than a<br /><em>smoke shop.</em></>} />
        <p className="body-copy">
          The Humble Smoker brings together carefully selected smoking accessories, lifestyle products
          and a welcoming in-store experience in the heart of Bloemfontein.
        </p>
        <p className="body-copy body-copy--muted">
          No rush, no fuss. Just a thoughtful range, friendly faces and a place that feels like yours.
          Whether you know exactly what you&apos;re after or just want a look around, you&apos;re always welcome. EST. 2019
        </p>
        <a className="text-link" href="#visit">Come visit us <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  );
}

import SectionHeading from "./SectionHeading.jsx";

const reasons = [
  { number: "01", title: "Quality selection", copy: "A carefully chosen range, never shelves filled with just anything." },
  { number: "02", title: "Friendly advice", copy: "A relaxed space to ask questions, get recommendations and take your time." },
  { number: "03", title: "Proudly local", copy: "Your neighbourhood headshop, right here in Bloemfontein." },
  { number: "04", title: "Open late", copy: "More time to drop in, with convenient weekday and weekend hours." },
];

export default function WhyVisit() {
  return (
    <section className="why-section section-pad">
      <div className="section-shell">
        <div className="why-heading reveal">
          <SectionHeading eyebrow="The Humble difference" title={<>Good people.<br /><em>Good energy.</em></>} />
          <p className="why-aside">Come as you are.<br />Stay a little while.</p>
        </div>
        <div className="reason-grid">
          {reasons.map((reason) => (
            <article className="reason-card reveal" key={reason.number}>
              <span className="reason-number">{reason.number}</span>
              <div><h3>{reason.title}</h3><p>{reason.copy}</p></div>
              <span className="reason-plus" aria-hidden="true">+</span>
            </article>
          ))}
        </div>
      </div>
      <div className="humble-suite">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2200&q=85"
          alt=""
          loading="lazy"
        />
        <div className="humble-suite__overlay" />
        <div className="humble-suite__content reveal">
          <p className="eyebrow eyebrow--light">Make yourself at home</p>
          <h2>The Humble<br /><em>Suite.</em></h2>
          <p>Come, smoke, eat &amp; relax.</p>
        </div>
        <span className="humble-suite__note">GOOD COMPANY, ALWAYS</span>
      </div>
    </section>
  );
}

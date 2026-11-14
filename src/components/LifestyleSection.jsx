import SectionHeading from "./SectionHeading.jsx";

const moments = [
  {
    title: "The little details",
    label: "Everyday essentials",
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=900&q=85",
    alt: "A thoughtfully styled arrangement of everyday objects",
    className: "moment-card--tall",
  },
  {
    title: "Made to keep",
    label: "A considered collection",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=900&q=85",
    alt: "Sculptural glass objects against a warm, dark backdrop",
    className: "",
  },
  {
    title: "Find your ritual",
    label: "The good stuff",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=900&q=85",
    alt: "Natural textures and details in soft evening light",
    className: "",
  },
  {
    title: "Stay a while",
    label: "The Humble atmosphere",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=85",
    alt: "An inviting, softly lit place to spend time with friends",
    className: "moment-card--wide",
  },
];

export default function LifestyleSection() {
  return (
    <section className="lifestyle-section section-pad">
      <div className="section-shell">
        <div className="lifestyle-heading reveal">
          <SectionHeading eyebrow="A look around" title={<>The good stuff<br /><em>is in the details.</em></>} />
          <a className="text-link" href="#visit">See what&apos;s in store <span aria-hidden="true">↗</span></a>
        </div>
        <div className="moments-grid">
          {moments.map((moment, index) => (
            <article className={`moment-card ${moment.className} reveal`} key={moment.title}>
              <img src={moment.image} alt={moment.alt} loading="lazy" />
              <div className="moment-shade" />
              <span className="moment-index">0{index + 1} / 04</span>
              <div className="moment-copy">
                <p>{moment.label}</p>
                <h3>{moment.title}</h3>
              </div>
              <span className="moment-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

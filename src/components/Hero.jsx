import heroVideo from "../assets/videos/smoke-hero.mp4";

const phone = "tel:+27611595565";
const whatsapp =
  "https://wa.me/27610000000?text=Hi%20The%20Humble%20Smoker%2C%20I%20would%20like%20to%20ask%20about%20your%20products.";
const directions =
  "https://www.google.com/maps/search/?api=1&query=28+Faan+Ferreira+Spitskop+Langenhoven+Park+Bloemfontein";

export default function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-backdrop" aria-hidden="true">
        <video className="hero-video" autoPlay muted loop playsInline aria-hidden="true">
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>
      <div className="hero-grain" aria-hidden="true" />
      <div className="hero-content">
        <p className="eyebrow eyebrow--light"><span className="eyebrow-line" /> PREMIUM HEAD SHOP</p>
        <h1 id="hero-title">Bloemfontein&apos;s<br />First and Finest<br /><em>Headshop.</em></h1>
        <p className="hero-copy">
          A carefully curated smoke and lifestyle store for people who appreciate quality, good advice
          and a more considered way to shop.
        </p>
        <div className="hero-actions">
          <a className="button button--accent" href="#visit">Visit the Store <span aria-hidden="true">↗</span></a>
          <a className="button button--text" href="#shop">Explore the Shop <span aria-hidden="true">↓</span></a>
        </div>
        <div className="hero-contact">
          <a href={phone} aria-label="Call The Humble Smoker at +27 61 159 5565">+27 61 159 5565</a>
          <span aria-hidden="true" />
          <a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp <span aria-hidden="true">↗</span></a>
          <span aria-hidden="true" />
          <a href={directions} target="_blank" rel="noreferrer">Langenhoven Park, Bloemfontein <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}

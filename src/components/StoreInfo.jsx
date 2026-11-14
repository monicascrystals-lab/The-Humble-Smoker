import SectionHeading from "./SectionHeading.jsx";

const address = "28 Faan Ferreira Spitskop Langenhoven Park, Bloemfontein, Free State, South Africa";
const phone = "tel:+27611595565";
const whatsapp = "https://wa.me/27610000000?text=Hi%20The%20Humble%20Smoker%2C%20I%20would%20like%20to%20ask%20about%20your%20products.";
const directions = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
const hours = [
  ["Monday – Friday", "09:00 – 22:00"],
  ["Saturday", "09:00 – 23:00"],
  ["Sunday", "11:00 – 19:00"],
];

export default function StoreInfo() {
  return (
    <section className="visit-section section-pad" id="visit">
      <div className="section-shell visit-layout">
        <div className="visit-main reveal">
          <SectionHeading eyebrow="Your local, after hours" title={<>Come<br /><em>through.</em></>} />
          <p className="visit-address">The Humble Smoker<br />Bloemfontein, Free State<br />South Africa</p>
          <a className="button button--accent" href={directions} target="_blank" rel="noreferrer">
            Get directions <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="visit-details">
          <div className="hours-panel reveal">
            <div className="detail-heading"><h3>Come by when you like.</h3><span className="open-indicator"><i /> OPEN LATE</span></div>
            <dl className="hours-list">
              {hours.map(([day, time]) => <div key={day}><dt>{day}</dt><dd>{time}</dd></div>)}
            </dl>
            <p className="hours-footnote">Hours may vary on public holidays. Give us a call before making a special trip.</p>
          </div>
          <div className="contact-panel reveal">
            <h3>Say hello.</h3>
            <a href={phone}>Phone <span>+27 61 159 5565</span><i aria-hidden="true">↗</i></a>
            <a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp <span>Send us a message</span><i aria-hidden="true">↗</i></a>
            <a href="mailto:thehumblesmoker@gmail.com">Email <span>thehumblesmoker@gmail.com</span><i aria-hidden="true">↗</i></a>
            <a href={directions} target="_blank" rel="noreferrer">Directions <span>Langenhoven Park, Bloemfontein</span><i aria-hidden="true">↗</i></a>
          </div>
        </div>
      </div>
    </section>
  );
}

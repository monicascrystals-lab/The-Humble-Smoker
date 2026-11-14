const phone = "tel:+27611595565";
const address =
  "https://www.google.com/maps/search/?api=1&query=28+Faan+Ferreira+Spitskop+Langenhoven+Park+Bloemfontein";

function SocialLink({ href, label, children }) {
  return <a href={href} target="_blank" rel="noreferrer" aria-label={label}>{children}</a>;
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="brand" href="#home" aria-label="The Humble Smoker home">
              <span className="brand-mark" aria-hidden="true">H<span>.</span></span>
              <span className="brand-name">THE HUMBLE<br />SMOKER</span>
            </a>
            <p>Bloemfontein&apos;s First and<br />Finest Headshop.</p>
            <div className="social-links">
              <SocialLink href="https://www.instagram.com/thehumblesmoker.demo/" label="The Humble Smoker on Instagram">
                <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="18" cy="6" r="1" className="social-fill" /></svg>
              </SocialLink>
              <SocialLink href="https://www.facebook.com/thehumblesmoker.demo/" label="The Humble Smoker on Facebook">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 21v-8h3l.5-4H14V7c0-1.2.4-2 2-2h1.7V1.4c-.8-.1-1.8-.2-3-.2-3 0-5 1.8-5 5.2V9H7v4h2.7v8H14Z" /></svg>
              </SocialLink>
            </div>
          </div>
          <div className="footer-column"><h3>Find your way</h3><a href="#about">Our story</a><a href="#shop">The shop</a><a href="#visit">Visit us</a><a href="#contact">Get in touch</a></div>
          <div className="footer-column"><h3>Come by</h3><a href={address} target="_blank" rel="noreferrer">28 Faan Ferreira Spitskop<br />Langenhoven Park<br />Bloemfontein, South Africa ↗</a><a href={phone}>+27 61 159 5565</a><a href="mailto:thehumblesmoker@gmail.com">thehumblesmoker@gmail.com</a></div>
          <div className="footer-column footer-hours"><h3>Good to know</h3><p>Mon – Fri <span>09:00 – 22:00</span></p><p>Saturday <span>09:00 – 23:00</span></p><p>Sunday <span>11:00 – 19:00</span></p><p className="footer-legal"><a href="#privacy">Privacy</a><a href="#terms">Terms</a></p></div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} The Humble Smoker</p>
          <p>Concept website created for portfolio demonstration purposes.</p>
          <a href="#home">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}

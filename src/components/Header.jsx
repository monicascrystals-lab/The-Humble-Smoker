import { useEffect, useState } from "react";
import logo from "../assets/images/humble-smoke-logo.svg";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Shop", href: "#shop" },
  { label: "Visit Us", href: "#visit" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header${scrolled ? " site-header--scrolled" : ""}`}>
      <div className="header-inner">
        <a className="brand header-brand" href="#home" aria-label="The Humble Smoker home" onClick={closeMenu}>
          <img className="header-brand__logo" src={logo} alt="The Humble Smoker" />
        </a>
        <button
          className={`menu-toggle${menuOpen ? " menu-toggle--open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <nav
          className={`primary-nav${menuOpen ? " primary-nav--open" : ""}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a className="button button--small button--outline nav-cta" href="#visit" onClick={closeMenu}>
            Visit the Store <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

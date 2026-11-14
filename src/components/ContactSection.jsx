import { useState } from "react";
import SectionHeading from "./SectionHeading.jsx";

const initialForm = { name: "", email: "", phone: "", lookingFor: "", message: "" };

export default function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const updateField = (event) => {
    setSubmitted(false);
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <section className="contact-section section-pad" id="contact">
      <div className="section-shell contact-layout">
        <div className="contact-intro reveal">
          <SectionHeading eyebrow="Drop us a line" title={<>Looking for<br />something <em>specific?</em></>} />
          <p>Tell us what you have in mind and we&apos;ll point you in the right direction. Or better yet, pop in.</p>
          <a href="mailto:thehumblesmoker@gmail.com" className="contact-email">thehumblesmoker@gmail.com <span aria-hidden="true">↗</span></a>
        </div>
        <div className="contact-form-wrap reveal">
          {submitted ? (
            <div className="form-success" role="status" aria-live="polite">
              <span className="success-mark" aria-hidden="true">✓</span>
              <h3>Thanks for stopping by.</h3>
              <p>This is a portfolio demo, so your message hasn&apos;t been sent. Call or email the store to get in touch.</p>
              <button className="text-link" type="button" onClick={() => setSubmitted(false)}>Send another enquiry <span aria-hidden="true">↗</span></button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <label>Name<input name="name" autoComplete="name" value={form.name} onChange={updateField} required /></label>
                <label>Email<input name="email" type="email" autoComplete="email" value={form.email} onChange={updateField} required /></label>
              </div>
              <div className="form-row">
                <label>Phone <span>(optional)</span><input name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={updateField} /></label>
                <label>What are you looking for?
                  <select name="lookingFor" value={form.lookingFor} onChange={updateField} required>
                    <option value="" disabled>Choose a category</option>
                    <option>Rolling accessories</option>
                    <option>Glassware</option>
                    <option>Storage</option>
                    <option>Cleaning &amp; care</option>
                    <option>Lifestyle accessories</option>
                    <option>Something else</option>
                  </select>
                </label>
              </div>
              <label>Message<textarea name="message" rows="3" value={form.message} onChange={updateField} required /></label>
              <div className="form-submit-row">
                <button className="button button--accent" type="submit">Send enquiry <span aria-hidden="true">↗</span></button>
                <p>Demo form — no message is sent or stored.</p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

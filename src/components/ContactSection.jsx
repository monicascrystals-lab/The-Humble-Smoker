import { useState } from "react";
import SectionHeading from "./SectionHeading.jsx";

const initialForm = { name: "", email: "", phone: "", lookingFor: "", message: "" };

export default function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const [submissionStatus, setSubmissionStatus] = useState("idle");

  const updateField = (event) => {
    if (submissionStatus === "error") setSubmissionStatus("idle");
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new URLSearchParams(new FormData(event.currentTarget)).toString();
    setSubmissionStatus("submitting");

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData,
      });

      if (!response.ok) throw new Error(`Netlify form submission failed with status ${response.status}`);

      setSubmissionStatus("success");
      setForm(initialForm);
    } catch (error) {
      console.error("Contact form submission failed", error);
      setSubmissionStatus("error");
    }
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
          {submissionStatus === "success" ? (
            <div className="form-success" role="status" aria-live="polite">
              <span className="success-mark" aria-hidden="true">✓</span>
              <h3>Thanks — your enquiry has been sent.</h3>
              <button className="text-link" type="button" onClick={() => setSubmissionStatus("idle")}>Send another enquiry <span aria-hidden="true">↗</span></button>
            </div>
          ) : (
            <form name="contact" method="POST" action="/" data-netlify="true" onSubmit={handleSubmit}>
              <input type="hidden" name="form-name" value="contact" />
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
                <button className="button button--accent" type="submit" disabled={submissionStatus === "submitting"} aria-busy={submissionStatus === "submitting"}>
                  {submissionStatus === "submitting" ? "Sending..." : "Send enquiry"} <span aria-hidden="true">↗</span>
                </button>
                {submissionStatus === "error" && (
                  <p className="form-error" role="alert">
                    Your enquiry wasn&apos;t sent. Please try again or call +27 61 159 5565.
                  </p>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

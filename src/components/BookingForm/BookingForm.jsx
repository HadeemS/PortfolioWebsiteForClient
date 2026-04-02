import { useState } from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import './BookingForm.css'

const initial = {
  name: '',
  email: '',
  phone: '',
  idea: '',
  placement: '',
  date: '',
  budget: '',
  notes: '',
}

export default function BookingForm() {
  const [form, setForm] = useState(initial)
  const [submitted, setSubmitted] = useState(false)

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    console.info('Booking inquiry (front-end only):', form)
  }

  return (
    <section id="booking" className="booking section-padding">
      <div className="container booking__layout">
        <SectionHeading
          eyebrow="Availability"
          title="Book / inquire"
          subtitle="Tell me what you want, where it lives on the body, and your ideal timing — I’ll follow up with next steps."
        />
        <div className="booking__panel">
          {submitted ? (
            <p className="booking__thanks" role="status">
              Thank you — your inquiry is ready to send. Connect this form to email or a backend when you&apos;re ready to
              go live.
            </p>
          ) : (
          <form className="booking__form" onSubmit={onSubmit} noValidate>
            <div className="booking__row booking__row--2">
              <label className="booking__field">
                <span className="booking__label">Name</span>
                <input
                  className="booking__input"
                  name="name"
                  autoComplete="name"
                  value={form.name}
                  onChange={onChange}
                  required
                />
              </label>
              <label className="booking__field">
                <span className="booking__label">Email</span>
                <input
                  className="booking__input"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={onChange}
                  required
                />
              </label>
            </div>
            <div className="booking__row booking__row--2">
              <label className="booking__field">
                <span className="booking__label">Phone</span>
                <input
                  className="booking__input"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={onChange}
                />
              </label>
              <label className="booking__field">
                <span className="booking__label">Preferred date</span>
                <input className="booking__input" name="date" type="date" value={form.date} onChange={onChange} />
              </label>
            </div>
            <label className="booking__field">
              <span className="booking__label">Tattoo idea</span>
              <textarea
                className="booking__input booking__textarea"
                name="idea"
                rows={4}
                value={form.idea}
                onChange={onChange}
                required
              />
            </label>
            <div className="booking__row booking__row--2">
              <label className="booking__field">
                <span className="booking__label">Placement</span>
                <input className="booking__input" name="placement" value={form.placement} onChange={onChange} />
              </label>
              <label className="booking__field">
                <span className="booking__label">Budget</span>
                <input className="booking__input" name="budget" value={form.budget} onChange={onChange} />
              </label>
            </div>
            <label className="booking__field">
              <span className="booking__label">Additional notes</span>
              <textarea
                className="booking__input booking__textarea"
                name="notes"
                rows={3}
                value={form.notes}
                onChange={onChange}
              />
            </label>
            <label className="booking__field">
              <span className="booking__label">Reference upload (placeholder)</span>
              <input className="booking__file" name="reference" type="file" accept="image/*" disabled />
              <span className="booking__hint">Hook this input to storage or email in production.</span>
            </label>
            <p className="booking__expect">
              After you submit, expect a reply with availability, pricing context, and how to prepare for your session.
            </p>
            <p className="booking__serious">Serious inquiries only. Include as much detail as possible for the best response.</p>
            <button type="submit" className="booking__submit">
              Send inquiry
            </button>
          </form>
          )}
        </div>
      </div>
    </section>
  )
}

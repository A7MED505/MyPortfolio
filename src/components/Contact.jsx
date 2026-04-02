import { useState } from 'react'

const contactMethods = [
  { icon: '📧', label: 'Email', value: 'ahmed.mathil82@gmail.com' },
  { icon: '💼', label: 'LinkedIn', value: 'https://www.linkedin.com/in/ahmed-al-mathil-80a085275/' },
  { icon: '🐙', label: 'GitHub', value: 'https://github.com/A7MED505' },
  { icon: '📍', label: 'Location', value: 'Saudi Arabia' },
]

export default function Contact({ showToast }) {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    showToast('✅ Message sent! I\'ll get back to you soon.')
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Get In <span>Touch</span></h2>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Let's work together!</h3>
            <p>
              Have a project in mind or just want to say hi? My inbox is always open.
              I'll get back to you as soon as possible.
            </p>

            <div className="contact-methods">
              {contactMethods.map(method => (
                <div key={method.label} className="contact-method">
                  <div className="contact-method-icon">{method.icon}</div>
                  <div className="contact-method-text">
                    <p className="label">{method.label}</p>
                    <p className="value">{method.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="What's this about?"
                value={form.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary form-submit">
              🚀 Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

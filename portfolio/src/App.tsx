import { useState, FormEvent, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import './App.css'
import profileImage from './assets/profile.jpg'

function App() {
  const [message, setMessage] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [sendStatus, setSendStatus] = useState<'success' | 'error' | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    )

    // Observe all sections and cards
    document.querySelectorAll('section, .contact-link, .blog-card, .current-card, .anonymous-message-section').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return

    setIsSending(true)
    setSendStatus(null)

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          to_email: 'robinraj6939@gmail.com',
          message: message,
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      )
      setSendStatus('success')
      setMessage('')
    } catch (error) {
      setSendStatus('error')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <div className="app">
      <section className="hero-section">
        <div className="header">
          <div className="profile-container">
            <img 
              src={profileImage}
              alt="Robin Raj" 
              className="profile-pic" 
            />
            <div className="header-text">
              <h1>Robin Raj</h1>
              <div className="role">Software Engineer</div>
              <div className="location">Based in India</div>
            </div>
          </div>
        </div>
      </section>

      <div className="main-content">
        {/* Contact Section */}
        <section className="contact-section">
          <h2>Contact me</h2>
          <div className="contact-links">
            <a href="mailto:robinraj6939@gmail.com" className="contact-link">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/robin-raj-6939/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
              </svg>
              LinkedIn
            </a>
            <a href="https://twitter.com/robinraj6939" target="_blank" rel="noopener noreferrer" className="contact-link">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.115 5.19l.002 2.047a7.537 7.537 0 01-5.9 2.045l-.002-1.947a5.54 5.54 0 003.9-1.145z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M.115 5.19A5.54 5.54 0 014 4.05a7.516 7.516 0 013.9 1.15l.002 2.047a7.537 7.537 0 01-5.9 2.045l-.002-1.947z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M.115 5.19A5.54 5.54 0 014 4.05a7.516 7.516 0 013.9 1.15l.002 2.047a7.537 7.537 0 01-5.9 2.045l-.002-1.947z" />
              </svg>
              Twitter
            </a>
            <a href="https://instagram.com/robinraj6939" target="_blank" rel="noopener noreferrer" className="contact-link">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c.317 0 .63.037.926.108.302.072.591.187.856.33.265.144.505.315.715.514.21.199.388.423.533.67.145.247.256.514.332.797.076.283.116.576.116.87 0 .294-.04.587-.116.87-.076.283-.187.55-.332.797-.145.247-.323.471-.533.67-.21.199-.45.37-.715.514-.265.144-.554.258-.856.33-.296.071-.609.108-.926.108-.317 0-.63-.037-.926-.108-.302-.072-.591-.187-.856-.33-.265-.144-.505-.315-.715-.514-.21-.199-.388-.423-.533-.67-.145-.247-.256-.514-.332-.797-.076-.283-.116-.576-.116-.87 0-.294.04-.587.116-.87.076-.283.187-.55.332-.797.145-.247.323-.471.533-.67.21-.199.45-.37.715-.514.265-.144.554-.258.856-.33.296-.071.609-.108.926-.108z" />
              </svg>
              Instagram
            </a>
          </div>

          <div className="anonymous-message-section">
            <h3>Send me an anonymous message</h3>
            <form onSubmit={handleSubmit} className="message-form">
              <textarea
                className="message-input"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message here..."
                required
                disabled={isSending}
              />
              <button
                type="submit"
                className="send-button"
                disabled={isSending || !message.trim()}
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
              {sendStatus && (
                <div className={`status-message ${sendStatus}`}>
                  {sendStatus === "success"
                    ? "Message sent successfully!"
                    : "Failed to send message. Please try again."}
                </div>
              )}
            </form>
          </div>
        </section>

        {/* Current Status Section */}
        <section>
          <h2>What I am currently up to</h2>
          <div className="current-card">
            I am currently working on building a portfolio website using React and
            TypeScript. I am also learning about web development and trying to
            improve my skills in this field.
          </div>
        </section>

        {/* Blogs Section */}
        <section>
          <h2>Blogs</h2>
          <div className="blog-grid">
            <div className="blog-card">
              <h3>Getting Started with React</h3>
              <p>
                Learn the basics of React and how to create your first component.
              </p>
            </div>
            <div className="blog-card">
              <h3>TypeScript for Beginners</h3>
              <p>
                A comprehensive guide to understanding TypeScript and its benefits.
              </p>
            </div>
            <div className="blog-card">
              <h3>CSS Grid Layout</h3>
              <p>
                Master CSS Grid and create responsive layouts with ease.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App

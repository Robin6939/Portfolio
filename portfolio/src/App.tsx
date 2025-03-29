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
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=robinraj6939@gmail.com&su=&body=" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-link"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/robin-raj-aa3448206/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a href="https://x.com/raj0968G" target="_blank" rel="noopener noreferrer" className="contact-link">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Twitter
            </a>
            <a href="https://www.instagram.com/robin._.yourheart/" target="_blank" rel="noopener noreferrer" className="contact-link">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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
                placeholder="Send a hi!"
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
            <br />
            <p>
            I graduated from BITS Pilani with a degree in Computer Science about a year ago and currently work as a Software Developer at Walmart. 
            I specialize in the pharmacy domain, where our team handles prescription processing across Walmart's services. 
            Our backend is built with Java and Spring Boot, and I have a deep understanding of the entire software development lifecycle (SDLC). 
            I'm passionate about building robust and scalable systems.
            </p>
            <br />
            <p>
            Beyond my work at Walmart, I'm collaborating with Adam Retter, the founder of Evolved Binary, on developing a query parser for ElementalDB, their flagship database product.
            I have a strong interest in databases, memory management, and computer networking, and I'm constantly diving deeper into these areas. 
            I love exploring how systems work at a low level and optimizing them for performance and scalability.
            When I get time, I also contribute to open-source database projects, further expanding my expertise in this space.
            </p>
            <br />
            <p>
            During my second and third years of college, I taught Computer Science and Data Structures & Algorithms (DSA) across various startups, which was my primary source of income at the time. 
            In my fourth year, I attempted to co-found an AI startup with a friend, but it didn't take off as we had hoped—an experience that taught me a lot about startups and product development.
            I'm also a competitive programmer and occasionally participate in contests. I currently hold the Expert rating on Codeforces and enjoy solving complex algorithmic problems.
            </p>
          </div>
        </section>

        {/* Blogs Section */}
        <section>
          <h2>Blogs</h2>
          <div className="blog-grid">
            <div className="blog-card">
              <h3>Getting along as a 23 year old in Bangalore</h3>
              <p>
                I will write about my experiences and learnings here. Coming soon.
              </p>
            </div>
            <div className="blog-card">
              <h3>Getting along as a self taught programmer</h3>
              <p>
                I will write about computer science core stuff here. Coming soon.
              </p>
            </div>
            <div className="blog-card">
              <h3>Getting along as a 23 year old in Bangalore</h3>
              <p>
                I will write about my interests in finance and psychology here. Coming soon.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App

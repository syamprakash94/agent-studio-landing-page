'use client'

import { useState } from 'react'
import AICharacter from './AICharacter'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('idle')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // In a real application, you would send the data to your backend
    console.log('Form submitted:', formData)
    
    setSubmitStatus('success')
    setIsSubmitting(false)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 px-4 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* AI Doodle Background Pattern */}
      <div className="absolute inset-0 opacity-15">
        <svg
          className="w-full h-full"
          viewBox="0 0 1400 1000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Doodle AI Robots */}
          <g className="animate-light-move" style={{ animationDelay: '0s' }}>
            {/* Robot 1 */}
            <rect x="100" y="150" width="60" height="75" rx="8" fill="none" stroke="#E55A2B" strokeWidth="2.5" opacity="0.6" />
            <circle cx="115" cy="175" r="5" fill="#E55A2B" className="animate-light-pulse" />
            <circle cx="145" cy="175" r="5" fill="#E55A2B" className="animate-light-pulse" style={{ animationDelay: '0.5s' }} />
            <rect x="110" y="200" width="40" height="15" rx="3" fill="none" stroke="#E55A2B" strokeWidth="2" />
            <line x1="100" y1="150" x2="100" y2="130" stroke="#E55A2B" strokeWidth="2.5" />
            <circle cx="100" cy="120" r="4" fill="#E55A2B" className="animate-light-pulse" />
          </g>

          <g className="animate-light-move" style={{ animationDelay: '2s' }}>
            {/* Robot 2 */}
            <rect x="300" y="200" width="50" height="65" rx="8" fill="none" stroke="#CC4A1F" strokeWidth="2" opacity="0.6" />
            <circle cx="315" cy="220" r="4" fill="#CC4A1F" className="animate-light-pulse" />
            <circle cx="335" cy="220" r="4" fill="#CC4A1F" className="animate-light-pulse" style={{ animationDelay: '0.5s' }} />
            <path d="M 310 240 Q 325 250 340 240" stroke="#CC4A1F" strokeWidth="2" fill="none" />
            <rect x="305" y="250" width="30" height="12" rx="2" fill="none" stroke="#CC4A1F" strokeWidth="2" />
          </g>

          {/* Neural Network Doodles */}
          <g className="animate-glow-rotate" style={{ transformOrigin: '500px 300px' }}>
            <circle cx="500" cy="300" r="8" fill="#E55A2B" opacity="0.5" className="animate-light-pulse" />
            <circle cx="450" cy="250" r="6" fill="#CC4A1F" opacity="0.5" className="animate-light-pulse" style={{ animationDelay: '0.3s' }} />
            <circle cx="550" cy="250" r="6" fill="#E55A2B" opacity="0.5" className="animate-light-pulse" style={{ animationDelay: '0.6s' }} />
            <circle cx="450" cy="350" r="6" fill="#CC4A1F" opacity="0.5" className="animate-light-pulse" style={{ animationDelay: '0.9s' }} />
            <circle cx="550" cy="350" r="6" fill="#E55A2B" opacity="0.5" className="animate-light-pulse" style={{ animationDelay: '1.2s' }} />
            
            <line x1="500" y1="300" x2="450" y2="250" stroke="#E55A2B" strokeWidth="1.5" opacity="0.4" />
            <line x1="500" y1="300" x2="550" y2="250" stroke="#E55A2B" strokeWidth="1.5" opacity="0.4" />
            <line x1="500" y1="300" x2="450" y2="350" stroke="#E55A2B" strokeWidth="1.5" opacity="0.4" />
            <line x1="500" y1="300" x2="550" y2="350" stroke="#E55A2B" strokeWidth="1.5" opacity="0.4" />
          </g>

          {/* Circuit Doodles */}
          <g className="animate-light-move" style={{ animationDelay: '1s' }}>
            <rect x="700" y="180" width="80" height="3" rx="1.5" fill="#E55A2B" opacity="0.5" />
            <rect x="700" y="200" width="3" height="40" rx="1.5" fill="#E55A2B" opacity="0.5" />
            <rect x="777" y="200" width="3" height="40" rx="1.5" fill="#E55A2B" opacity="0.5" />
            <rect x="700" y="237" width="80" height="3" rx="1.5" fill="#E55A2B" opacity="0.5" />
            <circle cx="740" cy="200" r="4" fill="#E55A2B" className="animate-light-pulse" />
            <circle cx="740" cy="240" r="4" fill="#CC4A1F" className="animate-light-pulse" style={{ animationDelay: '0.5s' }} />
          </g>

          {/* AI Brain Doodle */}
          <g className="animate-light-move" style={{ animationDelay: '3s' }}>
            <path d="M 950 250 Q 920 230 900 250 Q 920 270 950 250" stroke="#E55A2B" strokeWidth="2.5" fill="none" opacity="0.6" />
            <path d="M 950 250 Q 980 230 1000 250 Q 980 270 950 250" stroke="#CC4A1F" strokeWidth="2.5" fill="none" opacity="0.6" />
            <circle cx="950" cy="250" r="3" fill="#E55A2B" className="animate-light-pulse" />
            <circle cx="920" cy="240" r="2" fill="#CC4A1F" className="animate-light-pulse" style={{ animationDelay: '0.3s' }} />
            <circle cx="980" cy="240" r="2" fill="#E55A2B" className="animate-light-pulse" style={{ animationDelay: '0.6s' }} />
          </g>

          {/* Floating AI Elements */}
          <g className="animate-float" style={{ animationDelay: '0s' }}>
            <circle cx="200" cy="400" r="12" fill="none" stroke="#E55A2B" strokeWidth="2" opacity="0.5" />
            <circle cx="200" cy="400" r="6" fill="#E55A2B" className="animate-light-pulse" />
            <line x1="200" y1="400" x2="200" y2="420" stroke="#E55A2B" strokeWidth="2" opacity="0.5" />
            <line x1="200" y1="400" x2="220" y2="410" stroke="#E55A2B" strokeWidth="2" opacity="0.5" />
            <line x1="200" y1="400" x2="180" y2="410" stroke="#E55A2B" strokeWidth="2" opacity="0.5" />
          </g>

          <g className="animate-float" style={{ animationDelay: '2s' }}>
            <rect x="1100" y="350" width="40" height="40" rx="5" fill="none" stroke="#CC4A1F" strokeWidth="2" opacity="0.5" />
            <circle cx="1115" cy="365" r="3" fill="#CC4A1F" className="animate-light-pulse" />
            <circle cx="1125" cy="365" r="3" fill="#CC4A1F" className="animate-light-pulse" style={{ animationDelay: '0.5s' }} />
            <rect x="1110" y="375" width="30" height="8" rx="2" fill="none" stroke="#CC4A1F" strokeWidth="1.5" />
          </g>

          {/* Connection Lines */}
          <g className="animate-glow-rotate" style={{ transformOrigin: '800px 500px' }}>
            <path d="M 750 450 Q 800 500 850 450" stroke="#E55A2B" strokeWidth="2" fill="none" opacity="0.3" strokeDasharray="5,5" />
            <path d="M 850 450 Q 900 500 950 450" stroke="#CC4A1F" strokeWidth="2" fill="none" opacity="0.3" strokeDasharray="5,5" />
            <circle cx="800" cy="500" r="5" fill="#E55A2B" className="animate-light-pulse" />
          </g>

          {/* More Doodle Robots */}
          <g className="animate-light-move" style={{ animationDelay: '4s' }}>
            <rect x="1200" y="500" width="55" height="70" rx="7" fill="none" stroke="#E55A2B" strokeWidth="2.5" opacity="0.6" />
            <circle cx="1215" cy="525" r="5" fill="#E55A2B" className="animate-light-pulse" />
            <circle cx="1235" cy="525" r="5" fill="#E55A2B" className="animate-light-pulse" style={{ animationDelay: '0.5s' }} />
            <rect x="1210" y="545" width="35" height="18" rx="3" fill="none" stroke="#E55A2B" strokeWidth="2" />
            <line x1="1220" y1="500" x2="1220" y2="480" stroke="#E55A2B" strokeWidth="2.5" />
            <circle cx="1220" cy="470" r="5" fill="#E55A2B" className="animate-light-pulse" />
          </g>

          {/* Data Flow Doodles */}
          <g className="animate-light-move" style={{ animationDelay: '1.5s' }}>
            <path d="M 150 600 L 200 600 L 200 650 L 250 650" stroke="#CC4A1F" strokeWidth="2.5" fill="none" opacity="0.5" strokeLinecap="round" />
            <circle cx="150" cy="600" r="4" fill="#CC4A1F" className="animate-light-pulse" />
            <circle cx="250" cy="650" r="4" fill="#E55A2B" className="animate-light-pulse" style={{ animationDelay: '0.5s' }} />
            <polygon points="245,645 250,650 245,655" fill="#E55A2B" opacity="0.5" />
          </g>

          {/* AI Chip Doodle */}
          <g className="animate-light-move" style={{ animationDelay: '2.5s' }}>
            <rect x="400" y="600" width="60" height="60" rx="5" fill="none" stroke="#E55A2B" strokeWidth="2.5" opacity="0.6" />
            <rect x="410" y="610" width="40" height="40" rx="3" fill="none" stroke="#CC4A1F" strokeWidth="2" />
            <circle cx="420" cy="620" r="2" fill="#E55A2B" className="animate-light-pulse" />
            <circle cx="440" cy="620" r="2" fill="#E55A2B" className="animate-light-pulse" style={{ animationDelay: '0.3s' }} />
            <circle cx="420" cy="640" r="2" fill="#CC4A1F" className="animate-light-pulse" style={{ animationDelay: '0.6s' }} />
            <circle cx="440" cy="640" r="2" fill="#CC4A1F" className="animate-light-pulse" style={{ animationDelay: '0.9s' }} />
          </g>

          {/* Floating Light Orbs */}
          <circle cx="600" cy="700" r="20" fill="#E55A2B" opacity="0.3" className="animate-light-pulse" style={{ animationDelay: '0s' }} />
          <circle cx="900" cy="750" r="25" fill="#CC4A1F" opacity="0.25" className="animate-light-pulse" style={{ animationDelay: '1s' }} />
          <circle cx="1100" cy="800" r="18" fill="#E55A2B" opacity="0.3" className="animate-light-pulse" style={{ animationDelay: '2s' }} />
        </svg>
      </div>

      {/* Additional Animated Light Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl animate-light-pulse" style={{ backgroundColor: '#E55A2B', opacity: 0.15, animationDelay: '0s' }}></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl animate-light-pulse" style={{ backgroundColor: '#CC4A1F', opacity: 0.12, animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full blur-3xl animate-light-pulse" style={{ backgroundColor: '#E55A2B', opacity: 0.1, animationDelay: '4s' }}></div>
      </div>

      {/* Background AI Characters */}
      <div className="absolute top-20 left-5 w-32 h-32 opacity-20 hidden md:block animate-float z-0">
        <AICharacter variant="assistant" className="w-full h-full" animated={true} />
      </div>
      <div className="absolute bottom-20 right-5 w-28 h-28 opacity-15 hidden lg:block animate-float z-0" style={{ animationDelay: '2s' }}>
        <AICharacter variant="default" className="w-full h-full" animated={true} />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-gradient-to-r from-primary/20 to-primary-light/20 backdrop-blur-sm rounded-full border border-primary/30 shadow-lg">
            <AICharacter variant="helper" className="w-7 h-7" animated={true} />
            <span className="text-primary font-bold text-sm md:text-base">📧 Contact Us</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards - Left Side */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl border-2 border-gray-100 hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-primary/20 to-primary-light/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-xl">Email Us</h3>
              <p className="text-gray-600 font-medium mb-4">Drop us a line anytime</p>
              <a href="mailto:hello@agentstudio.com" className="text-primary font-semibold hover:text-primary-dark transition-colors">
                hello@agentstudio.com
              </a>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl border-2 border-gray-100 hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-primary/20 to-primary-light/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-xl">Call Us</h3>
              <p className="text-gray-600 font-medium mb-4">Mon to Fri from 8am to 6pm</p>
              <a href="tel:+15551234567" className="text-primary font-semibold hover:text-primary-dark transition-colors">
                +1 (555) 123-4567
              </a>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl border-2 border-gray-100 hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-primary/20 to-primary-light/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-xl">Visit Us</h3>
              <p className="text-gray-600 font-medium mb-4">Come say hello at our office</p>
              <p className="text-primary font-semibold">123 Tech Street, San Francisco, CA</p>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-gray-100 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary-light/5 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <span className="w-12 h-1 bg-gradient-to-r from-primary to-primary-light rounded-full"></span>
                  Send us a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2"
                    >
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      Your Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-5 py-4 pl-12 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition-all hover:border-primary/50 bg-gray-50/50"
                        placeholder="John Doe"
                        aria-label="Your name"
                        tabIndex={0}
                      />
                      <div className="absolute left-4 top-1/2 -translate-y-1/2">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2"
                    >
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-5 py-4 pl-12 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition-all hover:border-primary/50 bg-gray-50/50"
                        placeholder="john@example.com"
                        aria-label="Your email address"
                        tabIndex={0}
                      />
                      <div className="absolute left-4 top-1/2 -translate-y-1/2">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2"
                    >
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      Your Message
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-5 py-4 pl-12 pt-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none hover:border-primary/50 bg-gray-50/50"
                        placeholder="Tell us about your project or ask any questions..."
                        aria-label="Your message"
                        tabIndex={0}
                      />
                      <div className="absolute left-4 top-6">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {submitStatus === 'success' && (
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 text-green-800 px-6 py-4 rounded-xl flex items-center gap-3 shadow-lg">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-semibold">Thank you! Your message has been sent successfully.</span>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-gradient-to-r from-red-50 to-rose-50 border-2 border-red-200 text-red-800 px-6 py-4 rounded-xl flex items-center gap-3 shadow-lg">
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-semibold">Something went wrong. Please try again.</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-5 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] relative overflow-hidden group ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-primary via-primary-light to-primary-dark text-white hover:shadow-2xl hover:shadow-primary/50 shadow-xl'
                    }`}
                    aria-label="Submit contact form"
                    tabIndex={0}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </>
                      )}
                    </span>
                    {!isSubmitting && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection


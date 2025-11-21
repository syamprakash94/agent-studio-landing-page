import PlansSection from '@/components/PlansSection'
import ContactSection from '@/components/ContactSection'
import AICharacter from '@/components/AICharacter'

const Home = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 px-4 overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-white"></div>
        
        {/* Pixelated/Slate Texture Overlay */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, rgba(0,0,0,0.1) 0px, transparent 1px, transparent 2px, rgba(0,0,0,0.1) 3px),
            repeating-linear-gradient(90deg, rgba(0,0,0,0.1) 0px, transparent 1px, transparent 2px, rgba(0,0,0,0.1) 3px),
            repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0px, transparent 1px, transparent 2px, rgba(255,255,255,0.05) 3px),
            repeating-linear-gradient(-45deg, rgba(0,0,0,0.05) 0px, transparent 1px, transparent 2px, rgba(0,0,0,0.05) 3px)
          `,
          backgroundSize: '4px 4px, 4px 4px, 8px 8px, 8px 8px',
          imageRendering: 'pixelated'
        }}></div>
        
        {/* Additional Slate Pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `
            radial-gradient(circle at 2px 2px, rgba(0,0,0,0.15) 1px, transparent 0)
          `,
          backgroundSize: '8px 8px',
          imageRendering: 'crisp-edges'
        }}></div>
        
        {/* Multiple Animated Decorative Circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse-glow"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 animate-float"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
        
        {/* AI Characters - Floating */}
        <div className="absolute top-20 left-10 w-32 h-32 opacity-80 animate-float hidden md:block" style={{ animationDelay: '0s' }}>
          <AICharacter variant="default" className="w-full h-full" animated={true} />
        </div>
        <div className="absolute top-40 right-20 w-28 h-28 opacity-70 animate-float hidden lg:block" style={{ animationDelay: '2s' }}>
          <AICharacter variant="assistant" className="w-full h-full" animated={true} />
        </div>
        <div className="absolute bottom-40 left-20 w-24 h-24 opacity-60 animate-float hidden xl:block" style={{ animationDelay: '4s' }}>
          <AICharacter variant="helper" className="w-full h-full" animated={true} />
        </div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto z-10">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-block mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
              <span className="text-white text-sm font-semibold">✨ AI-Powered Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 drop-shadow-2xl leading-tight">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-white to-orange-100 bg-clip-text text-transparent">
                Agent Studio
              </span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-white/95 mb-12 max-w-3xl mx-auto drop-shadow-lg font-medium">
              Transform your business with AI-powered agents. Build, deploy, and
              scale intelligent automation solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#plans"
                className="group px-8 py-4 bg-white text-primary rounded-xl font-bold text-lg hover:bg-gray-50 shadow-2xl transition-all duration-300 inline-flex items-center gap-2 transform hover:scale-110 hover:shadow-primary/50"
                aria-label="View our plans"
                tabIndex={0}
              >
                View Plans
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-xl font-bold text-lg hover:bg-white/20 backdrop-blur-sm transition-all duration-300 inline-flex items-center gap-2 transform hover:scale-110"
                aria-label="Contact us"
                tabIndex={0}
              >
                Contact Us
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </a>
            </div>
            
            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">10K+</div>
                <div className="text-white/80 text-sm md:text-base">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">50K+</div>
                <div className="text-white/80 text-sm md:text-base">AI Agents</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">99.9%</div>
                <div className="text-white/80 text-sm md:text-base">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-white/80 text-sm md:text-base">Support</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-20 md:h-24 fill-white"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C150,100 350,0 500,50 C650,100 850,0 1000,50 C1100,75 1150,25 1200,50 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* Features Section with AI Conversation */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Agent Studio?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to accelerate your business growth
            </p>
          </div>
          
          {/* AI Conversation Section */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-gray-100 relative overflow-hidden">
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-light/5 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                {/* Conversation Flow */}
                <div className="space-y-8">
                  {/* Message 1 - AI Character 1 */}
                  <div className="flex items-start gap-4 animate-float" style={{ animationDelay: '0s' }}>
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary-light/20 rounded-2xl flex items-center justify-center p-2 shadow-lg">
                        <AICharacter variant="default" className="w-full h-full" animated={true} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="bg-gradient-to-br from-primary/10 to-primary-light/10 rounded-2xl rounded-tl-none p-6 border-2 border-primary/20 shadow-lg">
                        <p className="text-gray-800 font-medium leading-relaxed">
                          "Hey! Did you know Agent Studio can deploy AI agents in just minutes? It's lightning fast! ⚡"
                        </p>
                      </div>
                      <div className="text-sm text-gray-500 mt-2 ml-2">AI Agent #1</div>
                    </div>
                  </div>

                  {/* Message 2 - AI Character 2 */}
                  <div className="flex items-start gap-4 flex-row-reverse animate-float" style={{ animationDelay: '1s' }}>
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-light/20 to-primary/20 rounded-2xl flex items-center justify-center p-2 shadow-lg">
                        <AICharacter variant="assistant" className="w-full h-full" animated={true} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl rounded-tr-none p-6 border-2 border-gray-200 shadow-lg">
                        <p className="text-gray-800 font-medium leading-relaxed">
                          "That's amazing! And the security is enterprise-grade with 99.9% uptime. Your data is always safe! 🔒"
                        </p>
                      </div>
                      <div className="text-sm text-gray-500 mt-2 mr-2 text-right">AI Agent #2</div>
                    </div>
                  </div>

                  {/* Message 3 - AI Character 3 */}
                  <div className="flex items-start gap-4 animate-float" style={{ animationDelay: '2s' }}>
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary-light/20 rounded-2xl flex items-center justify-center p-2 shadow-lg">
                        <AICharacter variant="helper" className="w-full h-full" animated={true} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="bg-gradient-to-br from-primary/10 to-primary-light/10 rounded-2xl rounded-tl-none p-6 border-2 border-primary/20 shadow-lg">
                        <p className="text-gray-800 font-medium leading-relaxed">
                          "Plus, integration is super easy! Connect with your existing tools seamlessly. No hassle at all! 🚀"
                        </p>
                      </div>
                      <div className="text-sm text-gray-500 mt-2 ml-2">AI Agent #3</div>
                    </div>
                  </div>

                  {/* Message 4 - AI Character 2 (Response) */}
                  <div className="flex items-start gap-4 flex-row-reverse animate-float" style={{ animationDelay: '3s' }}>
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-light/20 to-primary/20 rounded-2xl flex items-center justify-center p-2 shadow-lg">
                        <AICharacter variant="assistant" className="w-full h-full" animated={true} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl rounded-tr-none p-6 border-2 border-gray-200 shadow-lg">
                        <p className="text-gray-800 font-medium leading-relaxed">
                          "Exactly! That's why businesses love us. Fast, secure, and easy to use. Perfect combination! ✨"
                        </p>
                      </div>
                      <div className="text-sm text-gray-500 mt-2 mr-2 text-right">AI Agent #2</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Cards Below Conversation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Lightning Fast',
                description: 'Deploy AI agents in minutes with our intuitive platform and powerful infrastructure.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: 'Secure & Reliable',
                description: 'Enterprise-grade security with 99.9% uptime guarantee and data encryption.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                ),
                title: 'Easy Integration',
                description: 'Seamlessly integrate with your existing tools and workflows via our robust API.'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all"></div>
                <div className="relative z-10">
                  <div className="bg-gradient-to-br from-primary/10 to-primary-light/10 w-16 h-16 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <PlansSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white py-20 px-4 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-light-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-light/5 rounded-full blur-3xl animate-light-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-primary/3 rounded-full blur-3xl animate-light-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
                  Agent Studio
                </h3>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed max-w-md">
                  Empowering businesses with AI-driven solutions. Transform your workflow with intelligent automation.
                </p>
              </div>
              
              {/* Social Media */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">Follow Us</h4>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="group w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:from-primary hover:to-primary-dark transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-primary/50 border border-gray-700 hover:border-primary"
                    aria-label="Facebook"
                    tabIndex={0}
                  >
                    <svg
                      className="w-5 h-5 group-hover:scale-110 transition-transform"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="group w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:from-primary hover:to-primary-dark transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-primary/50 border border-gray-700 hover:border-primary"
                    aria-label="Twitter"
                    tabIndex={0}
                  >
                    <svg
                      className="w-5 h-5 group-hover:scale-110 transition-transform"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="group w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:from-primary hover:to-primary-dark transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-primary/50 border border-gray-700 hover:border-primary"
                    aria-label="LinkedIn"
                    tabIndex={0}
                  >
                    <svg
                      className="w-5 h-5 group-hover:scale-110 transition-transform"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="group w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:from-primary hover:to-primary-dark transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-primary/50 border border-gray-700 hover:border-primary"
                    aria-label="GitHub"
                    tabIndex={0}
                  >
                    <svg
                      className="w-5 h-5 group-hover:scale-110 transition-transform"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Newsletter */}
              <div>
                <h4 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">Newsletter</h4>
                <p className="text-gray-300 mb-4 text-sm">Get the latest updates and news</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="font-bold text-white mb-6 text-lg flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-primary to-primary-light rounded-full"></span>
                Product
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-primary transition-all duration-200 flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-200"></span>
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-primary transition-all duration-200 flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-200"></span>
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-primary transition-all duration-200 flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-200"></span>
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-primary transition-all duration-200 flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-200"></span>
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-primary transition-all duration-200 flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-200"></span>
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-bold text-white mb-6 text-lg flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-primary to-primary-light rounded-full"></span>
                Company
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-primary transition-all duration-200 flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-200"></span>
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-primary transition-all duration-200 flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-200"></span>
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-primary transition-all duration-200 flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-200"></span>
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-primary transition-all duration-200 flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-200"></span>
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-primary transition-all duration-200 flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-200"></span>
                    Partners
                  </a>
                </li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="font-bold text-white mb-6 text-lg flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-primary to-primary-light rounded-full"></span>
                Support
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-primary transition-all duration-200 flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-200"></span>
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-primary transition-all duration-200 flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-200"></span>
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-primary transition-all duration-200 flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-200"></span>
                    Status
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-primary transition-all duration-200 flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-200"></span>
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-primary transition-all duration-200 flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-200"></span>
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Agent Studio. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default Home


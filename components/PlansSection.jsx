'use client'

import { useState } from 'react'
import AICharacter from './AICharacter'

const PlansSection = () => {
  const [selectedPlan, setSelectedPlan] = useState('monthly')

  const plans = {
    monthly: {
      name: 'Monthly',
      price: '$29',
      period: '/month',
      description: 'Perfect for individuals and small teams',
      features: [
        { text: '10 AI Agents', included: true },
        { text: '100 API Calls per month', included: true },
        { text: 'Email Support', included: true },
        { text: 'Basic Analytics', included: true },
        { text: 'Custom Integrations', included: false },
        { text: 'Priority Support', included: false },
      ],
      cta: 'Get Started',
      popular: false,
    },
    yearly: {
      name: 'Yearly',
      price: '$290',
      period: '/year',
      description: 'Best value for growing businesses',
      features: [
        { text: '50 AI Agents', included: true },
        { text: '1,200 API Calls per year', included: true },
        { text: 'Priority Email Support', included: true },
        { text: 'Advanced Analytics', included: true },
        { text: 'Custom Integrations', included: true },
        { text: 'Priority Support', included: false },
      ],
      cta: 'Get Started',
      popular: true,
    },
    enterprise: {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Tailored solutions for large organizations',
      features: [
        { text: 'Unlimited AI Agents', included: true },
        { text: 'Unlimited API Calls', included: true },
        { text: '24/7 Dedicated Support', included: true },
        { text: 'Enterprise Analytics', included: true },
        { text: 'Custom Integrations', included: true },
        { text: 'Priority Support', included: true },
        { text: 'SLA Guarantee', included: true },
        { text: 'Custom Training', included: true },
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  }

  const handlePlanClick = (planType) => {
    setSelectedPlan(planType)
  }

  const handleKeyDown = (e, planType) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handlePlanClick(planType)
    }
  }

  const currentPlan = plans[selectedPlan]

  return (
    <section id="plans" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Animated AI Bot Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Grid of AI Bots */}
          {/* Row 1 */}
          <g className="animate-light-move" style={{ animationDelay: '0s' }}>
            <rect x="50" y="50" width="80" height="100" rx="10" fill="url(#botGradient1)" opacity="0.7" />
            <circle cx="70" cy="80" r="6" fill="#E55A2B" className="animate-light-pulse" />
            <circle cx="110" cy="80" r="6" fill="#E55A2B" className="animate-light-pulse" style={{ animationDelay: '0.5s' }} />
            <rect x="60" y="120" width="60" height="20" rx="5" fill="url(#botGradient1)" />
          </g>
          
          <g className="animate-light-move" style={{ animationDelay: '2s' }}>
            <rect x="250" y="80" width="80" height="100" rx="10" fill="url(#botGradient2)" opacity="0.7" />
            <circle cx="270" cy="110" r="6" fill="#CC4A1F" className="animate-light-pulse" />
            <circle cx="310" cy="110" r="6" fill="#CC4A1F" className="animate-light-pulse" style={{ animationDelay: '0.5s' }} />
            <rect x="260" y="150" width="60" height="20" rx="5" fill="url(#botGradient2)" />
          </g>
          
          <g className="animate-light-move" style={{ animationDelay: '4s' }}>
            <rect x="450" y="60" width="80" height="100" rx="10" fill="url(#botGradient1)" opacity="0.7" />
            <circle cx="470" cy="90" r="6" fill="#E55A2B" className="animate-light-pulse" />
            <circle cx="510" cy="90" r="6" fill="#E55A2B" className="animate-light-pulse" style={{ animationDelay: '0.5s' }} />
            <rect x="460" y="130" width="60" height="20" rx="5" fill="url(#botGradient1)" />
          </g>
          
          {/* Row 2 */}
          <g className="animate-light-move" style={{ animationDelay: '1s' }}>
            <rect x="100" y="250" width="80" height="100" rx="10" fill="url(#botGradient2)" opacity="0.7" />
            <circle cx="120" cy="280" r="6" fill="#CC4A1F" className="animate-light-pulse" />
            <circle cx="160" cy="280" r="6" fill="#CC4A1F" className="animate-light-pulse" style={{ animationDelay: '0.5s' }} />
            <rect x="110" y="320" width="60" height="20" rx="5" fill="url(#botGradient2)" />
          </g>
          
          <g className="animate-light-move" style={{ animationDelay: '3s' }}>
            <rect x="350" y="280" width="80" height="100" rx="10" fill="url(#botGradient1)" opacity="0.7" />
            <circle cx="370" cy="310" r="6" fill="#E55A2B" className="animate-light-pulse" />
            <circle cx="410" cy="310" r="6" fill="#E55A2B" className="animate-light-pulse" style={{ animationDelay: '0.5s' }} />
            <rect x="360" y="350" width="60" height="20" rx="5" fill="url(#botGradient1)" />
          </g>
          
          {/* Row 3 */}
          <g className="animate-light-move" style={{ animationDelay: '1.5s' }}>
            <rect x="550" y="450" width="80" height="100" rx="10" fill="url(#botGradient2)" opacity="0.7" />
            <circle cx="570" cy="480" r="6" fill="#CC4A1F" className="animate-light-pulse" />
            <circle cx="610" cy="480" r="6" fill="#CC4A1F" className="animate-light-pulse" style={{ animationDelay: '0.5s' }} />
            <rect x="560" y="520" width="60" height="20" rx="5" fill="url(#botGradient2)" />
          </g>
          
          <g className="animate-light-move" style={{ animationDelay: '3.5s' }}>
            <rect x="750" y="420" width="80" height="100" rx="10" fill="url(#botGradient1)" opacity="0.7" />
            <circle cx="770" cy="450" r="6" fill="#E55A2B" className="animate-light-pulse" />
            <circle cx="810" cy="450" r="6" fill="#E55A2B" className="animate-light-pulse" style={{ animationDelay: '0.5s' }} />
            <rect x="760" y="490" width="60" height="20" rx="5" fill="url(#botGradient1)" />
          </g>
          
          {/* Floating Light Orbs */}
          <circle cx="200" cy="200" r="30" fill="#E55A2B" opacity="0.4" className="animate-light-pulse" style={{ animationDelay: '0s' }} />
          <circle cx="600" cy="300" r="25" fill="#CC4A1F" opacity="0.4" className="animate-light-pulse" style={{ animationDelay: '1s' }} />
          <circle cx="900" cy="500" r="35" fill="#E55A2B" opacity="0.35" className="animate-light-pulse" style={{ animationDelay: '2s' }} />
          <circle cx="400" cy="600" r="28" fill="#CC4A1F" opacity="0.4" className="animate-light-pulse" style={{ animationDelay: '1.5s' }} />
          
          {/* Glowing Lines/Connections */}
          <g className="animate-glow-rotate" style={{ transformOrigin: '600px 400px' }}>
            <line x1="100" y1="100" x2="300" y2="300" stroke="#E55A2B" strokeWidth="3" opacity="0.4" />
            <line x1="500" y1="100" x2="700" y2="400" stroke="#CC4A1F" strokeWidth="3" opacity="0.4" />
            <line x1="200" y1="400" x2="800" y2="500" stroke="#E55A2B" strokeWidth="3" opacity="0.4" />
          </g>
          
          <defs>
            <linearGradient id="botGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E55A2B" />
              <stop offset="100%" stopColor="#CC4A1F" />
            </linearGradient>
            <linearGradient id="botGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#CC4A1F" />
              <stop offset="100%" stopColor="#E55A2B" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Additional Animated Light Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl animate-light-pulse" style={{ backgroundColor: '#E55A2B', opacity: 0.25, animationDelay: '0s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full blur-3xl animate-light-pulse" style={{ backgroundColor: '#CC4A1F', opacity: 0.2, animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full blur-3xl animate-light-pulse" style={{ backgroundColor: '#E55A2B', opacity: 0.22, animationDelay: '4s' }}></div>
      </div>
      
      {/* Background AI Character */}
      <div className="absolute top-10 right-10 w-40 h-40 opacity-20 hidden lg:block z-0">
        <AICharacter variant="assistant" className="w-full h-full" animated={true} />
      </div>
      <div className="absolute bottom-10 left-10 w-32 h-32 opacity-15 hidden xl:block z-0">
        <AICharacter variant="helper" className="w-full h-full" animated={true} />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <AICharacter variant="default" className="w-6 h-6" animated={false} />
            <span className="text-primary font-semibold">💰 Pricing Plans</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select the perfect plan for your needs. All plans include our core
            features with flexible options.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {['monthly', 'yearly', 'enterprise'].map((planType) => (
            <button
              key={planType}
              onClick={() => handlePlanClick(planType)}
              className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                selectedPlan === planType
                  ? 'bg-primary text-white shadow-xl scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md border-2 border-gray-200'
              }`}
              aria-label={`Select ${planType} plan`}
              tabIndex={0}
              onKeyDown={(e) => handleKeyDown(e, planType)}
            >
              {plans[planType].name}
            </button>
          ))}
        </div>

        <div className="max-w-5xl mx-auto">
          <div
            className={`bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 transition-all duration-300 transform hover:scale-[1.02] ${
              currentPlan.popular
                ? 'border-primary ring-4 ring-primary/20'
                : 'border-gray-200'
            }`}
          >
            {currentPlan.popular && (
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-light text-white px-6 py-2 rounded-full text-sm font-bold mb-6 shadow-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Most Popular
              </div>
            )}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-4xl font-bold text-gray-900">
                {currentPlan.name} Plan
              </h3>
            </div>
            <div className="flex items-baseline mb-6">
              <span className="text-6xl font-extrabold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                {currentPlan.price}
              </span>
              {currentPlan.period && (
                <span className="text-gray-600 ml-3 text-xl">{currentPlan.period}</span>
              )}
            </div>
            <p className="text-lg text-gray-600 mb-10">{currentPlan.description}</p>

            <ul className="space-y-5 mb-10">
              {currentPlan.features.map((feature, index) => (
                <li key={index} className="flex items-start group">
                  <span
                    className={`mr-4 flex-shrink-0 ${
                      feature.included ? 'text-primary' : 'text-gray-300'
                    }`}
                  >
                    {feature.included ? (
                      <div className="w-7 h-7 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    ) : (
                      <div className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                    )}
                  </span>
                  <span
                    className={`text-lg ${
                      feature.included ? 'text-gray-800 font-medium' : 'text-gray-400'
                    }`}
                  >
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-5 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl ${
                currentPlan.popular
                  ? 'bg-gradient-to-r from-primary to-primary-dark text-white hover:shadow-2xl hover:shadow-primary/50'
                  : 'bg-gray-900 text-white hover:bg-gray-800'
              }`}
              aria-label={`${currentPlan.cta} for ${currentPlan.name} plan`}
              tabIndex={0}
            >
              {currentPlan.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlansSection


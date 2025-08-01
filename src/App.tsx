import {
  ArrowRight,
  CheckCircle,
  ChevronDown,
  Code,
  Cpu,
  Database,
  Globe,
  Mail,
  Network,
  Rocket,
  Shield,
  Sparkles,
  Zap,
  Building
} from 'lucide-react';
import React, { useState } from 'react';
import { BentoCard, BentoGrid } from './components/magicui/bento-grid';
import { NumberInput } from '@mantine/core';

function App() {
  const [email, setEmail] = useState('');
  const [aiSystemsCount, setAiSystemsCount] = useState<number | string>('');
  const [companyName, setCompanyName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<'free' | 'standard' | 'enterprise'>('standard');

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    setIsLoading(false);
  };

  const features = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Enterprise level security and compliance standards ensure your AI systems are protected and audit-ready.",
      color: "from-emerald-400 to-teal-600"
    },
    {
      icon: Zap,
      title: "Instant Publishing",
      description: "Publish your AI models to a secure marketplace in minutes, not months. One-click publishing with automated documentation.",
      color: "from-yellow-400 to-orange-600"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Reach clients worldwide with our distributed infrastructure and multi-region deployment capabilities.",
      color: "from-purple-400 to-pink-600"
    }
  ];

  const pricingPlans = [
    {
      id: 'free' as const,
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'For startups and individual developers',
      features: [
        'Free forever',
        'Basic security and compliance features',
        'Generate an AI Bill of Materials'
      ],
      color: 'from-gray-400 to-gray-600',
      popular: false
    },
    {
      id: 'standard' as const,
      name: 'Core',
      price: '$99',
      period: 'per month',
      description: 'Ideal for growing companies and teams',
      features: [
        'Advanced security & compliance for a monthly fee',
        'AI Assisted Compliance Risk Assessments',
        'Everything in free'
      ],
      color: 'from-cyan-400 to-blue-600',
      popular: false
    },
    {
      id: 'enterprise' as const,
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'For large organizations with specific needs',
      features: [
        'Unlimited AI systems',
        'Advanced AI PenTesting and Remediations',
        'Everything in core'
      ],
      color: 'from-purple-400 to-pink-600',
      popular: false
    }
  ];

  const faqs = [
    {
      question: "What types of AI systems can be published?",
      answer: "AI Gateway supports all types of AI systems including machine learning models, natural language processing tools, computer vision applications, LLM applications,and custom AI workflows."
    },
    {
      question: "How does the security and compliance work?",
      answer: "We provide enterprise-grade security and guardrails to ensure your AI systems are secure and compliant. We also provide a comprehensive audit trail of all actions taken on your AI systems. We support the EU AI Act, NIST Risk Management Framework, ISO42001, and more to document your compliance posture."
    },
    {
      question: "What's included in the beta program?",
      answer: "Beta participants get early access to AI Gateway, dedicated onboarding support, direct feedback channels with our product team, and preferential pricing when we launch publicly."
    },
  ];

  const appFeatures = [
    {
      name: 'AI Gateway Search',
      description: 'Find and discover AI systems with our powerful search and filtering capabilities.',
      background: <img src='/screenshots/search.png' />,
      Icon: Globe,
      href: '/',
      cta: 'Learn More',
      // Make the first box span the first column
      className: "col-span-1",
    },
    {
      name: 'AI System Details',
      description: 'Comprehensive information about each AI system with security and compliance details.',
      background: <img src='/screenshots/details.png' />,
      Icon: Shield,
      href: '/',
      cta: 'Learn More',
      // Make the second box span the second column, so they are side by side
      className: "col-span-1",
    },
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>

        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-float animation-delay-4000"></div>

        {/* Geometric Shapes */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-cyan-400/30 rotate-45 animate-twinkle"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-purple-400/30 rounded-full animate-twinkle animation-delay-300"></div>
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-emerald-400/30 animate-twinkle animation-delay-600"></div>
        <div className="absolute top-2/3 right-1/4 w-5 h-5 bg-pink-400/30 rotate-12 animate-twinkle animation-delay-900"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 py-4 px-4 sm:px-6 lg:px-8 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-start">
          <a 
            href="https://cranium.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105"
          >
            <img src="/cranium_logo.svg" alt="Cranium AI" className="h-10" />
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-10 pt-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative">
            {/* Floating Icons */}
            <div className="absolute -top-10 left-1/4 opacity-20 animate-float">
              <Code className="h-8 w-8 text-cyan-400" />
            </div>
            <div className="absolute -top-5 right-1/4 opacity-20 animate-float animation-delay-300">
              <Database className="h-6 w-6 text-purple-400" />
            </div>
            <div className="absolute top-10 left-1/6 opacity-20 animate-float animation-delay-600">
              <Network className="h-7 w-7 text-emerald-400" />
            </div>
            <div className="absolute top-5 right-1/6 opacity-20 animate-float animation-delay-900">
              <Cpu className="h-5 w-5 text-pink-400" />
            </div>

            

            <h1 className="text-xl sm:text-6xl lg:text-8xl font-bold text-white mb-8 leading-tight animate-fadeInUp">
              <span className="block mb-2">Publish Your</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
                AI Systems
              </span>
              <span className="block text-3xl sm:text-4xl lg:text-5xl mt-4 text-gray-300 font-light">
                Securely & Confidently
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-400 mb-4 max-w-4xl mx-auto leading-relaxed animate-fadeInUp animation-delay-300">
            The first AI security focused enterprise marketplace for AI systems. Showcase your product, connect with potential customers, and accelerate your AI sales cycle with Cranium's enterprise level AI security 
            </p>
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 mb-8 animate-bounceIn backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-cyan-400 mr-2 animate-twinkle" />
              <span className="text-cyan-300 text-sm font-medium">🚀 Coming Soon - AI Gateway Beta</span>
            </div>

            {/* Pricing Plans */}
            <div className="max-w-6xl mx-auto mb-12 animate-fadeInUp animation-delay-600">
              <h3 className="text-2xl font-bold text-white mb-8">Choose Your Plan</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {pricingPlans.map((plan) => (
                  <div
                    key={plan.id}
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`relative cursor-pointer transition-all duration-500 transform ${selectedPlan === plan.id
                        ? 'shadow-2xl shadow-cyan-500/40 scale-105 z-10'
                        : 'hover:shadow-xl hover:scale-102'
                      }`}
                  >
                    {selectedPlan === plan.id && (
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-800 rounded-2xl blur-sm opacity-70 group-hover:opacity-100 animate-pulse"></div>
                    )}
                    <div className={`relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-full ${selectedPlan === plan.id ? 'bg-gradient-to-br from-cyan-500/20 to-blue-600/20' : ''
                      }`}>
                      {selectedPlan === plan.id && (
                        <div className="absolute inset-0 rounded-2xl bg-cyan-400/10 animate-pulse z-[-1]"></div>
                      )}
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.color} flex items-center justify-center mb-6 mx-auto ${selectedPlan === plan.id ? 'animate-bounce-subtle' : 'animate-float'}`}>
                        <img
                          src="/cranium_icon.png"
                          alt="Cranium Icon"
                          className={`h-12 w-8 ${selectedPlan === plan.id ? 'animate-pulse' : ''}`}
                        />
                      </div>
                      <h4 className={`text-2xl font-bold mb-2 ${selectedPlan === plan.id ? 'text-cyan-300' : 'text-white'} transition-colors duration-300`}>{plan.name}</h4>
                      <p className="text-gray-400 mb-6">{plan.description}</p>
                      <ul className="space-y-3">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-gray-300">
                            <CheckCircle className={`h-5 w-5 mr-3 flex-shrink-0 ${
                              selectedPlan === plan.id ? 'text-cyan-400' : 'text-emerald-400'
                            } ${selectedPlan === plan.id ? 'animate-pulse' : ''}`} />
                            <span className={`text-sm text-left ${
                              selectedPlan === plan.id ? 'text-white' : 'text-gray-300'
                            } transition-colors duration-300`}>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Waitlist Form */}
            <div className="max-w-lg mx-auto animate-fadeInUp animation-delay-900">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex-1">
                    <div className="relative">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full px-6 py-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400/50 focus:bg-white/10 transition-all duration-300 text-center"
                        required
                      />
                      <label className="absolute -top-3 left-6 px-2 bg-black text-cyan-400 text-xs font-medium">
                        Email
                      </label>
                      <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-cyan-400/50" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="relative">
                      <input
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="Your company name"
                        className="w-full px-6 py-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400/50 focus:bg-white/10 transition-all duration-300 text-center appearance-none"
                      />
                      <label className="absolute -top-3 left-6 px-2 bg-black text-cyan-400 text-xs font-medium">
                        Company
                      </label>
                      <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none">
                        <Building className="h-5 w-5 text-cyan-400/50" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="relative">
                      <NumberInput
                        variant="unstyled"
                        value={aiSystemsCount}
                        onChange={(value: number | string) => setAiSystemsCount(value)}
                        placeholder="How many AI systems will you publish?"
                        className="w-full px-6 py-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400/50 focus:bg-white/10 transition-all duration-300 text-center appearance-none"
                        min={1}
                        styles={{
                          input: {
                            backgroundColor: 'transparent',
                            color: 'white',
                            textAlign: 'center',
                            '&::placeholder': {
                              color: 'rgba(156, 163, 175, 1)'
                            }
                          },
                          control: {
                            color: 'rgba(103, 232, 249, 0.5)',
                            border: 'none',
                            '&:hover': {
                              backgroundColor: 'rgba(255, 255, 255, 0.05)'
                            }
                          }
                        }}
                      />
                      <label className="absolute -top-3 left-6 px-2 bg-black text-cyan-400 text-xs font-medium">
                        Number of AI Systems
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-h-[56px] shadow-lg hover:shadow-xl hover:shadow-cyan-500/25 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {isLoading ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin relative z-10"></div>
                    ) : (
                      <span className="relative z-10 flex items-center">
                        <Rocket className="mr-2 h-5 w-5" />
                        Join {pricingPlans.find(p => p.id === selectedPlan)?.name} Waitlist
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    )}
                  </button>
                </form>
              ) : (
                <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-2xl p-8 text-center backdrop-blur-xl animate-bounceIn">
                  <CheckCircle className="h-16 w-16 text-emerald-400 mx-auto mb-4 animate-bounce" />
                  <h3 className="text-xl font-semibold text-white mb-2">You're on the list!</h3>
                  <p className="text-gray-300 mb-2">We'll notify you as soon as AI Gateway beta is available.</p>
                  <p className="text-emerald-400 font-semibold">Selected Plan: {pricingPlans.find(p => p.id === selectedPlan)?.name}</p>
                  {companyName && (
                    <p className="text-gray-300 mt-2">Company: {companyName}</p>
                  )}
                  {aiSystemsCount && (
                    <p className="text-gray-300 mt-2">AI Systems to Publish: {aiSystemsCount}</p>
                  )}
                </div>
              )}
            </div>
          </div>
              <p className="text-gray-400 text-center">Joining our waitlist is free. We'll notify you when we launch your selected plan.</p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent"/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 relative">
              Built for Enterprise AI Sales
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full"></div>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to showcase, secure, and sell your AI systems to enterprise clients.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group animate-fadeInUp`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`bg-gradient-to-r ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 animate-float`}>
                  <feature.icon className="h-8 w-8 text-white group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors text-left">{feature.description}</p>

                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
            <BentoGrid className="grid-cols-2 gap-6 mt-12">
            {appFeatures.map((feature) => (
              <BentoCard key={feature.name} {...feature} />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="pb-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 relative">
              Frequently Asked Questions
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-emerald-400 to-teal-600 rounded-full"></div>
            </h2>
            <p className="text-xl text-gray-400">
              Everything you need to know about AI Gateway.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 animate-fadeInUp`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <button
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300 group"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <span className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-400 group-hover:text-cyan-400 transition-all duration-300 flex-shrink-0 ${expandedFaq === index ? 'rotate-180' : ''
                      }`}
                  />
                </button>
                {expandedFaq === index && (
                  <div className="px-8 pb-6 animate-slideDown">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-4"></div>
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-600/5"></div>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 animate-fadeInUp">
            Ready to Transform Your AI Sales?
          </h2>
          <p className="text-xl text-gray-400 mb-12 animate-fadeInUp animation-delay-200">
            Join the waitlist and be among the first to experience the future of AI marketplace.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fadeInUp animation-delay-400">
            <button
              onClick={scrollToTop}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all transform hover:scale-105 flex items-center shadow-lg hover:shadow-xl hover:shadow-cyan-500/25 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Mail className="mr-2 h-5 w-5 relative z-10" />
              <span className="relative z-10">
                Join the Waitlist
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/60 border-t border-white/5 py-4 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between animate-fadeInUp">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
            </div>

            <div className="text-gray-500 text-center md:text-right">
              <p>&copy; 2025 Cranium AI. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
'use client';

import Link from 'next/link';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-serif transition-colors duration-300">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, currentColor 1px, transparent 1px),
                             radial-gradient(circle at 75% 75%, currentColor 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          ></div>
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-teal-400 via-green-400 to-emerald-400 bg-clip-text text-transparent">
              Web Development Services
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto mb-6">
            Professional websites that grow your business. From concept to
            launch, I handle everything.
          </p>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4 max-w-3xl mx-auto">
            <p className="text-neutral-300 font-medium text-center">
              Agency quality at freelancer prices with{' '}
              <span className="text-white font-semibold">
                unlimited revisions
              </span>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
            {/* Basic Landing Page */}
            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-700 rounded-2xl p-6 hover:border-teal-400/50 transition-all duration-300 flex flex-col">
              <div className="text-center mb-4 h-24">
                <div className="bg-gradient-to-r from-teal-500/20 to-green-500/20 border border-teal-500/30 text-teal-300 px-3 py-1 rounded-full text-xs font-medium inline-block mb-3">
                  MOST POPULAR
                </div>
                <h2 className="text-xl font-bold mb-2 text-white">
                  Basic Landing Page
                </h2>
                <p className="text-neutral-400 text-sm">
                  Perfect for product launches & campaigns
                </p>
              </div>

              <div className="text-center mb-6 h-20">
                <div className="mb-2">
                  <span className="text-neutral-500 line-through text-sm">
                    Market: $2,000-$3,500
                  </span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">$500</div>
                <div className="text-neutral-400 text-xs">
                  Save up to $3,000
                </div>
              </div>

              <div className="space-y-2 mb-6 text-sm h-20">
                <div className="flex justify-between">
                  <span className="text-neutral-300">Delivery:</span>
                  <span className="text-white">5-7 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-300">Revisions:</span>
                  <span className="text-teal-400 font-semibold">Unlimited</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-300">Support:</span>
                  <span className="text-white">3 months</span>
                </div>
              </div>

              <div className="space-y-2 mb-6 flex-grow">
                <h3 className="text-white font-semibold mb-3 text-sm">
                  Includes:
                </h3>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-neutral-400 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-neutral-300 text-sm">
                    Responsive design (mobile/tablet/desktop)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-neutral-400 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-neutral-300 text-sm">
                    Contact form with email notifications
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-neutral-400 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-neutral-300 text-sm">
                    Google Analytics & Search Console setup
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-neutral-400 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-neutral-300 text-sm">
                    SEO optimization & meta tags
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-neutral-400 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-neutral-300 text-sm">
                    SSL certificate & hosting setup
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-neutral-400 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-neutral-300 text-sm">
                    Fast loading speed optimization
                  </span>
                </div>
              </div>

              <Link
                href="/contact?service=basic-landing"
                className="block w-full py-3 bg-gradient-to-r from-teal-500/10 to-green-500/10 border border-teal-500/30 text-teal-400 font-medium rounded-xl hover:from-teal-500/20 hover:to-green-500/20 transition-all duration-200 mt-auto text-center"
              >
                Get Started
              </Link>
            </div>

            {/* Professional Landing Page */}
            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-700 rounded-2xl p-6 hover:border-teal-400/50 transition-all duration-300 flex flex-col">
              <div className="text-center mb-4 h-24 flex flex-col justify-end">
                <h2 className="text-xl font-bold mb-2 text-white">
                  Pro Landing Page
                </h2>
                <p className="text-neutral-400 text-sm">
                  Advanced features & integrations
                </p>
              </div>

              <div className="text-center mb-6 h-20">
                <div className="mb-2">
                  <span className="text-neutral-500 line-through text-sm">
                    Market: $3,500-$5,000
                  </span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">$950</div>
                <div className="text-neutral-400 text-xs">
                  Save up to $4,050
                </div>
              </div>

              <div className="space-y-2 mb-6 text-sm h-20">
                <div className="flex justify-between">
                  <span className="text-neutral-300">Delivery:</span>
                  <span className="text-white">7-10 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-300">Revisions:</span>
                  <span className="text-teal-400 font-semibold">Unlimited</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-300">Support:</span>
                  <span className="text-white">6 months</span>
                </div>
              </div>

              <div className="space-y-2 mb-6 flex-grow">
                <h3 className="text-white font-semibold mb-3 text-sm">
                  Everything in Basic plus:
                </h3>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-neutral-400 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-neutral-300 text-sm">
                    CRM integration (HubSpot, Salesforce)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-neutral-400 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-neutral-300 text-sm">
                    Marketing automation setup
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-neutral-400 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-neutral-300 text-sm">
                    Conversion tracking & heatmaps
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-neutral-400 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-neutral-300 text-sm">
                    Custom animations & interactions
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-neutral-400 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-neutral-300 text-sm">
                    Live chat integration
                  </span>
                </div>
              </div>

              <Link
                href="/contact?service=pro-landing"
                className="block w-full py-3 bg-neutral-800 border border-neutral-700 text-white font-medium rounded-xl hover:bg-neutral-700 transition-all duration-200 mt-auto text-center"
              >
                Get Started
              </Link>
            </div>

            {/* Small Business Website */}
            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-700 rounded-2xl p-6 hover:border-green-400/50 transition-all duration-300 flex flex-col">
              <div className="text-center mb-4 h-24 flex flex-col justify-end">
                <h2 className="text-xl font-bold mb-2 text-white">
                  Small Business Site
                </h2>
                <p className="text-neutral-400 text-sm">
                  Complete online presence (5-8 pages)
                </p>
              </div>

              <div className="text-center mb-6 h-20">
                <div className="mb-2">
                  <span className="text-neutral-500 line-through text-sm">
                    Market: $5,000-$10,000
                  </span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">$1,600</div>
                <div className="text-neutral-400 text-xs">
                  Save up to $8,400
                </div>
              </div>

              <div className="space-y-2 mb-6 text-sm h-20">
                <div className="flex justify-between">
                  <span className="text-neutral-300">Delivery:</span>
                  <span className="text-white">2-3 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-300">Revisions:</span>
                  <span className="text-teal-400 font-semibold">Unlimited</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-300">Support:</span>
                  <span className="text-white">6 months</span>
                </div>
              </div>

              <div className="space-y-2 mb-6 flex-grow">
                <h3 className="text-white font-semibold mb-3 text-sm">
                  Includes:
                </h3>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-neutral-400 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-neutral-300 text-sm">
                    5-8 custom designed pages
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-neutral-400 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-neutral-300 text-sm">
                    Content Management System (CMS)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-neutral-400 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-neutral-300 text-sm">
                    Blog functionality
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-neutral-400 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-neutral-300 text-sm">
                    Social media integration
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-neutral-400 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-neutral-300 text-sm">
                    Google My Business optimization
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-neutral-400 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-neutral-300 text-sm">
                    Basic training included
                  </span>
                </div>
              </div>

              <Link
                href="/contact?service=small-business"
                className="block w-full py-3 bg-neutral-800 border border-neutral-700 text-white font-medium rounded-xl hover:bg-neutral-700 transition-all duration-200 mt-auto text-center"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Additional Services */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {/* Website Maintenance */}
            <div className="bg-neutral-900/30 backdrop-blur-sm border border-neutral-600 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">
                  Website Maintenance
                </h3>
                <svg
                  className="w-6 h-6 text-neutral-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="mb-4">
                <div className="text-neutral-500 line-through text-sm mb-1">
                  Market: $200-$500/month
                </div>
                <div className="text-2xl font-bold text-white">
                  $75-$199
                  <span className="text-sm text-neutral-400">/month</span>
                </div>
              </div>
              <p className="text-neutral-300 text-sm mb-4">
                Keep your site secure, updated, and running smoothly
              </p>
              <div className="space-y-1 text-xs text-neutral-400">
                <div>• Security updates & backups</div>
                <div>• Performance optimization</div>
                <div>• Content updates & support</div>
              </div>
            </div>

            {/* E-commerce Setup */}
            <div className="bg-neutral-900/30 backdrop-blur-sm border border-neutral-600 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">
                  E-commerce Setup
                </h3>
                <svg
                  className="w-6 h-6 text-neutral-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 21h6"
                  />
                </svg>
              </div>
              <div className="mb-4">
                <div className="text-neutral-500 line-through text-sm mb-1">
                  Market: $3,000-$8,000
                </div>
                <div className="text-2xl font-bold text-white">$1,200</div>
              </div>
              <p className="text-neutral-300 text-sm mb-4">
                Complete online store with payment processing
              </p>
              <div className="space-y-1 text-xs text-neutral-400">
                <div>• Product catalog & checkout</div>
                <div>• Payment gateway integration</div>
                <div>• Inventory management</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-neutral-950 to-neutral-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-teal-400 via-green-400 to-emerald-400 bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-teal-500/20 to-green-500/20 border border-teal-500/30 rounded-full flex items-center justify-center">
                <span className="text-teal-300 font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  We Talk
                </h3>
                <p className="text-neutral-300">
                  Tell me about your business goals and what you need your
                  website to do.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500/20 to-teal-500/20 border border-green-500/30 rounded-full flex items-center justify-center">
                <span className="text-green-300 font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  I Build
                </h3>
                <p className="text-neutral-300">
                  Your website is custom-built from scratch with your specific
                  needs in mind.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 border border-teal-500/30 rounded-full flex items-center justify-center">
                <span className="text-teal-300 font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  You Review
                </h3>
                <p className="text-neutral-300">
                  See your website in action and request any changes you need.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/30 rounded-full flex items-center justify-center">
                <span className="text-emerald-300 font-bold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  We Launch
                </h3>
                <p className="text-neutral-300">
                  Your website goes live with ongoing support to ensure
                  everything runs smoothly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">
            Why Work With Me
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-neutral-900/30 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-3">
                No Templates
              </h3>
              <p className="text-neutral-300">
                Every website is built from scratch, designed specifically for
                your business needs.
              </p>
            </div>
            <div className="bg-neutral-900/30 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-3">
                Fast & Reliable
              </h3>
              <p className="text-neutral-300">
                Modern technology ensures your site loads quickly and works
                perfectly every time.
              </p>
            </div>
            <div className="bg-neutral-900/30 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-3">
                Mobile-First
              </h3>
              <p className="text-neutral-300">
                Your site will look great and work flawlessly on phones,
                tablets, and computers.
              </p>
            </div>
            <div className="bg-neutral-900/30 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-3">
                Ongoing Support
              </h3>
              <p className="text-neutral-300">
                I don&apos;t disappear after launch. You get continued support
                to ensure success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-neutral-900 to-neutral-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-neutral-300 mb-8">
            Let&apos;s create a website that grows your business and impresses
            your customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-gradient-to-r from-teal-500 to-green-500 text-white font-medium rounded-xl hover:from-teal-600 hover:to-green-600 transition-all duration-200"
            >
              Start Your Project
            </Link>
            <button
              onClick={() =>
                (window.location.href = `mailto:${['tylerjames', 'bridges', '@', 'gmail.com'].join('')}`)
              }
              className="px-8 py-3 border border-neutral-600 text-white font-medium rounded-xl hover:bg-neutral-800 transition-all duration-200"
            >
              Email Me Directly
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

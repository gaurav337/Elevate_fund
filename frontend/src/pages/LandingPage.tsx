import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle,
  Users,
  Target,
  TrendingUp,
  DollarSign,
  Shield,
  Wallet,
  HeadphonesIcon,
  ChevronRight
} from 'lucide-react';
import Button from '../components/Button';

const LandingPage = () => {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-white to-emerald-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Turn Dreams into Reality with Community-Powered Funding
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Join ElevateFund – Where Entrepreneurs Meet Supporters. Launch Your Vision or Back the Next Big Idea.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/signup">
                  <Button size="lg" className="w-full sm:w-auto">
                    Start Your Campaign <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Explore Projects <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                alt="Entrepreneurs collaborating"
                className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
            <div className="p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
              <p className="text-4xl font-bold text-indigo-600">₹25M+</p>
              <p className="text-gray-600 mt-2">Raised</p>
            </div>
            <div className="p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
              <p className="text-4xl font-bold text-indigo-600">1,200+</p>
              <p className="text-gray-600 mt-2">Projects Funded</p>
            </div>
            <div className="p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
              <p className="text-4xl font-bold text-indigo-600">98%</p>
              <p className="text-gray-600 mt-2">Success Rate</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="text-2xl font-semibold text-gray-400 hover:text-gray-600 transition-colors duration-300">
              TechStart Inc.
            </div>
            <div className="text-2xl font-semibold text-gray-400 hover:text-gray-600 transition-colors duration-300">
              GreenFuture
            </div>
            <div className="text-2xl font-semibold text-gray-400 hover:text-gray-600 transition-colors duration-300">
              WomenWhoBuild
            </div>
            <div className="text-2xl font-semibold text-gray-400 hover:text-gray-600 transition-colors duration-300">
              InnovateIndia
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900">Launch Your Project in 3 Steps</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-white hover:shadow-md transition-shadow duration-300">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Submit Your Pitch</h4>
                    <p className="text-gray-600">Share your vision and goals with our community</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-white hover:shadow-md transition-shadow duration-300">
                  <div className="flex-shrink-0">
                    <Target className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Set Funding Goal</h4>
                    <p className="text-gray-600">Define your funding needs and timeline</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-white hover:shadow-md transition-shadow duration-300">
                  <div className="flex-shrink-0">
                    <Users className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Engage Supporters</h4>
                    <p className="text-gray-600">Connect with backers and grow your community</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900">Invest in Impact</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-white hover:shadow-md transition-shadow duration-300">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Browse Projects</h4>
                    <p className="text-gray-600">Discover innovative projects aligned with your interests</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-white hover:shadow-md transition-shadow duration-300">
                  <div className="flex-shrink-0">
                    <Target className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Choose Your Tier</h4>
                    <p className="text-gray-600">Select your investment level and rewards</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-white hover:shadow-md transition-shadow duration-300">
                  <div className="flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Track Growth</h4>
                    <p className="text-gray-600">Monitor project progress and impact</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Campaigns */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Campaigns</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Solar-Powered Irrigation for Rural Farmers",
                entrepreneur: "EcoHarvest Solutions",
                funding: { goal: "₹5,00,000", progress: 72 },
                tag: "Sustainability",
                image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "AI Tutoring App for Rural Schools",
                entrepreneur: "EdVision Tech",
                funding: { goal: "₹2,50,000", progress: 45 },
                tag: "Education",
                image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Handmade Organic Textiles Revival",
                entrepreneur: "WeaveCraft Collective",
                funding: { goal: "₹1,00,000", progress: 120 },
                tag: "Artisan",
                image: "https://images.unsplash.com/photo-1464699908537-0954e50791ee?auto=format&fit=crop&w=800&q=80"
              }
            ].map((campaign, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-sm font-semibold text-emerald-700 bg-emerald-100 rounded-full">
                    {campaign.tag}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">{campaign.title}</h3>
                  <p className="mt-2 text-gray-600">{campaign.entrepreneur}</p>
                  <div className="mt-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Goal: {campaign.funding.goal}</span>
                      <span>{campaign.funding.progress}% Funded</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-indigo-600 h-2 rounded-full"
                        style={{ width: `${Math.min(campaign.funding.progress, 100)}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <p className="text-lg text-gray-600 mb-6">
                "ElevateFund helped me secure funding for my clean water project in just 30 days. Life-changing!"
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
                  alt="Priya Mehta"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <p className="font-semibold">Priya Mehta</p>
                  <p className="text-sm text-gray-600">Founder of AquaSolve</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <p className="text-lg text-gray-600 mb-6">
                "As a lender, I've backed 12 projects and seen 9x returns. It's rewarding financially and ethically."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                  alt="Rahul Kapoor"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <p className="font-semibold">Rahul Kapoor</p>
                  <p className="text-sm text-gray-600">Angel Investor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ElevateFund */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose ElevateFund</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: DollarSign,
                title: "Zero Fees",
                description: "No hidden charges. We succeed only when you do."
              },
              {
                icon: Shield,
                title: "Verified Projects",
                description: "Every campaign undergoes strict due diligence."
              },
              {
                icon: Wallet,
                title: "Flexible Funding",
                description: "Choose fixed or flexible funding models."
              },
              {
                icon: HeadphonesIcon,
                title: "24/7 Support",
                description: "Dedicated team to guide you at every step."
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                <feature.icon className="h-10 w-10 mx-auto text-indigo-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Elevate Your Journey?</h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join 50,000+ Innovators and Supporters Shaping India's Future
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto bg-white text-indigo-600 hover:bg-gray-100"
              >
                Start as Entrepreneur
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-white text-white hover:bg-white/10"
            >
              Browse Projects
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-300">
              <h3 className="text-lg font-semibold mb-2">How long does approval take?</h3>
              <p className="text-gray-600">Typically 3-5 business days after submission.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-300">
              <h3 className="text-lg font-semibold mb-2">What returns can I expect?</h3>
              <p className="text-gray-600">Returns vary by project. Historical average: 8-12% annually.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LandingPage;
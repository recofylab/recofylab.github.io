import Link from "next/link";
import { ArrowRight, BarChart3, Brain, Zap, Target, Shield, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="relative z-50 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-gray-900">Recofy</span>
            </div>
            
            <nav className="hidden md:flex items-center gap-8">
              <Link href="#features" className="text-gray-600 hover:text-gray-900">Features</Link>
              <Link href="#integration" className="text-gray-600 hover:text-gray-900">Integration</Link>
              <Link href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link>
              <Link href="#docs" className="text-gray-600 hover:text-gray-900">Docs</Link>
            </nav>
            
            <div className="flex items-center gap-4">
              <Link href="/signin" className="text-gray-600 hover:text-gray-900">Sign In</Link>
              <Link 
                href="/signup" 
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              AI for{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                E-commerce
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced recommendation engine that analyzes user behavior and increases sales with personalized product suggestions powered by machine learning.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/get-started" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
              >
                Get Started <ArrowRight className="h-5 w-5" />
              </Link>
              <Link 
                href="/docs" 
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                View Documentation
              </Link>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-16">
              <p className="text-sm text-gray-500 mb-8">Trusted by growing e-commerce companies</p>
              <div className="flex justify-center items-center gap-8 opacity-60">
                <div className="h-8 w-24 bg-gray-200 rounded"></div>
                <div className="h-8 w-24 bg-gray-200 rounded"></div>
                <div className="h-8 w-24 bg-gray-200 rounded"></div>
                <div className="h-8 w-24 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section id="integration" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Integrate this weekend
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A simple, elegant API that fits right into your e-commerce platform. 
              Start showing personalized recommendations in minutes.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gray-900 rounded-xl p-6 text-green-400 font-mono text-sm overflow-x-auto">
                <div className="text-gray-500">// Install Recofy SDK</div>
                <div className="mt-2">npm install @recofy/sdk</div>
                <br />
                <div className="text-gray-500">// Initialize and get recommendations</div>
                <div className="mt-2 text-blue-400">import</div>
                <div className="text-white"> {'{ Recofy }'} </div>
                <div className="text-blue-400">from</div>
                <div className="text-yellow-300"> '@recofy/sdk'</div>
                <div className="text-white">;</div>
                <br />
                <div className="text-blue-400">const</div>
                <div className="text-white"> recofy = </div>
                <div className="text-blue-400">new</div>
                <div className="text-white"> Recofy(</div>
                <div className="text-yellow-300">'your-api-key'</div>
                <div className="text-white">);</div>
                <br />
                <div className="text-blue-400">const</div>
                <div className="text-white"> recommendations = </div>
                <div className="text-blue-400">await</div>
                <div className="text-white"> recofy.getRecommendations({'{'}</div>
                <div className="ml-4 text-white">userId: </div>
                <div className="text-yellow-300">'user123'</div>
                <div className="text-white">,</div>
                <div className="ml-4 text-white">context: </div>
                <div className="text-yellow-300">'product-page'</div>
                <div className="text-white">{'}'});</div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Real-time Recommendations</h3>
                  <p className="text-gray-600">Get instant product suggestions based on current user behavior and browsing patterns.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Target className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Contextual Intelligence</h3>
                  <p className="text-gray-600">Our AI understands shopping context - whether users are browsing, comparing, or ready to buy.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-2 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Performance Analytics</h3>
                  <p className="text-gray-600">Track conversion rates, click-through rates, and revenue impact of your recommendations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Boost sales with intelligent recommendations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our machine learning algorithms analyze user behavior patterns to deliver 
              personalized shopping experiences that convert.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Brain className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Machine Learning Engine</h3>
              <p className="text-gray-600">
                Advanced ML algorithms that learn from user interactions, purchase history, and behavioral patterns to deliver accurate recommendations.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">User Behavior Analysis</h3>
              <p className="text-gray-600">
                Deep analysis of browsing patterns, time spent on products, and shopping journey to understand customer intent.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Personalized Vitrines</h3>
              <p className="text-gray-600">
                Create dynamic product showcases tailored to each user's preferences, increasing engagement and conversion rates.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-time Analytics</h3>
              <p className="text-gray-600">
                Monitor recommendation performance with detailed metrics on clicks, conversions, and revenue attribution.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Lightning Fast</h3>
              <p className="text-gray-600">
                Sub-100ms response times ensure smooth user experience without impacting your site's performance.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Privacy First</h3>
              <p className="text-gray-600">
                GDPR compliant data processing with user privacy protection and transparent data usage policies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to boost your e-commerce sales?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of e-commerce businesses using Recofy to increase their conversion rates and revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/get-started" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              Start Free Trial <ArrowRight className="h-5 w-5" />
            </Link>
            <Link 
              href="/demo" 
              className="border border-blue-400 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded bg-blue-600 flex items-center justify-center">
                  <Brain className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Recofy</span>
              </div>
              <p className="text-gray-400">
                AI-powered recommendation engine for modern e-commerce platforms.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/features">Features</Link></li>
                <li><Link href="/pricing">Pricing</Link></li>
                <li><Link href="/integrations">Integrations</Link></li>
                <li><Link href="/api">API</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/docs">Documentation</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/case-studies">Case Studies</Link></li>
                <li><Link href="/support">Support</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about">About</Link></li>
                <li><Link href="/careers">Careers</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/privacy">Privacy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Recofy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

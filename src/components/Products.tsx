import { Target, Clock, Activity, Brain, BarChart3 } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const products = [
  {
    icon: Target,
    name: 'Option Apex',
    tagline: 'Peak Performance Trading',
    description: 'Advanced options strategies with AI-powered analytics to maximize your trading potential. Get precise entry and exit signals backed by machine learning algorithms.',
    features: ['AI Signal Generation', 'Risk Calculator', 'Live Greeks Analysis', 'Strategy Builder'],
    gradient: 'from-blue-600 to-blue-400',
  },
  {
    icon: Clock,
    name: 'Option Clock',
    tagline: 'Perfect Timing, Every Time',
    description: 'Time-sensitive trading alerts that help you catch the perfect moment. Never miss an opportunity with our real-time notification system and market timing indicators.',
    features: ['Real-time Alerts', 'Market Timing', 'Expiry Reminders', 'Time Decay Analysis'],
    gradient: 'from-cyan-600 to-cyan-400',
  },
  {
    icon: Activity,
    name: 'Swing Spectrum',
    tagline: 'Ride the Market Waves',
    description: 'Comprehensive swing trading system that identifies high-probability setups. Capture significant price movements with our proprietary momentum indicators.',
    features: ['Momentum Indicators', 'Pattern Recognition', 'Multi-timeframe Analysis', 'Trade Journal'],
    gradient: 'from-purple-600 to-purple-400',
  },
  {
    icon: Brain,
    name: 'Insider Strategy',
    tagline: 'Think Like a Pro',
    description: 'Institutional-grade strategies used by professional traders. Access advanced techniques, sentiment analysis, and market intelligence for informed decision-making.',
    features: ['Institutional Signals', 'Sentiment Analysis', 'Volume Profile', 'Smart Money Tracking'],
    gradient: 'from-orange-600 to-orange-400',
  },
  {
    icon: BarChart3,
    name: 'Market Pulse',
    tagline: 'Real-time Market Intelligence',
    description: 'Live breadth, sector rotation, and volatility dashboards to understand market health at a glance. Stay ahead with actionable heatmaps and sentiment overlays.',
    features: ['Breadth Dashboards', 'Sector Rotation', 'Volatility Monitor', 'Heatmaps & Sentiment'],
    gradient: 'from-emerald-600 to-emerald-400',
  },
];

export default function Products() {
  return (
    <AnimatedSection as="section" id="products" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Trading Solutions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Powerful tools designed to elevate your trading game to the next level
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`h-2 bg-gradient-to-r ${product.gradient}`}></div>
              <div className="p-8">
                <div className={`inline-flex p-4 bg-gradient-to-r ${product.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <product.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {product.name}
                </h3>
                <p className={`text-lg font-semibold mb-4 bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}>
                  {product.tagline}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {product.description}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {product.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${product.gradient}`}></div>
                      {feature}
                    </div>
                  ))}
                </div>
                <button className={`w-full mt-6 px-6 py-3 bg-gradient-to-r ${product.gradient} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105`}>
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

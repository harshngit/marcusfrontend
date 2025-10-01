import { Shield, Zap, TrendingUp, Users, Clock, Award } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Bank-grade security with 99.9% uptime guarantee for your peace of mind',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Real-time data processing with millisecond accuracy for instant decisions',
  },
  {
    icon: TrendingUp,
    title: 'Proven Results',
    description: 'Track record of consistent returns with verified performance metrics',
  },
  {
    icon: Users,
    title: 'Expert Community',
    description: 'Join thousands of successful traders sharing strategies and insights',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock assistance from our dedicated support team',
  },
  {
    icon: Award,
    title: 'Industry Leading',
    description: 'Award-winning platform trusted by professional traders worldwide',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Experience the difference with our cutting-edge platform built for serious traders
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

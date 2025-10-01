import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$49',
    period: '/month',
    description: 'Perfect for beginners exploring the market',
    features: [
      'Option Apex Basic',
      'Real-time market data',
      'Email support',
      'Basic analytics',
      'Mobile app access',
      '5 active alerts',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    price: '$149',
    period: '/month',
    description: 'For serious traders who demand more',
    features: [
      'All Starter features',
      'Option Clock included',
      'Swing Spectrum access',
      'Priority support 24/7',
      'Advanced analytics',
      'Unlimited alerts',
      'API access',
      'Custom strategies',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '$299',
    period: '/month',
    description: 'Complete suite for professional traders',
    features: [
      'All Professional features',
      'Insider Strategy included',
      'Dedicated account manager',
      'Custom integrations',
      'White-label options',
      'Educational webinars',
      'Portfolio management',
      'Tax reporting tools',
    ],
    popular: false,
  },
];

export default function Subscription() {
  return (
    <section id="pricing" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Flexible pricing options designed to fit your trading journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br ${
                plan.popular
                  ? 'from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 border-2 border-blue-500 dark:border-cyan-400 scale-105'
                  : 'from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700'
              } rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold text-gray-900 dark:text-white">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div
                      className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                        plan.popular
                          ? 'bg-gradient-to-r from-blue-600 to-cyan-500'
                          : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                    >
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:shadow-lg hover:scale-105'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            All plans include a 14-day money-back guarantee
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Need a custom plan? <a href="#" className="text-blue-600 dark:text-cyan-400 hover:underline">Contact us</a>
          </p>
        </div>
      </div>
    </section>
  );
}

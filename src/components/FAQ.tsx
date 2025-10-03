import { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'What makes your platform different from others?',
    answer: 'We combine institutional-grade analytics with an intuitive interface, backed by AI-powered insights and real-time data processing. Our platform is built by traders, for traders, with a proven track record of consistent results.',
  },
  {
    question: 'Do I need prior trading experience?',
    answer: 'No! Our platform caters to all experience levels. Beginners can start with our Starter plan and educational resources, while experienced traders can leverage our advanced features and strategies.',
  },
  {
    question: 'How accurate are your trading signals?',
    answer: 'Our AI-powered system maintains a 98% accuracy rate based on historical data. However, all trading involves risk, and past performance does not guarantee future results. We recommend using proper risk management strategies.',
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Yes, you can cancel your subscription at any time with no penalties. We also offer a 14-day money-back guarantee if you are not satisfied with our services.',
  },
  {
    question: 'What markets and instruments do you support?',
    answer: 'We support stocks, options, futures, and ETFs across major US exchanges. Our platform provides real-time data and analytics for thousands of trading instruments.',
  },
  {
    question: 'Is my data and trading information secure?',
    answer: 'Absolutely. We use bank-grade encryption, secure data centers, and follow industry best practices to protect your information. We never share your data with third parties.',
  },
  {
    question: 'Do you offer customer support?',
    answer: 'Yes! Professional and Enterprise plans include 24/7 priority support. Starter plan users have access to email support with responses within 24 hours. We also provide extensive documentation and video tutorials.',
  },
  {
    question: 'Can I try before committing to a paid plan?',
    answer: 'Yes, we offer a 14-day trial period with full access to all features. No credit card required to start. Experience the platform risk-free before making a decision.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <AnimatedSection as="section" id="faq" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Got questions? We have answers
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:border-blue-500 dark:hover:border-cyan-400 transition-colors duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-blue-600 dark:text-cyan-400" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-400" />
                  )}
                </div>
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden ${openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
              >
                <div className="px-8 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Still have questions?
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
            Contact Support
          </button>
        </div>
      </div>
    </AnimatedSection>
  );
}

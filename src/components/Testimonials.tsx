import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Michael Chen',
    role: 'Day Trader',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'This platform has completely transformed my trading strategy. The AI signals are incredibly accurate, and I have seen a 40% increase in my portfolio within just 3 months.',
  },
  {
    name: 'Sarah Johnson',
    role: 'Options Trader',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'Option Apex is a game-changer! The real-time analytics and Greeks analysis have given me the confidence to execute complex strategies. Best investment I have made in my trading career.',
  },
  {
    name: 'David Rodriguez',
    role: 'Swing Trader',
    image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'Swing Spectrum helped me identify high-probability setups that I would have missed otherwise. The customer support is outstanding, and the community is incredibly helpful.',
  },
  {
    name: 'Emily Watson',
    role: 'Professional Investor',
    image: 'https://images.pexels.com/photos/3756520/pexels-photo-3756520.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'As a professional investor, I demand accuracy and reliability. This platform delivers on both fronts. The institutional-grade strategies are exactly what I needed to scale my operations.',
  },
  {
    name: 'James Thompson',
    role: 'Retired Trader',
    image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'After 30 years of trading, I thought I had seen it all. This platform proved me wrong. The Insider Strategy module provides insights that were previously only available to hedge funds.',
  },
  {
    name: 'Lisa Martinez',
    role: 'Beginner Trader',
    image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'As someone new to trading, I was nervous about getting started. The educational resources and intuitive interface made it easy to learn. I am now trading confidently and profitably!',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Traders Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Join thousands of successful traders who trust our platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <Quote className="w-10 h-10 text-blue-600 dark:text-cyan-400 mb-4 opacity-50" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {testimonial.text}
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-blue-500 dark:border-cyan-400"
                />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

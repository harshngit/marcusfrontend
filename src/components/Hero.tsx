import { TrendingUp, BarChart3, LineChart } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-300/20 dark:bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
            Master the Stock Market
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your trading strategy with advanced analytics, real-time insights, and proven methodologies
          </p>
          <div className="flex flex-row flex-nowrap gap-4 justify-start items-center lg:justify-center mb-16">
            <button className="px-5 lg:px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg text-sm lg:text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Get Started Free
            </button>
            <button className="px-5 lg:px-8 py-4 bg-white dark:bg-gray-800 text-blue-600 dark:text-cyan-400 rounded-lg lg:text-lg text-sm font-semibold border-2 border-blue-600 dark:border-cyan-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-300">
              Watch Demo
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-20">
            {[
              { icon: TrendingUp, title: '98% Accuracy', desc: 'Market predictions' },
              { icon: BarChart3, title: '10,000+', desc: 'Active traders' },
              { icon: LineChart, title: '24/7', desc: 'Live monitoring' },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-cyan-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <item.icon className="w-12 h-12 mx-auto mb-4 text-blue-600 dark:text-cyan-400" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

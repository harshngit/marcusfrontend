import { Building2 } from 'lucide-react';

const clients = [
  { name: 'TechCorp', logo: 'TC' },
  { name: 'FinanceHub', logo: 'FH' },
  { name: 'InvestPro', logo: 'IP' },
  { name: 'TradeMax', logo: 'TM' },
  { name: 'MarketEdge', logo: 'ME' },
  { name: 'WealthWise', logo: 'WW' },
  { name: 'CapitalFlow', logo: 'CF' },
  { name: 'AssetVision', logo: 'AV' },
];

const stats = [
  { number: '50K+', label: 'Active Users' },
  { number: '$2B+', label: 'Trading Volume' },
  { number: '98%', label: 'Satisfaction Rate' },
  { number: '24/7', label: 'Support Available' },
];

export default function Clients() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by Leading Traders
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Join the community of successful traders and institutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-xl p-8 flex items-center justify-center border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-cyan-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">
                    {client.logo}
                  </span>
                </div>
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  {client.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-12 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-white dark:bg-gray-900 rounded-full border border-gray-200 dark:border-gray-700">
            <Building2 className="w-6 h-6 text-blue-600 dark:text-cyan-400" />
            <span className="text-gray-900 dark:text-white font-semibold">
              Used by traders at Fortune 500 companies
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

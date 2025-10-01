import { useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const videos = [
  {
    id: 1,
    title: 'Getting Started with Options Trading',
    thumbnail: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '12:45',
  },
  {
    id: 2,
    title: 'Advanced Market Analysis Techniques',
    thumbnail: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '18:30',
  },
  {
    id: 3,
    title: 'Risk Management Strategies',
    thumbnail: 'https://images.pexels.com/photos/7567528/pexels-photo-7567528.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '15:20',
  },
  {
    id: 4,
    title: 'Technical Indicators Masterclass',
    thumbnail: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '22:15',
  },
];

export default function VideoSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Learn from Expert Traders
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Watch our comprehensive video tutorials and market insights
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {videos.map((video) => (
                <div key={video.id} className="min-w-full px-4">
                  <div className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-8 h-8 text-blue-600 ml-1" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {video.title}
                        </h3>
                        <span className="text-white/90">{video.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-3 bg-white dark:bg-gray-700 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 ml-2"
            aria-label="Previous video"
          >
            <ChevronLeft className="w-6 h-6 text-gray-900 dark:text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-3 bg-white dark:bg-gray-700 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 mr-2"
            aria-label="Next video"
          >
            <ChevronRight className="w-6 h-6 text-gray-900 dark:text-white" />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-blue-600 dark:bg-cyan-400 w-8'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Go to video ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';

interface HealthVlog {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  author: string;
  duration: string;
  views: number;
}

const healthVlogs: HealthVlog[] = [
  {
    id: '1',
    title: 'Understanding Common Cold vs. Flu',
    description: 'Learn the key differences between cold and flu symptoms, and how to treat each condition effectively.',
    thumbnailUrl: 'https://example.com/cold-vs-flu.jpg',
    videoUrl: 'https://example.com/videos/cold-vs-flu',
    author: 'Dr. Sarah Johnson',
    duration: '12:45',
    views: 15000,
  },
  {
    id: '2',
    title: 'Natural Immunity Boosters',
    description: 'Discover natural ways to strengthen your immune system through diet, exercise, and lifestyle changes.',
    thumbnailUrl: 'https://example.com/immunity.jpg',
    videoUrl: 'https://example.com/videos/immunity',
    author: 'Dr. Michael Chen',
    duration: '15:20',
    views: 22000,
  },
  {
    id: '3',
    title: 'Stress Management Techniques',
    description: 'Effective strategies to manage stress and improve your mental health through simple daily practices.',
    thumbnailUrl: 'https://example.com/stress.jpg',
    videoUrl: 'https://example.com/videos/stress',
    author: 'Dr. Emily Brown',
    duration: '18:30',
    views: 18500,
  },
];

const HealthVlogs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Health & Wellness Vlogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {healthVlogs.map((vlog) => (
            <div
              key={vlog.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
            >
              <div className="relative pb-[56.25%]">
                <img
                  src={vlog.thumbnailUrl}
                  alt={vlog.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                  {vlog.duration}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{vlog.title}</h3>
                <p className="text-gray-600 mb-4">{vlog.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{vlog.author}</span>
                  <span>{vlog.views.toLocaleString()} views</span>
                </div>
                <button
                  onClick={() => window.open(vlog.videoUrl, '_blank')}
                  className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Watch Now
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <button className="bg-blue-600 text-white py-3 px-8 rounded-md hover:bg-blue-700 transition-colors">
            Load More Videos
          </button>
        </div>
      </div>
    </div>
  );
};

export default HealthVlogs; 

import { Star, MapPin, Clock, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const featuredPlaces = [
  {
    id: 1,
    name: 'Neon Bistro',
    category: 'Restaurant',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&h=400&fit=crop&crop=center',
    location: 'Downtown',
    openNow: true,
    description: 'Modern cuisine with a cyberpunk twist'
  },
  {
    id: 2,
    name: 'Glow Beauty Salon',
    category: 'Beauty',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=400&fit=crop&crop=center',
    location: 'City Center',
    openNow: true,
    description: 'Premium beauty treatments and styling'
  },
  {
    id: 3,
    name: 'Electric Nights',
    category: 'Event',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop&crop=center',
    location: 'Music District',
    openNow: false,
    description: 'Weekly electronic music showcase'
  }
];

const Featured = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-gradient text-glow">
            Featured This Week
          </h2>
          <p className="text-xl text-white/80">
            The hottest spots everyone's talking about
          </p>
        </div>

        {/* Featured cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPlaces.map((place, index) => (
            <div
              key={place.id}
              className="card-glass overflow-hidden group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={place.image}
                  alt={place.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Status badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold ${
                  place.openNow 
                    ? 'bg-green-500 text-white' 
                    : 'bg-red-500 text-white'
                }`}>
                  {place.openNow ? 'Open Now' : 'Closed'}
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold">
                  {place.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-gradient transition-colors duration-300">
                    {place.name}
                  </h3>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star size={16} fill="currentColor" />
                    <span className="text-sm font-semibold">{place.rating}</span>
                  </div>
                </div>

                <p className="text-white/70 mb-4">{place.description}</p>

                <div className="flex items-center gap-4 text-sm text-white/60 mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    {place.location}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="btn-secondary flex-1">
                    View Details
                  </Button>
                  <Button className="btn-secondary px-3">
                    <Phone size={16} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More button */}
        <div className="text-center mt-12">
          <Button className="btn-hero">
            Discover More Amazing Places
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Featured;

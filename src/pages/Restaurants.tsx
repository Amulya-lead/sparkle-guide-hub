import { useState, useEffect } from 'react';
import { Search, Star, MapPin, Clock, Phone, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  address: string;
  phone: string;
  website: string;
  priceRange: string;
  openHours: string;
  image: string;
  description: string;
}

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('All');

  // Sample data - will be replaced with Supabase data
  useEffect(() => {
    const sampleRestaurants: Restaurant[] = [
      {
        id: '1',
        name: 'Neon Sushi',
        cuisine: 'Japanese',
        rating: 4.8,
        address: '123 Downtown Street',
        phone: '+1 (555) 123-4567',
        website: 'neonsushi.com',
        priceRange: '$$$',
        openHours: '11:00 AM - 10:00 PM',
        image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop',
        description: 'Premium sushi with a cyberpunk atmosphere'
      },
      {
        id: '2',
        name: 'Cyber Burger',
        cuisine: 'American',
        rating: 4.6,
        address: '456 Tech Avenue',
        phone: '+1 (555) 234-5678',
        website: 'cyberburger.com',
        priceRange: '$$',
        openHours: '12:00 PM - 11:00 PM',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
        description: 'Gourmet burgers in a futuristic setting'
      }
    ];
    setRestaurants(sampleRestaurants);
  }, []);

  const cuisineTypes = ['All', 'Japanese', 'American', 'Italian', 'Mexican', 'Indian', 'Thai', 'Chinese'];

  const filteredRestaurants = restaurants.filter(restaurant => {
    const matchesSearch = restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCuisine = selectedCuisine === 'All' || restaurant.cuisine === selectedCuisine;
    return matchesSearch && matchesCuisine;
  });

  return (
    <div className="min-h-screen pt-8 px-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="text-center mb-8">
          <h1 className="text-6xl md:text-7xl font-black mb-6 text-gradient text-glow">
            Restaurants
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Discover the best dining experiences in your city
          </p>
        </div>

        {/* Search and Filters */}
        <div className="card-glass p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-foreground/60" />
              <Input 
                placeholder="Search restaurants..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 bg-background/50 border-border"
              />
            </div>
            <Button className="btn-hero">
              <MapPin className="mr-2" />
              Near Me
            </Button>
          </div>

          {/* Cuisine Filter */}
          <div className="flex flex-wrap gap-2">
            {cuisineTypes.map(cuisine => (
              <Badge
                key={cuisine}
                variant={selectedCuisine === cuisine ? "default" : "secondary"}
                className={`cursor-pointer px-4 py-2 ${
                  selectedCuisine === cuisine 
                    ? 'bg-gradient-primary text-primary-foreground' 
                    : 'bg-muted hover:bg-muted/80'
                }`}
                onClick={() => setSelectedCuisine(cuisine)}
              >
                {cuisine}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRestaurants.map((restaurant, index) => (
            <div 
              key={restaurant.id}
              className="card-glass p-6 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-4">
                <img 
                  src={restaurant.image} 
                  alt={restaurant.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gradient-primary">
                    <Star className="w-3 h-3 mr-1" />
                    {restaurant.rating}
                  </Badge>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gradient mb-2">{restaurant.name}</h3>
              <p className="text-foreground/80 mb-3">{restaurant.description}</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-foreground/70">
                  <MapPin className="w-4 h-4 mr-2" />
                  {restaurant.address}
                </div>
                <div className="flex items-center text-sm text-foreground/70">
                  <Clock className="w-4 h-4 mr-2" />
                  {restaurant.openHours}
                </div>
                <div className="flex items-center text-sm text-foreground/70">
                  <Phone className="w-4 h-4 mr-2" />
                  {restaurant.phone}
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-accent">{restaurant.priceRange}</span>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Phone className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Globe className="w-4 h-4" />
                  </Button>
                  <Button size="sm" className="btn-hero">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredRestaurants.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-foreground/60">No restaurants found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Restaurants;
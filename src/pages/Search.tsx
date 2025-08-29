import { useState } from 'react';
import { Search, Filter, MapPin, Star, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface SearchResult {
  id: string;
  name: string;
  type: 'restaurant' | 'event' | 'salon' | 'service';
  rating: number;
  address: string;
  image: string;
  description: string;
  price: string;
  category: string;
}

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedRating, setSelectedRating] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [results, setResults] = useState<SearchResult[]>([]);

  // Sample search results
  const sampleResults: SearchResult[] = [
    {
      id: '1',
      name: 'Neon Sushi',
      type: 'restaurant',
      rating: 4.8,
      address: '123 Downtown Street',
      image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop',
      description: 'Premium sushi with a cyberpunk atmosphere',
      price: '$$$',
      category: 'Japanese'
    },
    {
      id: '2',
      name: 'Tech Innovation Summit',
      type: 'event',
      rating: 4.7,
      address: '456 Innovation Drive',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=300&fit=crop',
      description: 'Latest trends and innovations in technology',
      price: 'Free',
      category: 'Technology'
    },
    {
      id: '3',
      name: 'Cyber Cuts',
      type: 'salon',
      rating: 4.7,
      address: '456 Style Street',
      image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=400&h=300&fit=crop',
      description: 'Modern cuts and styling for the digital age',
      price: '$$',
      category: 'Hair Salon'
    }
  ];

  const handleSearch = () => {
    // Filter results based on search criteria
    let filtered = sampleResults.filter(result => {
      const matchesSearch = result.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           result.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           result.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesType = selectedType === 'all' || result.type === selectedType;
      
      const matchesRating = selectedRating === 'all' || 
                           (selectedRating === '4+' && result.rating >= 4) ||
                           (selectedRating === '4.5+' && result.rating >= 4.5);
      
      const matchesPrice = selectedPrice === 'all' || result.price === selectedPrice;
      
      return matchesSearch && matchesType && matchesRating && matchesPrice;
    });
    
    setResults(filtered);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'restaurant': return '🍽️';
      case 'event': return '🎉';
      case 'salon': return '✂️';
      default: return '📍';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'restaurant': return 'from-orange-400 to-red-500';
      case 'event': return 'from-blue-400 to-cyan-500';
      case 'salon': return 'from-pink-400 to-purple-500';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  return (
    <div className="min-h-screen pt-8 px-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="text-center mb-8">
          <h1 className="text-6xl md:text-7xl font-black mb-6 text-gradient text-glow">
            Search Everything
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Find restaurants, events, salons, and services all in one place
          </p>
        </div>

        {/* Advanced Search */}
        <div className="card-glass p-8 mb-8">
          {/* Main Search */}
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-foreground/60" />
              <Input 
                placeholder="Search for anything in your city..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 py-4 text-lg bg-background/50 border-border"
              />
            </div>
            <Button className="btn-hero px-8 py-4" onClick={handleSearch}>
              Search
            </Button>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-semibold text-foreground/80 mb-2">Type</label>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="bg-background/50">
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="restaurant">Restaurants</SelectItem>
                  <SelectItem value="event">Events</SelectItem>
                  <SelectItem value="salon">Salons & Spas</SelectItem>
                  <SelectItem value="service">Services</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground/80 mb-2">Rating</label>
              <Select value={selectedRating} onValueChange={setSelectedRating}>
                <SelectTrigger className="bg-background/50">
                  <SelectValue placeholder="Any Rating" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any Rating</SelectItem>
                  <SelectItem value="4+">4+ Stars</SelectItem>
                  <SelectItem value="4.5+">4.5+ Stars</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground/80 mb-2">Price</label>
              <Select value={selectedPrice} onValueChange={setSelectedPrice}>
                <SelectTrigger className="bg-background/50">
                  <SelectValue placeholder="Any Price" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any Price</SelectItem>
                  <SelectItem value="$">$ - Budget</SelectItem>
                  <SelectItem value="$$">$$ - Moderate</SelectItem>
                  <SelectItem value="$$$">$$$ - Premium</SelectItem>
                  <SelectItem value="$$$$">$$$$ - Luxury</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground/80 mb-2">Location</label>
              <Button variant="outline" className="w-full justify-start bg-background/50">
                <MapPin className="w-4 h-4 mr-2" />
                Near Me
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto">
        {results.length > 0 && (
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              {results.length} results found
            </h2>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((result, index) => (
            <div 
              key={result.id}
              className="card-glass p-6 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-4">
                <img 
                  src={result.image} 
                  alt={result.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gradient-primary">
                    <Star className="w-3 h-3 mr-1" />
                    {result.rating}
                  </Badge>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge className={`bg-gradient-to-r ${getTypeColor(result.type)}`}>
                    {getTypeIcon(result.type)} {result.type}
                  </Badge>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gradient mb-2">{result.name}</h3>
              <p className="text-foreground/80 mb-3">{result.description}</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-foreground/70">
                  <MapPin className="w-4 h-4 mr-2" />
                  {result.address}
                </div>
                <div className="flex items-center justify-between">
                  <Badge variant="outline">{result.category}</Badge>
                  <span className="text-lg font-bold text-accent">{result.price}</span>
                </div>
              </div>

              <Button className="w-full btn-hero">
                View Details
              </Button>
            </div>
          ))}
        </div>

        {searchTerm && results.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-foreground/60 mb-4">
              No results found for "{searchTerm}"
            </p>
            <p className="text-foreground/50">
              Try adjusting your search terms or filters
            </p>
          </div>
        )}

        {!searchTerm && results.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-xl text-foreground/60 mb-4">
              Start searching to find amazing places and events
            </p>
            <p className="text-foreground/50">
              Use the search bar above to discover restaurants, events, salons, and more
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
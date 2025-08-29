import { useState, useEffect } from 'react';
import { Search, Star, MapPin, Clock, Phone, Scissors, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

interface Salon {
  id: string;
  name: string;
  services: string[];
  rating: number;
  address: string;
  phone: string;
  priceRange: string;
  openHours: string;
  image: string;
  description: string;
  specialties: string[];
}

const Salons = () => {
  const [salons, setSalons] = useState<Salon[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState('All');

  // Sample data - will be replaced with Supabase data
  useEffect(() => {
    const sampleSalons: Salon[] = [
      {
        id: '1',
        name: 'Neon Glow Salon & Spa',
        services: ['Hair', 'Nails', 'Facial', 'Massage'],
        rating: 4.9,
        address: '123 Beauty Boulevard',
        phone: '+1 (555) 345-6789',
        priceRange: '$$$',
        openHours: '9:00 AM - 8:00 PM',
        image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop',
        description: 'Premium beauty services in a futuristic atmosphere',
        specialties: ['Color Correction', 'Bridal Makeup', 'Extensions']
      },
      {
        id: '2',
        name: 'Cyber Cuts',
        services: ['Hair', 'Beard', 'Styling'],
        rating: 4.7,
        address: '456 Style Street',
        phone: '+1 (555) 456-7890',
        priceRange: '$$',
        openHours: '10:00 AM - 7:00 PM',
        image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=400&h=300&fit=crop',
        description: 'Modern cuts and styling for the digital age',
        specialties: ['Fades', 'Beard Design', 'Hair Art']
      }
    ];
    setSalons(sampleSalons);
  }, []);

  const serviceTypes = ['All', 'Hair', 'Nails', 'Facial', 'Massage', 'Makeup', 'Waxing', 'Beard'];

  const filteredSalons = salons.filter(salon => {
    const matchesSearch = salon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         salon.services.some(service => service.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesService = selectedService === 'All' || salon.services.includes(selectedService);
    return matchesSearch && matchesService;
  });

  return (
    <div className="min-h-screen pt-8 px-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="text-center mb-8">
          <h1 className="text-6xl md:text-7xl font-black mb-6 text-gradient text-glow">
            Salons & Spas
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Transform your look with the best beauty services in the city
          </p>
        </div>

        {/* Search and Filters */}
        <div className="card-glass p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-foreground/60" />
              <Input 
                placeholder="Search salons and spas..."
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

          {/* Service Filter */}
          <div className="flex flex-wrap gap-2">
            {serviceTypes.map(service => (
              <Badge
                key={service}
                variant={selectedService === service ? "default" : "secondary"}
                className={`cursor-pointer px-4 py-2 ${
                  selectedService === service 
                    ? 'bg-gradient-primary text-primary-foreground' 
                    : 'bg-muted hover:bg-muted/80'
                }`}
                onClick={() => setSelectedService(service)}
              >
                {service}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSalons.map((salon, index) => (
            <div 
              key={salon.id}
              className="card-glass p-6 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-4">
                <img 
                  src={salon.image} 
                  alt={salon.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gradient-primary">
                    <Star className="w-3 h-3 mr-1" />
                    {salon.rating}
                  </Badge>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gradient mb-2">{salon.name}</h3>
              <p className="text-foreground/80 mb-3">{salon.description}</p>
              
              {/* Services */}
              <div className="mb-3">
                <div className="flex flex-wrap gap-1">
                  {salon.services.map(service => (
                    <Badge key={service} variant="outline" className="text-xs">
                      {service}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Specialties */}
              <div className="mb-4">
                <p className="text-sm font-semibold text-accent mb-1">Specialties:</p>
                <div className="flex flex-wrap gap-1">
                  {salon.specialties.map(specialty => (
                    <Badge key={specialty} className="bg-gradient-secondary text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-foreground/70">
                  <MapPin className="w-4 h-4 mr-2" />
                  {salon.address}
                </div>
                <div className="flex items-center text-sm text-foreground/70">
                  <Clock className="w-4 h-4 mr-2" />
                  {salon.openHours}
                </div>
                <div className="flex items-center text-sm text-foreground/70">
                  <Phone className="w-4 h-4 mr-2" />
                  {salon.phone}
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-accent">{salon.priceRange}</span>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Phone className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button size="sm" className="btn-hero">
                    <Scissors className="w-4 h-4 mr-1" />
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredSalons.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-foreground/60">No salons found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Salons;
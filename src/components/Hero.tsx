
import { Search, MapPin, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Hero = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate('/search');
    }
  };

  const handleExplore = () => navigate('/search');
  const handleFindNearMe = () => navigate('/search?location=near-me');
  const handleWhatsOpen = () => navigate('/search?filter=open-now');
  const handleTopRated = () => navigate('/search?sort=rating');

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-secondary/30 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-accent/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Main heading */}
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-black mb-6 text-gradient text-glow">
            Your City
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
            All in One Place
          </h2>
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/80 mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Discover restaurants, salons, events, and everything your city has to offer
        </p>

        {/* Search bar */}
        <div className="card-glass p-6 mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60" />
              <Input 
                placeholder="Search for anything in your city..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                className="pl-12 py-4 text-lg bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
            </div>
            <Button className="btn-hero px-8 py-4" onClick={handleExplore}>
              Explore
            </Button>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Button className="btn-hero" onClick={handleFindNearMe}>
            <MapPin className="mr-2" />
            Find Near Me
          </Button>
          <Button className="btn-secondary" onClick={handleWhatsOpen}>
            <Clock className="mr-2" />
            What's Open Now
          </Button>
          <Button className="btn-secondary" onClick={handleTopRated}>
            <Star className="mr-2" />
            Top Rated
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="card-glass p-6">
            <div className="text-3xl font-bold text-gradient">500+</div>
            <div className="text-white/80">Restaurants</div>
          </div>
          <div className="card-glass p-6">
            <div className="text-3xl font-bold text-gradient">200+</div>
            <div className="text-white/80">Services</div>
          </div>
          <div className="card-glass p-6">
            <div className="text-3xl font-bold text-gradient">50+</div>
            <div className="text-white/80">Events Daily</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

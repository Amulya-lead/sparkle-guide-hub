
import { 
  Utensils, 
  Scissors, 
  Calendar, 
  ShoppingBag, 
  Dumbbell, 
  Music, 
  Car, 
  Heart,
  Coffee,
  Camera,
  Gamepad2,
  Stethoscope
} from 'lucide-react';

const categories = [
  { name: 'Restaurants', icon: Utensils, color: 'from-orange-400 to-red-500' },
  { name: 'Salons & Spas', icon: Scissors, color: 'from-pink-400 to-purple-500' },
  { name: 'Events', icon: Calendar, color: 'from-blue-400 to-cyan-500' },
  { name: 'Shopping', icon: ShoppingBag, color: 'from-green-400 to-teal-500' },
  { name: 'Fitness', icon: Dumbbell, color: 'from-yellow-400 to-orange-500' },
  { name: 'Nightlife', icon: Music, color: 'from-purple-400 to-pink-500' },
  { name: 'Automotive', icon: Car, color: 'from-gray-400 to-gray-600' },
  { name: 'Beauty', icon: Heart, color: 'from-rose-400 to-pink-500' },
  { name: 'Cafes', icon: Coffee, color: 'from-amber-400 to-orange-500' },
  { name: 'Photography', icon: Camera, color: 'from-indigo-400 to-purple-500' },
  { name: 'Gaming', icon: Gamepad2, color: 'from-cyan-400 to-blue-500' },
  { name: 'Healthcare', icon: Stethoscope, color: 'from-emerald-400 to-teal-500' }
];

const Categories = () => {
  return (
    <section className="py-20 px-4 relative">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-gradient text-glow">
            Explore Everything
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            From A to Z, find everything your city has to offer in one amazing place
          </p>
        </div>

        {/* Categories grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.name}
                className="card-category group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${category.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={32} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gradient transition-colors duration-300">
                    {category.name}
                  </h3>
                  <div className="w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Hover shimmer effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 animate-shimmer transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="btn-hero group">
            View All Categories
            <div className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;

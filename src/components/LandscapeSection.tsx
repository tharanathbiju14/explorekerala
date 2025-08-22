
import { Link } from 'react-router-dom';
import { Waves, Mountain, Ship, Trees, Building2 } from 'lucide-react';

const LandscapeSection = () => {
  const landscapes = [
    {
      id: 1,
      name: "beaches",
      title: "Beaches",
      subtitle: "Pristine coastal resorts",
      icon: Waves,
      color: "bg-blue-100 text-blue-600",
      hoverColor: "hover:bg-blue-200"
    },
    {
      id: 2,
      name: "mountains",
      title: "Mountains",
      subtitle: "Hill station retreats",
      icon: Mountain,
      color: "bg-green-100 text-green-600",
      hoverColor: "hover:bg-green-200"
    },
    {
      id: 3,
      name: "backwaters",
      title: "Backwaters",
      subtitle: "Serene waterway stays",
      icon: Ship,
      color: "bg-cyan-100 text-cyan-600",
      hoverColor: "hover:bg-cyan-200"
    },
    {
      id: 4,
      name: "forests",
      title: "Forests",
      subtitle: "Wildlife safari lodges",
      icon: Trees,
      color: "bg-emerald-100 text-emerald-600",
      hoverColor: "hover:bg-emerald-200"
    },
    {
      id: 5,
      name: "cities",
      title: "Cities",
      subtitle: "Urban luxury hotels",
      icon: Building2,
      color: "bg-purple-100 text-purple-600",
      hoverColor: "hover:bg-purple-200"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-lg sm:text-4xl md:text-5xl font-bold text-gray-800 mb-2 sm:mb-4">
            Find Hotels by Landscape
          </h2>
          <p className="text-sm md:text-xl text-gray-600 max-w-2xl mx-auto">
            Choose your perfect Kerala experience
          </p>
        </div>

        {/* Responsive layout: horizontal circles on mobile, grid on desktop */}
        <div className="flex flex-row gap-4 justify-center md:grid md:grid-cols-3 lg:grid-cols-5 md:gap-8">
          {landscapes.map((landscape) => {
            const IconComponent = landscape.icon;
            return (
              <Link
                to={`/hotels?landscape=${landscape.name}`}
                key={landscape.id}
                className={`
                  ${landscape.color} ${landscape.hoverColor}
                  flex flex-col items-center justify-center
                  rounded-full w-16 h-16
                  md:rounded-xl md:w-auto md:h-auto md:p-8
                  cursor-pointer transition-all duration-300
                  hover:scale-105 hover:shadow-lg
                  p-0
                `}
              >
                <IconComponent className="h-8 w-8 md:h-12 md:w-12" />
                {/* Show title always, subtitle only on md+ */}
                <div className="text-center mt-1">
                  <h3 className="text-[8px] font-semibold md:text-xl md:mb-2">{landscape.title}</h3>
                  <p className="hidden md:block text-xs opacity-80">{landscape.subtitle}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LandscapeSection;
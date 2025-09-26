import React from 'react';
import { Palmtree as PalmTree, Heart, Award, Users, Globe } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { icon: Users, label: 'Happy Guests', value: '100+' },
    { icon: Globe, label: 'Properties', value: '100+' },
    // { icon: Award, label: 'Awards Won', value: '25+' },
    { icon: Heart, label: 'Years Experience', value: '1+' }
  ];

  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Passionate about Kerala tourism with 20+ years of experience in hospitality.'
    },
    {
      name: 'Priya Nair',
      role: 'Head of Operations',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Ensures every guest experience exceeds expectations across all our properties.'
    },
    {
      name: 'Arjun Menon',
      role: 'Customer Experience Manager',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Dedicated to creating memorable experiences for every Explorekerala guest.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <PalmTree className="h-12 w-12" />
            <h1 className="text-5xl font-bold">About Explorekerala</h1>
          </div>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Your trusted partner in discovering the authentic beauty of God's Own Country through 
            exceptional hospitality and unforgettable experiences.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2025, Explorekerala began as a small family business with a simple dream: 
                  to share the incredible beauty and rich culture of Kerala with travelers from around the world.
                </p>
                <p>
                  What started with just three properties has grown into a network of over 200 carefully 
                  curated accommodations across all 14 districts of Kerala. From luxury beach resorts 
                  to cozy mountain retreats, traditional houseboats to heritage homes, we offer authentic 
                  experiences that showcase the diverse landscapes and warm hospitality Kerala is famous for.
                </p>
                <p>
                  Our commitment to sustainable tourism and supporting local communities has made us 
                  a trusted name in Kerala's hospitality industry. We believe that travel should not 
                  only create memories but also contribute positively to the destinations we love.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Kerala backwaters"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">1+</div>
                  <div className="text-gray-600">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Our Impact in Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-items-center">
            {stats.map((stat) => {
              const IconComponent = stat.icon;
              return (
                <div key={stat.label} className="text-center w-full">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide exceptional hospitality experiences that showcase the authentic beauty, 
                culture, and traditions of Kerala while supporting local communities and promoting 
                sustainable tourism practices. We strive to create lasting memories for our guests 
                while preserving the natural and cultural heritage of God's Own Country.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be Kerala's most trusted and beloved hospitality brand, recognized for our 
                commitment to excellence, sustainability, and authentic experiences. We envision 
                a future where every traveler to Kerala can discover the true essence of this 
                magnificent state through our carefully curated accommodations and services.
              </p>
            </div>
          </div>
        </div>
      </section>

      Team
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                <div className="text-green-600 font-medium mb-4">{member.role}</div>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Values */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Authentic Hospitality</h3>
              <p className="text-gray-600">
                We believe in genuine, warm hospitality that reflects the true spirit of Kerala's culture and traditions.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Sustainability</h3>
              <p className="text-gray-600">
                We are committed to responsible tourism that protects Kerala's natural beauty for future generations.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We continuously strive for excellence in every aspect of our service and guest experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
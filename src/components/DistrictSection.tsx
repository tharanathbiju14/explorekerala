import React from 'react';
import kollamImg from '../images/kollam.jpg';
import kasargodImg from '../images/1-Kasaragod.jpg';
import thiruvananthapuramImg from '../images/amzing-places-to-visit-thiruvananthapuram.jpg';
import alleppeyImg from '../images/Best-Places-to-Visit-in-Alleppey.jpg';
import fortKochiImg from '../images/fort-kochi-courtyard-hotel-1024x.jpg';
import kottayamImg from '../images/kottayam.jpg';
import kozhikodeImg from '../images/kozhikode.jpg';
import thrissurImg from '../images/one-day-thrissur-sightseeing-tou.jpg';
import palakkadImg from '../images/palakkad.jpg';
import pathanamthittaImg from '../images/pathanamthitta.jpg';
import pexelsGodsonImg from '../images/pexels-godson-bright-352845-962464.jpg';
import pexelsNandhukumarImg from '../images/pexels-nandhukumar-1065753.jpg';
import pexelsStijnImg from '../images/pexels-stijn-dijkstra-1306815-29988777.jpg';
import kannurImg from '../images/places-to-visit-in-kannur-shutte.jpg';
import malappuramImg from '../images/thirunavaya_malappuram2023010514.jpg';
import wayanadImg from '../images/waynadu-1024x768.jpg';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const DistrictSection = () => {
  const districts = [
    { name: "Thiruvananthapuram", slug: "thiruvananthapuram", image: thiruvananthapuramImg },
  { name: "Kollam", slug: "kollam", image: kollamImg },
    { name: "Pathanamthitta", slug: "pathanamthitta", image: pathanamthittaImg },
    { name: "Alappuzha", slug: "alappuzha", image: alleppeyImg },
    { name: "Kottayam", slug: "kottayam", image: kottayamImg },
    { name: "Idukki", slug: "idukki", image: pexelsNandhukumarImg },
    { name: "Ernakulam", slug: "ernakulam", image: fortKochiImg },
    { name: "Thrissur", slug: "thrissur", image: thrissurImg },
    { name: "Palakkad", slug: "palakkad", image: palakkadImg },
    { name: "Malappuram", slug: "malappuram", image: malappuramImg },
    { name: "Kozhikode", slug: "kozhikode", image: kozhikodeImg },
    { name: "Wayanad", slug: "wayanad", image: wayanadImg },
    { name: "Kannur", slug: "kannur", image: kannurImg },
    { name: "Kasaragod", slug: "kasaragod", image: kasargodImg }
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-lg sm:text-4xl md:text-5xl font-bold text-gray-800 mb-2 sm:mb-4">
            Explore by District
          </h2>
          <p className="text-sm md:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover handpicked stays in all 14 districts of Kerala
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6">
          {districts.map((district) => (
            <Link
              to={`/hotels?district=${district.slug}`}
              key={district.name}
              className="relative group cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <img
                src={district.image}
                alt={district.name}
                className="w-full h-16 object-cover group-hover:scale-110 transition-transform duration-300 md:h-48"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-1 md:bottom-4 md:left-4 md:right-4 md:items-start md:justify-end">
                <div className="flex items-center space-x-1 mb-0 md:space-x-2 md:mb-2">
                  {/* <MapPin className="h-2 w-2 md:h-4 md:w-4" /> */}
                  {/* <span className="text-[8px] opacity-90 md:text-sm">District</span> */}
                </div>
                <h3 className="text-[8px] font-semibold mb-0 text-center md:text-xl md:mb-2">{district.name}</h3>
                <span className="bg-green-600 hover:bg-green-700 text-white px-1 py-[2px] rounded-lg text-[8px] transition-colors duration-200 opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 inline-block md:px-4 md:py-2 md:text-sm">
                  View Hotels
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DistrictSection;
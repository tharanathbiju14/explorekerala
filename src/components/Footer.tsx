
import { Palmtree as PalmTree, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const quickLinks = ['Home', 'Explore', 'About', 'Contact'];
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-2 py-8 sm:px-4 sm:py-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
          {/* Logo & Description */}
          <div className="space-y-2 sm:space-y-4">
            <div className="flex items-center space-x-2">
              <PalmTree className="h-6 w-6 sm:h-8 sm:w-8 text-green-500" />
              <span className="text-lg sm:text-2xl font-bold">KeralaStay</span>
            </div>
            <p className="text-gray-300 text-xs sm:text-base leading-relaxed">
              Your gateway to experiencing the beauty of God's Own Country through exceptional hospitality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-4">Quick Links</h3>
            <ul className="space-y-1 sm:space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-300 text-xs sm:text-base hover:text-green-400 transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-4">Contact Info</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                <span className="text-gray-300 text-xs sm:text-base">+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                <span className="text-gray-300 text-xs sm:text-base">info@keralastay.com</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                <span className="text-gray-300 text-xs sm:text-base">Kochi, Kerala, India</span>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-4">Follow Us</h3>
            <div className="flex space-x-2 sm:space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="bg-gray-700 hover:bg-green-600 p-2 sm:p-3 rounded-full transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-4 sm:mt-12 sm:pt-8 text-center">
          <p className="text-gray-400 text-xs sm:text-base">
            © 2025 KeralaStay. All rights reserved. |{' '}
            <a href="#" className="hover:text-green-400 transition-colors duration-200">
              Privacy Policy
            </a>{' '}
            |{' '}
            <a href="#" className="hover:text-green-400 transition-colors duration-200">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
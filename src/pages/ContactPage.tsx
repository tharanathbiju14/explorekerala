import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a server
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 9876543210', '+91 9876543211'],
      description: 'Call us for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@keralastay.com', 'bookings@keralastay.com'],
      description: 'Send us your queries anytime'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Marine Drive, Kochi', 'Kerala, India 682031'],
      description: 'Visit our main office'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Sat: 9:00 AM - 8:00 PM', 'Sun: 10:00 AM - 6:00 PM'],
      description: 'We are here to help'
    }
  ];

  const offices = [
    {
      city: 'Kochi',
      address: 'Marine Drive, Ernakulam, Kochi, Kerala 682031',
      phone: '+91 9876543210',
      email: 'kochi@keralastay.com'
    },
    {
      city: 'Thiruvananthapuram',
      address: 'MG Road, Thiruvananthapuram, Kerala 695001',
      phone: '+91 9876543211',
      email: 'tvm@keralastay.com'
    },
    {
      city: 'Kozhikode',
      address: 'SM Street, Kozhikode, Kerala 673001',
      phone: '+91 9876543212',
      email: 'kozhikode@keralastay.com'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Have questions about your Kerala adventure? We're here to help you plan the perfect stay.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info) => {
              const IconComponent = info.icon;
              return (
                <div key={info.title} className="bg-white rounded-xl shadow-lg p-8 text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">{info.title}</h3>
                  <div className="space-y-1 mb-4">
                    {info.details.map((detail, index) => (
                      <div key={index} className="text-gray-600">{detail}</div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500">{info.description}</p>
                </div>
              );
            })}
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="+91 9876543210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="booking">Booking Inquiry</option>
                      <option value="support">Customer Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Map and Office Locations */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Find Us</h3>
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="h-12 w-12 mx-auto mb-4" />
                    <p>Interactive Map</p>
                    <p className="text-sm">Marine Drive, Kochi, Kerala</p>
                  </div>
                </div>
              </div>

              {/* Office Locations */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Our Offices</h3>
                <div className="space-y-6">
                  {offices.map((office) => (
                    <div key={office.city} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <h4 className="font-semibold text-gray-800 mb-2">{office.city}</h4>
                      <div className="space-y-1 text-sm text-gray-600">
                        <div className="flex items-start space-x-2">
                          <MapPin className="h-4 w-4 mt-0.5 text-gray-400" />
                          <span>{office.address}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-gray-400" />
                          <span>{office.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-gray-400" />
                          <span>{office.email}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">How do I make a booking?</h3>
                <p className="text-gray-600 text-sm">
                  You can book directly through our website, call our booking hotline, or visit any of our offices.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">What is your cancellation policy?</h3>
                <p className="text-gray-600 text-sm">
                  Cancellation policies vary by property. Most offer free cancellation up to 24-48 hours before check-in.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Do you offer group discounts?</h3>
                <p className="text-gray-600 text-sm">
                  Yes, we offer special rates for groups of 10 or more. Contact us for customized packages.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Are pets allowed?</h3>
                <p className="text-gray-600 text-sm">
                  Pet policies vary by property. Please check individual hotel details or contact us for pet-friendly options.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Do you provide airport transfers?</h3>
                <p className="text-gray-600 text-sm">
                  Many of our properties offer airport transfer services. This can be arranged during booking or by contacting the hotel directly.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-600 text-sm">
                  We accept all major credit cards, debit cards, UPI, and bank transfers for online bookings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
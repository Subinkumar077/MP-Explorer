import React, { useState, useEffect } from 'react';
import { Destination } from '../data/destinations';
import { 
  MapPin, 
  Clock, 
  Calendar, 
  DollarSign, 
  Star, 
  X 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface DestinationDetailProps {
  destination: Destination;
  onClose: () => void;
}

const DestinationDetail: React.FC<DestinationDetailProps> = ({ destination, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'details' | 'reviews'>('overview');

  const renderDetailSection = () => {
    switch(activeTab) {
      case 'overview':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <p className="text-gray-600 leading-relaxed">{destination.description}</p>
            <div className="grid md:grid-cols-2 gap-4 bg-gray-50 p-6 rounded-lg">
              {[
                { icon: <MapPin className="text-blue-500" />, label: 'Location', value: destination.location },
                { icon: <Clock className="text-green-500" />, label: 'Opening Hours', value: destination.openingHours },
                { icon: <Calendar className="text-purple-500" />, label: 'Best Time to Visit', value: destination.bestTime },
                { icon: <DollarSign className="text-indigo-500" />, label: 'Entry Fee', value: destination.entryFee }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  {item.icon}
                  <div>
                    <h4 className="font-semibold text-gray-800">{item.label}</h4>
                    <p className="text-gray-600">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        );
      case 'details':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <h4 className="text-xl font-semibold text-gray-800">Cultural and Historical Significance</h4>
            <p className="text-gray-600 leading-relaxed">
              {destination.name} represents a profound blend of cultural heritage and historical importance. 
              Its unique architectural style and deep-rooted historical context make it a remarkable destination 
              for travelers seeking immersive experiences.
            </p>
            {destination.category && (
              <div className="flex items-center space-x-2">
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full">
                  {destination.category} Site
                </span>
              </div>
            )}
          </motion.div>
        );
      case 'reviews':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Star className="text-yellow-500" fill="currentColor" />
                <span className="text-xl font-bold">{destination.rating}/5</span>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your full name"
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your email"
                      required 
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="rating" className="block mb-2 text-sm font-medium text-gray-700">Rating</label>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <button 
                        key={num} 
                        type="button" 
                        className="text-2xl text-gray-300 hover:text-yellow-500 focus:outline-none"
                      >
                        <Star fill="currentColor" />
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label htmlFor="review" className="block mb-2 text-sm font-medium text-gray-700">Your Review</label>
                  <textarea 
                    id="review" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={4}
                    placeholder="Share your experience..."
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 text-white py-2.5 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Submit Review
                </button>
              </form>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 overflow-y-auto bg-black/50 flex items-center justify-center p-4"
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl max-h-[90vh] overflow-y-auto"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/40 rounded-full p-2 transition-all duration-300 ease-in-out group"
        >
          <X 
            size={24} 
            className="text-white group-hover:scale-110 transition-transform" 
          />
        </button>

        <div className="relative h-96 overflow-hidden">
          <img 
            src={destination.image} 
            alt={destination.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <h2 className="text-4xl font-bold text-white">{destination.name}</h2>
          </div>
        </div>

        <div className="p-8">
          <div className="flex border-b mb-6">
            {[
              { label: 'Overview', key: 'overview' },
              { label: 'Details', key: 'details' },
              { label: 'Reviews', key: 'reviews' }
            ].map(tab => (
              <motion.button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 ${
                  activeTab === tab.key 
                    ? 'border-b-2 border-blue-600 text-blue-600' 
                    : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>

          {renderDetailSection()}
        </div>
      </motion.div>
    </motion.div>
  );
};


export const InsightsSection: React.FC<{ destinations: Destination[] }> = ({ destinations }) => {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  

  // Filter destinations based on selected category
  const filteredDestinations = selectedCategory
    ? destinations.filter((destination) => destination.category === selectedCategory)
    : destinations;

  // Get unique categories from destinations
  const categories = [
    ...new Set(destinations.map((destination) => destination.category))
  ];

  return (
    <div className="container mx-auto px-4 pt-16 md:pt-24 lg:pt-32">  {/* Added padding and px-4 for responsive spacing */}
      <h2 className="text-4xl font-bold text-center mb-12">Explore Destinations</h2>
      
      {/* Category Filter Buttons */}
      <div className="flex justify-center space-x-4 mb-8">
        <motion.button
          onClick={() => setSelectedCategory(null)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-4 py-2 rounded-full capitalize ${
            selectedCategory === null
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          All
        </motion.button>
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-full capitalize ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            {category}
          </motion.button>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredDestinations.map((destination) => (
          <motion.div 
            key={destination.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden group"
          >
            <div className="relative h-56 overflow-hidden">
              <img 
                src={destination.image} 
                alt={destination.name} 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-xl font-semibold text-white">{destination.name}</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 line-clamp-3 mb-4">{destination.description}</p>
              <div className="flex justify-between items-center">
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
                  {destination.category}
                </span>
                <div className="flex items-center space-x-1">
                  <Star className="text-yellow-500" fill="currentColor" size={18} />
                  <span className="text-gray-700">{destination.rating}/5</span>
                </div>
              </div>
              <button 
                onClick={() => setSelectedDestination(destination)}
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                View More Details
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedDestination && (
          <DestinationDetail 
            destination={selectedDestination} 
            onClose={() => setSelectedDestination(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};
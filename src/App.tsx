import React, { useState } from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { ImageSlider } from './components/ImageSlider';
import { DestinationCard } from './components/DestinationCard';
import { Footer } from './components/Footer';
import { ExploreSection } from './components/ExploreSection';
import { AboutSection } from './components/AboutSection';
import { InsightsSection } from './components/InsightsSection';
import { ContactSection } from './components/ContactSection';
import { destinations } from './data/destinations';

function App() {
  const [searchResults, setSearchResults] = useState(destinations);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState('home');
  // New state to track selected destination
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  const handleSearch = (query: string) => {
    const filtered = destinations.filter(
      (dest) =>
        dest.name.toLowerCase().includes(query.toLowerCase()) ||
        dest.description.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filtered);
    setActiveSection('insights');
  };

  const filterByCategory = (category: string | null) => {
    setSelectedCategory(category);
    if (category) {
      setSearchResults(destinations.filter((dest) => dest.category === category));
    } else {
      setSearchResults(destinations);
    }
  };

  // New method to handle destination selection
  const handleDestinationSelect = (destination: Destination) => {
    setSelectedDestination(destination);
    setActiveSection('destinationDetail'); // Add a new section for destination details
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'explore':
        return <ExploreSection destinations={destinations} />;
      case 'about':
        return <AboutSection />;
      case 'insights':
        return <InsightsSection destinations={searchResults} />;
      case 'contact':
        return <ContactSection />;
      case 'destinationDetail':
        // You'll need to create a DestinationDetailPage component
        return selectedDestination ? (
          <div className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold mb-6">{selectedDestination.name}</h2>
            <img 
              src={selectedDestination.image} 
              alt={selectedDestination.name} 
              className="w-full h-96 object-cover rounded-lg mb-6"
            />
            <p>{selectedDestination.description}</p>
            {/* Add more details as needed */}
          </div>
        ) : null;
      default:
        return (
          <>
            <div className="relative h-screen">
              <ImageSlider />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-4 drop-shadow-lg">
                  Discover Madhya Pradesh
                </h1>
                <p className="text-xl text-white text-center mb-8 max-w-2xl">
                  Explore the heart of India's most beautiful destinations, from ancient temples to wildlife sanctuaries.
                </p>
                <SearchBar onSearch={handleSearch} />
              </div>
            </div>

            <div className="container mx-auto px-4 py-16">
              <div className="flex flex-wrap gap-4 mb-8">
                <button
                  onClick={() => filterByCategory(null)}
                  className={`px-4 py-2 rounded-full ${
                    selectedCategory === null
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  All
                </button>
                {['historical', 'natural', 'religious', 'cultural', 'adventures'].map(
                  (category) => (
                    <button
                      key={category}
                      onClick={() => filterByCategory(category)}
                      className={`px-4 py-2 rounded-full capitalize ${
                        selectedCategory === category
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      {category}
                    </button>
                  )
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {searchResults.map((destination) => (
                  <DestinationCard 
                    key={destination.id} 
                    destination={destination} 
                    // Pass the selection handler
                    onClick={() => handleDestinationSelect(destination)}
                  />
                ))}
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header onNavChange={setActiveSection} activeSection={activeSection} />
      {renderSection()}
      <Footer />
    </div>
  );
}

export default App;
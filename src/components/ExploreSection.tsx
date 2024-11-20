import React, { useState } from 'react';
import type { Destination } from '../data/destinations';
import { DestinationCard } from './DestinationCard';

interface ExploreSectionProps {
  destinations: Destination[];
}

export function ExploreSection({ destinations }: ExploreSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filterByCategory = (category: string | null) => {
    setSelectedCategory(category);
  };

  const filteredDestinations = selectedCategory
    ? destinations.filter((destination) => destination.category === selectedCategory)
    : destinations;

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Explore Destinations</h2>
        <div className="flex justify-center space-x-4 mb-8">
          {/* "All" Button Appears First */}
          <button
            onClick={() => filterByCategory(null)}
            className={`px-4 py-2 rounded-full capitalize ${
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
          {filteredDestinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </div>
    </div>
  );
}

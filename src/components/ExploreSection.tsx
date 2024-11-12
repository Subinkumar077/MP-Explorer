import React from 'react';
import type { Destination } from '../data/destinations';
import { DestinationCard } from './DestinationCard';

interface ExploreSectionProps {
  destinations: Destination[];
}

export function ExploreSection({ destinations }: ExploreSectionProps) {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Explore Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </div>
    </div>
  );
}
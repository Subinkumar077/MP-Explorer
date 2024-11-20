import React from 'react';
import { Clock, IndianRupee, Calendar } from 'lucide-react';
import type { Destination } from '../data/destinations';

interface DestinationCardProps {
  destination: Destination;
}

export function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
      {/* Image with hover zoom effect */}
      <img
        src={destination.image}
        alt={destination.name}
        className="w-full h-64 object-cover rounded-lg transition-transform duration-300 transform group-hover:scale-110"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
        <p className="text-gray-600 mb-4">{destination.description}</p>
        
        <div className="space-y-2 text-sm text-gray-500">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            {destination.openingHours}
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            Best time: {destination.bestTime}
          </div>
          <div className="flex items-center">
            <IndianRupee className="w-4 h-4 mr-2" />
            Entry: {destination.entryFee}
          </div>
        </div>

        <div className="mt-4 pt-4 border-t">
          <div className="text-sm text-gray-500">Location:</div>
          <div className="font-medium">{destination.location}</div>
        </div>
      </div>
    </div>
  );
}

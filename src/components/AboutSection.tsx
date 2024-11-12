import React from 'react';
import { Map, Compass, Heart } from 'lucide-react';

export function AboutSection() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">About MP Explorer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-6">
            <Map className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To showcase the rich cultural heritage and natural beauty of Madhya Pradesh to the world.
            </p>
          </div>
          <div className="text-center p-6">
            <Compass className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To become the ultimate guide for travelers exploring the heart of India.
            </p>
          </div>
          <div className="text-center p-6">
            <Heart className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Our Values</h3>
            <p className="text-gray-600">
              Authenticity, sustainability, and preservation of cultural heritage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
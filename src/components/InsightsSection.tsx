import React, { useState, useMemo } from 'react';
import { Destination } from '../data/destinations';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Ensure Destination interface is compatible if needed
interface DestinationInterface {
  id: number;
  name: string;
  image: string;
  description: string;
  location: string;
  openingHours: string;
  bestTime: string;
  entryFee: string;
  rating: number;
  category: string;
}

interface InsightsSectionProps {
  destinations: Destination[];
}

export const InsightsSection: React.FC<InsightsSectionProps> = ({ destinations }) => {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [review, setReview] = useState({
    name: '',
    email: '',
    rating: 5,
    comment: ''
  });

  const getDestinationImages = (destination: Destination) => [
    destination.image,
    destination.image.replace(/\.jpg/, '_1.jpg'),
    destination.image.replace(/\.jpg/, '_2.jpg')
  ];

  const handleNextImage = () => {
    if (selectedDestination) {
      const images = getDestinationImages(selectedDestination);
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % images.length
      );
    }
  };

  const handlePrevImage = () => {
    if (selectedDestination) {
      const images = getDestinationImages(selectedDestination);
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };

  const handleReviewChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setReview(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Review submitted:', review);
    alert('Thank you for your review!');
    setReview({
      name: '',
      email: '',
      rating: 5,
      comment: ''
    });
  };

  React.useEffect(() => {
    setCurrentImageIndex(0);
  }, [selectedDestination]);

  return (
    <div id="insights-section" className="container mx-auto px-4 py-16 bg-gray-50">
      {selectedDestination ? (
        <div className="space-y-12">
          <div className="relative w-full h-[500px] overflow-hidden rounded-xl shadow-lg">
            {getDestinationImages(selectedDestination).map((image, index) => (
              <img 
                key={index}
                src={image}
                alt={`${selectedDestination.name} view ${index + 1}`}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
            
            <button 
              onClick={handlePrevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 rounded-full p-2 hover:bg-white/75 transition"
            >
              <ChevronLeft className="text-gray-800" />
            </button>
            <button 
              onClick={handleNextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 rounded-full p-2 hover:bg-white/75 transition"
            >
              <ChevronRight className="text-gray-800" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8 bg-white rounded-xl shadow-lg p-8">
            <div>
              <div className="mb-6">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">{selectedDestination.name}</h2>
                <div className="flex items-center mb-4">
                  <span className="text-yellow-500 text-2xl mr-2">★</span>
                  <span className="text-xl font-semibold">{selectedDestination.rating}/5</span>
                </div>
              </div>

              <div className="prose max-w-none">
                <h3 className="text-2xl font-semibold mb-4">About the Destination</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {selectedDestination.description}
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 bg-gray-100 p-4 rounded-lg">
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p>{selectedDestination.location}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Opening Hours</h4>
                    <p>{selectedDestination.openingHours}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Best Time to Visit</h4>
                    <p>{selectedDestination.bestTime}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Entry Fee</h4>
                    <p>{selectedDestination.entryFee}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="prose max-w-none">
              <h3 className="text-2xl font-semibold mb-4">Additional Details</h3>
              <p className="text-gray-700 leading-relaxed">
                Explore the rich history, stunning architecture, and cultural significance of {selectedDestination.name}. 
                This destination offers a unique blend of natural beauty and historical importance, 
                making it a must-visit location for travelers seeking an immersive experience.
              </p>
            </div>
          </div>

          {/* Review Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6">Write a Review</h3>
            <form onSubmit={handleSubmitReview} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={review.name}
                  onChange={handleReviewChange}
                  required
                  className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={review.email}
                  onChange={handleReviewChange}
                  required
                  className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="rating" className="block mb-2">Rating</label>
                <select
                  id="rating"
                  name="rating"
                  value={review.rating}
                  onChange={handleReviewChange}
                  className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                >
                  {[5, 4, 3, 2, 1].map(num => (
                    <option key={num} value={num}>{num} Stars</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="comment" className="block mb-2">Your Review</label>
                <textarea
                  id="comment"
                  name="comment"
                  value={review.comment}
                  onChange={handleReviewChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                  placeholder="Share your experience..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div 
              key={destination.id} 
              className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-xl transition-all"
              onClick={() => setSelectedDestination(destination)}
            >
              <img 
                src={destination.image} 
                alt={destination.name} 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
              <p className="mb-4 text-gray-600 line-clamp-3">{destination.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-blue-600 font-medium">{destination.category}</span>
                <span className="flex items-center">
                  <span className="text-yellow-500 mr-1">★</span>
                  {destination.rating}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
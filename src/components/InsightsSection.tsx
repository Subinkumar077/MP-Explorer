import React from 'react';

export function InsightsSection() {
  const insights = [
    {
      title: "Best Time to Visit Khajuraho",
      image: "https://www.swantour.com/blogs/wp-content/uploads/2018/03/Vishvanath-Temple-of-Khajuraho.jpg",
      content: "Learn about the ideal seasons to explore the magnificent temples of Khajuraho."
    },
    {
      title: "Wildlife Safari Guide",
      image: "https://www.bandhavgarh-national-park.com/images/safaribanner.jpg",
      content: "Essential tips for planning your wildlife safari in Bandhavgarh National Park."
    },
    {
      title: "Cultural Heritage",
      image: "https://media.istockphoto.com/id/519472109/photo/great-stupa-sanchi-madhya-pradesh-india.jpg",
      content: "Discover the rich cultural heritage preserved in the monuments of Madhya Pradesh."
    }
  ];

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Travel Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={insight.image}
                alt={insight.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{insight.title}</h3>
                <p className="text-gray-600">{insight.content}</p>
                <button className="mt-4 text-blue-600 font-semibold hover:text-blue-800">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
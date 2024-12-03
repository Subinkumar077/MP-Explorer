import React from 'react';
import { Map, Compass, Heart, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function AboutSection() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const featureCards = [
    {
      icon: Map,
      title: "Our Mission",
      description: "To showcase the rich cultural heritage and natural beauty of Madhya Pradesh to the world.",
      color: "text-blue-600",
      gradient: "from-blue-500 to-blue-700"
    },
    {
      icon: Compass,
      title: "Our Vision",
      description: "To become the ultimate guide for travelers exploring the heart of India.",
      color: "text-green-600",
      gradient: "from-green-500 to-green-700"
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "Authenticity, sustainability, and preservation of cultural heritage.",
      color: "text-red-600",
      gradient: "from-red-500 to-red-700"
    }
  ];

  return (
    <motion.section 
      className="relative py-24 px-4 overflow-hidden bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-20"
        style={{
          backgroundImage: `url('https://plus.unsplash.com/premium_photo-1707563544861-d7d1c01c3ea0?q=80&w=1624&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, 
          filter: 'grayscale(30%)'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-80 z-10" />

      <div className="container mx-auto max-w-6xl relative z-20">
        <motion.h2 
          className="text-4xl font-extrabold text-center mb-16 text-gray-900"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About MP Explorer
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featureCards.map((card, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              className="group"
            >
              <div className={`
                p-8 rounded-2xl shadow-lg transition-all duration-300 
                hover:shadow-xl transform hover:-translate-y-2
                bg-white border border-gray-100
                relative overflow-hidden
              `}>
                {/* Gradient background */}
                <div className={`
                  absolute inset-0 bg-gradient-to-br opacity-10 
                  ${card.gradient}
                `}/>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className={`
                    w-16 h-16 mx-auto mb-6 rounded-full 
                    flex items-center justify-center
                    bg-gradient-to-br ${card.gradient} 
                    shadow-md group-hover:scale-110 transition-transform
                  `}>
                    <card.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-center mb-4 text-gray-900">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-center mb-4">
                    {card.description}
                  </p>

                  <div className="flex justify-center">
                    <button className={`
                      flex items-center text-sm font-medium
                      ${card.color} hover:underline
                      group-hover:translate-x-1 transition-transform
                    `}>
                      Learn More 
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default AboutSection;
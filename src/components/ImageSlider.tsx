import React, { useState, useEffect, useCallback, useRef } from 'react';
import { 
  Play, 
  Pause, 
  ChevronLeft, 
  ChevronRight, 
  Circle, 
  CircleDot 
} from 'lucide-react';

// Define slide type for TypeScript
interface Slide {
  url: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    url: 'https://www.swantour.com/blogs/wp-content/uploads/2018/03/Vishvanath-Temple-of-Khajuraho.jpg',
    title: 'Khajuraho Temples',
    description: 'A UNESCO World Heritage Site known for its stunning medieval Hindu and Jain temple architecture.'
  },
  {
    url: 'https://media.istockphoto.com/id/519472109/photo/great-stupa-sanchi-madhya-pradesh-india.jpg?s=612x612&w=0&k=20&c=uhJUJk28O91g8u8f4N5F-uNTuYiBOEXOOoFtg18bujc=',
    title: 'Sanchi Stupa',
    description: 'An iconic Buddhist monument that showcases the rich historical heritage of Madhya Pradesh.'
  },
  {
    url: 'https://www.bandhavgarh-national-park.com/images/safaribanner.jpg',
    title: 'Bandhavgarh National Park',
    description: 'A renowned wildlife sanctuary famous for its tiger population and diverse ecosystem.'
  },
  {
    url: 'https://assets.telegraphindia.com/telegraph/2023/Jan/1674900952_shutterstock_2146495311.jpg',
    title: 'Maheshwar',
    description: 'A historic town known for its ancient temples, ghats, and rich cultural significance.'
  },
  {
    url: 'https://d26dp53kz39178.cloudfront.net/media/uploads/Travel_Guide_Images/Top_15_Places_to_visit_in_pachmarhi_11zon_result-1657094641597.webp',
    title: 'Pachmarhi',
    description: 'A scenic hill station in Madhya Pradesh, often called the Queen of Satpura.'
  },
  {
    url: 'https://revolvingcompass.com/wp/wp-content/uploads/2021/10/Bhedaghat_1.jpg',
    title: 'Bhedaghat',
    description: 'Famous for its marble rocks and breathtaking Dhuandhar Falls along the Narmada River.'
  }
];

export const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Lazy loading ref for images
  const imageRefs = useRef(slides.map(() => React.createRef<HTMLImageElement>()));

  // Navigation Callbacks
  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const goToSlide = useCallback((slideIndex: number) => {
    setCurrentIndex(slideIndex);
  }, []);

  // Autoplay Logic
  const startAutoplay = useCallback(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        goToNext();
      }, 5000);
    }
  }, [isPlaying, goToNext]);

  const stopAutoplay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, []);

  // Toggle Play/Pause
  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  // Effect for Autoplay
  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [isPlaying, startAutoplay, stopAutoplay]);

  return (
    <div 
      className="relative h-screen w-full overflow-hidden group"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      aria-label="Image Slider"
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`
            absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out
            ${index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}
          `}
        >
          {/* Lazy Loading Image */}
          <img
            ref={imageRefs.current[index]}
            src={slide.url}
            alt={slide.title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40" />
          
          {/* Description Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h2 className="text-2xl font-bold mb-2">{slide.title}</h2>
            {/* <p className="text-sm">{slide.description}</p> */}
          </div>
        </div>
      ))}

      {/* Navigation Controls (Responsive & Accessible) */}
      {isHovering && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 
              bg-white/20 hover:bg-white/40 p-2 rounded-full 
              transition-all group/prev"
            aria-label="Previous Slide"
          >
            <ChevronLeft 
              className="text-white group-hover/prev:scale-110 transition" 
              size={32} 
            />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 
              bg-white/20 hover:bg-white/40 p-2 rounded-full 
              transition-all group/next"
            aria-label="Next Slide"
          >
            <ChevronRight 
              className="text-white group-hover/next:scale-110 transition" 
              size={32} 
            />
          </button>
        </>
      )}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-white/50 hover:text-white transition"
            aria-label={`Go to slide ${slideIndex + 1}`}
          >
            {slideIndex === currentIndex ? (
              <CircleDot size={16} />
            ) : (
              <Circle size={16} />
            )}
          </button>
        ))}
      </div>

      {/* Play/Pause Control */}
      {isHovering && (
        <button
          onClick={togglePlayPause}
          className="absolute bottom-8 right-8 
            bg-white/20 hover:bg-white/40 p-2 rounded-full 
            transition-all"
          aria-label={isPlaying ? "Pause Slideshow" : "Play Slideshow"}
        >
          {isPlaying ? (
            <Pause className="text-white" size={24} />
          ) : (
            <Play className="text-white" size={24} />
          )}
        </button>
      )}
    </div>
  );
};
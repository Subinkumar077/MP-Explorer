import React from 'react';

const slides = [
  {
    url: 'https://www.swantour.com/blogs/wp-content/uploads/2018/03/Vishvanath-Temple-of-Khajuraho.jpg',
    title: 'Khajuraho Temples',
  },
  {
    url: 'https://media.istockphoto.com/id/519472109/photo/great-stupa-sanchi-madhya-pradesh-india.jpg?s=612x612&w=0&k=20&c=uhJUJk28O91g8u8f4N5F-uNTuYiBOEXOOoFtg18bujc=',
    title: 'Sanchi Stupa',
  },
  {
    url: 'https://www.bandhavgarh-national-park.com/images/safaribanner.jpg',
    title: 'Bandhavgarh National Park',
  },
  {
    url: 'https://assets.telegraphindia.com/telegraph/2023/Jan/1674900952_shutterstock_2146495311.jpg',
    title: 'Maheshwar',
  },
  {
    url: 'https://d26dp53kz39178.cloudfront.net/media/uploads/Travel_Guide_Images/Top_15_Places_to_visit_in_pachmarhi_11zon_result-1657094641597.webp',
    title: 'Pachmarhi',
  },
  {
    url: 'https://revolvingcompass.com/wp/wp-content/uploads/2021/10/Bhedaghat_1.jpg',
    title: 'Bhedaghat',
  },
];

export function ImageSlider() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-screen w-full relative overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.url}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}
    </div>
  );
}

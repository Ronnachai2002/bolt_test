import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface Slide {
  image: string;
  title: string;
  category: string;
}

export function NovelCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides: Slide[] = [
    {
      image: "https://images.unsplash.com/photo-1519791883288-dc8bd696e667",
      title: "เรื่องราวแห่งความรัก",
      category: "นิยายรัก"
    },
    {
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d",
      title: "ผจญภัยในดินแดนแห่งจินตนาการ",
      category: "แฟนตาซี"
    },
    {
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
      title: "ปริศนาห้องสมุด",
      category: "สืบสวน"
    },
    {
      image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353",
      title: "ความลับแห่งดวงดาว",
      category: "ไซไฟ"
    },
    {
      image: "https://images.unsplash.com/photo-1533669955142-6a73332af4db",
      title: "เส้นทางนักรบ",
      category: "แอคชั่น"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">แนะนำสำหรับคุณ</h2>
        <div className="relative">
          <div className="relative h-[400px] overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${currentSlide * 20}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="min-w-[20%] h-full p-2">
                  <div className="h-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow relative group">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <span className="inline-block bg-blue-600 px-2 py-1 rounded-full text-xs mb-2">
                          {slide.category}
                        </span>
                        <h3 className="text-lg font-semibold mb-2">{slide.title}</h3>
                        <button className="bg-white text-gray-900 px-4 py-1 rounded text-sm hover:bg-gray-100 transition-colors">
                          อ่านเพิ่มเติม
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
import React from 'react';

export function Hero() {
  return (
    <div className="relative h-screen bg-navy-900">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1614607242094-b1b2cf769ff3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2400&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gray-900/70"></div>
      </div>

      <div className="relative z-10 h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 max-w-xl">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Unlocking The World For Everyone To Explore
            </h1>
            <p className="text-lg text-gray-600 mb-2">
              "เปิดประตูสู่โลกกว้างให้ทุกคนได้สัมผัส"
            </p>
            <p className="text-gray-600 mb-6">
              Welcome to Premium Content Audio. Your daily dose of news, insights, and entertainment is just a click away.
            </p>
            <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
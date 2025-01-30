import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Star, BookOpen, ChevronRight } from 'lucide-react';
import { novels } from '../data/novels';

export function Novels() {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'นิยายรัก',
    'นิยายโรมานซ์',
    'นิยายรักวัยรุ่น',
    'นิยายแฟนตาซี',
    'นิยายสืบสวน',
    'นิยายดราม่า'
  ];

  const filteredNovels = (category: string) => {
    return novels[category]?.filter(novel =>
      novel.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      novel.author.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 6);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Bar */}
        <div className="relative w-full max-w-xl mx-auto mb-8">
          <input
            type="text"
            placeholder="ค้นหานิยาย..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
          />
          <Search className="absolute left-3 top-3.5 h-6 w-6 text-gray-400" />
        </div>

        {/* Categories */}
        {categories.map((category) => (
          <div key={category} className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">{category}</h2>
              <Link 
                to={`/category/${encodeURIComponent(category)}`} 
                className="flex items-center text-blue-600 hover:text-blue-700"
              >
                ดูทั้งหมด
                <ChevronRight className="h-5 w-5 ml-1" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {filteredNovels(category)?.map((novel) => (
                <Link key={novel.id} to={`/novels/${novel.id}`} className="group">
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="relative aspect-[3/4]">
                      <img
                        src={novel.cover}
                        alt={novel.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <h3 className="text-sm font-medium line-clamp-2 mb-1 group-hover:text-blue-600">
                        {novel.title}
                      </h3>
                      <p className="text-xs text-gray-600 mb-2">{novel.author}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center">
                          <BookOpen className="h-3 w-3 mr-1" />
                          <span>{novel.chapters}</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-3 w-3 text-yellow-400 mr-1" />
                          <span>{(novel.views / 1000).toFixed(1)}K</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
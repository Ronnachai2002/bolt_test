import React, { useState } from 'react';
import { Search, Clock, User, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  image: string;
  views: number;
  readTime: number;
  publishedDate: string;
}

export function Articles() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ทั้งหมด');

  const categories = [
    'ทั้งหมด',
    'GLOBAL ISSUES',
    'CLIMATE CHANGE',
    'HEALTH',
    'CULTURE',
    'TECHNOLOGY',
    'LIFESTYLE'
  ];

  const articles: Article[] = [
    {
      id: 1,
      title: 'The next global superpower isn\'t who you think',
      excerpt: 'Who runs the world? Political scientist Ian Bremmer argues it\'s not as simple as it used to be. With some eye-opening questions about the nature of leadership, he asks us to consider the impact of the evolving global order and our choices as participants in the future of democracy.',
      content: 'Full article content here...',
      author: {
        name: 'Ian Bremmer',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
      },
      category: 'GLOBAL ISSUES',
      image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620',
      views: 13000000,
      readTime: 14,
      publishedDate: '2 years ago'
    },
    {
      id: 2,
      title: 'The growing megafire crisis — and how to contain it',
      excerpt: 'A detailed look at the growing crisis of megafires and potential solutions.',
      content: 'Full article content here...',
      author: {
        name: 'George T. Whitesides',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'
      },
      category: 'CLIMATE CHANGE',
      image: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed',
      views: 1100000,
      readTime: 10,
      publishedDate: '2 years ago'
    },
    {
      id: 3,
      title: 'Does your heartbeat shape your sense of time?',
      excerpt: 'Exploring the fascinating connection between our heartbeat and time perception.',
      content: 'Full article content here...',
      author: {
        name: 'Irena Arslanova',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
      },
      category: 'HEALTH',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef',
      views: 256000,
      readTime: 9,
      publishedDate: '12 days ago'
    },
    {
      id: 4,
      title: 'An unsung hero of the civil rights movement',
      excerpt: 'Discovering the untold story of a civil rights movement pioneer.',
      content: 'Full article content here...',
      author: {
        name: 'Christina Greer',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
      },
      category: 'CULTURE',
      image: 'https://images.unsplash.com/photo-1560800452-f2d475982b96',
      views: 535000,
      readTime: 3,
      publishedDate: '2 years ago'
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'ทั้งหมด' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search and Categories */}
        <div className="mb-12">
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="space-y-12">
          {filteredArticles.map((article) => (
            <article key={article.id} className="group">
              <Link to={`/articles/${article.id}`} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="relative h-[300px] lg:h-[400px] rounded-lg overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-red-500 text-white px-3 py-1 text-sm font-medium rounded">
                      {article.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/80 text-white px-2 py-1 rounded text-sm">
                    {article.readTime} MIN
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="mb-4">
                    <h2 className="text-3xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 text-lg mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-2" />
                        <span>{article.author.name}</span>
                      </div>
                      <div className="flex items-center">
                        <Eye className="h-4 w-4 mr-2" />
                        <span>{(article.views / 1000000).toFixed(1)}M views</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{article.publishedDate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
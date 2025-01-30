import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Play, Pause, SkipBack, SkipForward, Volume2, Star, BookOpen, Clock, User, ChevronLeft } from 'lucide-react';
import { getNovelById } from '../data/novels';

export function NovelDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [currentChapter, setCurrentChapter] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const novel = getNovelById(parseInt(id || '0'));

  if (!novel) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">ไม่พบนิยายที่คุณต้องการ</h1>
            <button
              onClick={() => navigate(-1)}
              className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-700"
            >
              <ChevronLeft className="h-5 w-5 mr-1" />
              กลับไปหน้าที่แล้ว
            </button>
          </div>
        </div>
      </div>
    );
  }

  const chapters = Array.from({ length: novel.chapters }, (_, i) => ({
    id: i + 1,
    title: `บทที่ ${i + 1}`,
    duration: '20:00',
    audioUrl: 'https://example.com/chapter.mp3'
  }));

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
        >
          <ChevronLeft className="h-6 w-6" />
          <span>กลับ</span>
        </button>

        {/* Novel Info */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img
                src={novel.cover}
                alt={novel.title}
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="md:w-2/3 p-6">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-3xl font-bold">{novel.title}</h1>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {novel.category}
                </span>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <User className="h-5 w-5 mr-2" />
                <span>{novel.author}</span>
              </div>
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-1" />
                  <span>{novel.rating}/5.0</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-1" />
                  <span>{novel.chapters} ตอน</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-1" />
                  <span>{novel.views.toLocaleString()} views</span>
                </div>
              </div>
              <p className="text-gray-600 mb-6">{novel.description || 'ไม่มีคำอธิบายเพิ่มเติม'}</p>
            </div>
          </div>

          {/* Audio Player */}
          <div className="bg-gray-900 text-white p-6">
            <audio
              ref={audioRef}
              onTimeUpdate={handleTimeUpdate}
              onEnded={() => setIsPlaying(false)}
              src={chapters[currentChapter].audioUrl}
            />
            <div className="flex items-center justify-between mb-4">
              <div className="flex-1">
                <h3 className="font-semibold">{chapters[currentChapter].title}</h3>
                <p className="text-sm text-gray-400">{novel.author}</p>
              </div>
              <div className="flex items-center space-x-2">
                <Volume2 className="h-5 w-5" />
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-24"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setCurrentChapter(Math.max(0, currentChapter - 1))}
                className="p-2 hover:bg-gray-800 rounded-full"
                disabled={currentChapter === 0}
              >
                <SkipBack className="h-6 w-6" />
              </button>
              <button
                onClick={togglePlay}
                className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full"
              >
                {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
              </button>
              <button
                onClick={() => setCurrentChapter(Math.min(chapters.length - 1, currentChapter + 1))}
                className="p-2 hover:bg-gray-800 rounded-full"
                disabled={currentChapter === chapters.length - 1}
              >
                <SkipForward className="h-6 w-6" />
              </button>
              <div className="flex-1 flex items-center space-x-2">
                <span className="text-sm">{formatTime(currentTime)}</span>
                <input
                  type="range"
                  min="0"
                  max={audioRef.current?.duration || 0}
                  value={currentTime}
                  onChange={handleSeek}
                  className="flex-1"
                />
                <span className="text-sm">{chapters[currentChapter].duration}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Chapter List */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">รายการตอน</h2>
          <div className="space-y-4">
            {chapters.map((chapter, index) => (
              <button
                key={chapter.id}
                onClick={() => setCurrentChapter(index)}
                className={`w-full text-left p-4 rounded-lg transition-colors ${
                  currentChapter === index
                    ? 'bg-blue-50 border border-blue-200'
                    : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{chapter.title}</h3>
                    <p className="text-sm text-gray-500">ความยาว: {chapter.duration}</p>
                  </div>
                  {currentChapter === index && isPlaying && (
                    <div className="text-blue-600">กำลังเล่น</div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { Settings, Bell, BookOpen, Clock, Heart, User, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Profile() {
  const user = {
    name: 'สมชาย ใจดี',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    email: 'somchai@example.com',
    memberSince: '2023-01-15',
    membershipType: 'Premium',
    favorites: 24,
    listening: 156,
    following: 89,
    followers: 134,
    totalListeningTime: '256 ชั่วโมง'
  };

  const recentlyPlayed = [
    {
      id: 1,
      title: 'เงาจันทร์',
      author: 'แสงดาว',
      cover: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c',
      progress: 75,
      lastPlayed: '2 ชั่วโมงที่แล้ว'
    },
    {
      id: 2,
      title: 'ราชันย์มังกร',
      author: 'มังกรทอง',
      cover: 'https://images.unsplash.com/photo-1500964757637-c85e8a162699',
      progress: 45,
      lastPlayed: '5 ชั่วโมงที่แล้ว'
    },
    {
      id: 3,
      title: 'รักในม่านหมอก',
      author: 'หมอกฝัน',
      cover: 'https://images.unsplash.com/photo-1551269901-5c5e14c25df7',
      progress: 90,
      lastPlayed: '1 วันที่แล้ว'
    }
  ];

  const favoriteGenres = [
    { name: 'โรแมนติก', count: 45 },
    { name: 'แฟนตาซี', count: 32 },
    { name: 'สืบสวน', count: 28 },
    { name: 'ดราม่า', count: 15 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-24 h-24 rounded-full border-4 border-blue-600"
              />
              <div>
                <h1 className="text-2xl font-bold">{user.name}</h1>
                <p className="text-gray-600">{user.email}</p>
                <div className="flex items-center mt-2">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {user.membershipType}
                  </span>
                  <p className="text-sm text-gray-500 ml-3">
                    สมาชิกตั้งแต่: {new Date(user.memberSince).toLocaleDateString('th-TH')}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex space-x-4">
              <Link to="/settings" className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
                <Settings className="h-6 w-6" />
              </Link>
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
                <Bell className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-600">{user.favorites}</div>
              <div className="text-sm text-gray-600">รายการโปรด</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-600">{user.listening}</div>
              <div className="text-sm text-gray-600">กำลังฟัง</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-600">{user.following}</div>
              <div className="text-sm text-gray-600">กำลังติดตาม</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-600">{user.followers}</div>
              <div className="text-sm text-gray-600">ผู้ติดตาม</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recently Played */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                ฟังล่าสุด
              </h2>
              <div className="space-y-4">
                {recentlyPlayed.map((item) => (
                  <div key={item.id} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.cover}
                        alt={item.title}
                        className="w-16 h-16 rounded object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.author}</p>
                        <div className="mt-2">
                          <div className="flex items-center justify-between text-sm text-gray-500 mb-1">
                            <span>{item.lastPlayed}</span>
                            <span>{item.progress}%</span>
                          </div>
                          <div className="h-1 bg-gray-200 rounded">
                            <div
                              className="h-full bg-blue-600 rounded"
                              style={{ width: `${item.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">เมนูลัด</h2>
              <div className="space-y-2">
                <Link
                  to="/profile/edit"
                  className="flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg"
                >
                  <User className="h-5 w-5 mr-3" />
                  แก้ไขโปรไฟล์
                </Link>
                <Link
                  to="/payment"
                  className="flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg"
                >
                  <CreditCard className="h-5 w-5 mr-3" />
                  จัดการการชำระเงิน
                </Link>
                <Link
                  to="/settings"
                  className="flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg"
                >
                  <Settings className="h-5 w-5 mr-3" />
                  ตั้งค่า
                </Link>
              </div>
            </div>

            {/* Favorite Genres */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">หมวดหมู่ที่ชื่นชอบ</h2>
              <div className="space-y-3">
                {favoriteGenres.map((genre, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-700">{genre.name}</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                      {genre.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Total Listening Time */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-2">เวลาฟังทั้งหมด</h2>
              <p className="text-3xl font-bold text-blue-600">{user.totalListeningTime}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
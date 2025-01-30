import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function About() {
  const teamMembers = [
    {
      name: 'Somchai Jaidee',
      role: 'Developer',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60'
    },
    {
      name: 'Somsak Rakdee',
      role: 'Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60'
    },
    {
      name: 'Sompong Meesuk',
      role: 'UX/UI Designer',
      image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60'
    },
    {
      name: 'Somying Jaisai',
      role: 'UX/UI Designer',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">เกี่ยวกับเรา</h1>
            <p className="text-xl max-w-3xl mx-auto">
              AudioPrime เป็นบริษัทผู้นำด้านการให้บริการเนื้อหาระดับพรีเมียมในรูปแบบเสียง 
              เรามุ่งมั่นที่จะสร้างประสบการณ์การฟังที่ดีที่สุดให้กับผู้ใช้งาน
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">พันธกิจของเรา</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            เราเชื่อในการสร้างโอกาสให้ทุกคนสามารถเข้าถึงเนื้อหาคุณภาพได้ทุกที่ทุกเวลา 
            ด้วยเทคโนโลยีที่ทันสมัยและทีมงานมืออาชีพ เราพร้อมที่จะพัฒนาและส่งมอบประสบการณ์ที่ดีที่สุดให้กับผู้ใช้งานของเรา
          </p>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">ทีมงานของเรา</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-blue-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">ติดต่อเรา</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
              <Mail className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">อีเมล</h3>
              <p className="text-gray-600 text-center">contact@audioprime.com</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
              <Phone className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">โทรศัพท์</h3>
              <p className="text-gray-600">02-123-4567</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
              <MapPin className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">ที่อยู่</h3>
              <p className="text-gray-600 text-center">
                123 อาคารดิจิทัล ชั้น 15<br />
                ถนนสุขุมวิท แขวงคลองเตย<br />
                เขตคลองเตย กรุงเทพฯ 10110
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
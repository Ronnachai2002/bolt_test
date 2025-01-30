import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Headphones, Eye, EyeOff } from 'lucide-react';
import axios from 'axios';

export function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
  
    try {
      console.log('Submitting registration data:', formData);
      const response = await axios.post('/api/register', formData);  // Update the endpoint to match the correct route
      console.log('Registration response:', response);
      navigate('/login');
    } catch (error) {
      console.error('Error in handleSubmit function:', error);
      alert('Error registering user');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side with logo and branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-r from-blue-600 to-purple-600 p-12 items-center justify-center">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                <Headphones className="h-16 w-16 text-purple-600" />
              </div>
              <div className="absolute -left-8 -right-8 -z-10">
                <div className="h-4 flex items-center justify-between">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="w-1 h-full bg-white/30 rounded" />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Premium content audio</h1>
          <p className="text-white/80">เข้าถึงเนื้อหาระดับพรีเมียมได้ทุกที่ทุกเวลา</p>
        </div>
      </div>

      {/* Right side with registration form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">สมัครสมาชิก</h2>
            <p className="text-gray-600">สร้างบัญชีใหม่เพื่อเริ่มต้นใช้งาน</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                ชื่อผู้ใช้
              </label>
              <input
                id="username"
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="ชื่อผู้ใช้ของคุณ"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                อีเมล
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                รหัสผ่าน
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="รหัสผ่านของคุณ"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-gray-400"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                ยืนยันรหัสผ่าน
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="ยืนยันรหัสผ่านของคุณ"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-2.5 text-gray-400"
                >
                  {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              สมัครสมาชิก
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">หรือสมัครสมาชิกด้วย</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <button
                type="button"
                className="flex items-center justify-center p-2 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" 
                     alt="Google" 
                     className="h-6 object-contain" />
              </button>
              <button
                type="button"
                className="flex items-center justify-center p-2 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" 
                     alt="Facebook" 
                     className="h-6 object-contain" />
              </button>
              <button
                type="button"
                className="flex items-center justify-center p-2 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/LINE_logo.svg/2048px-LINE_logo.svg.png" 
                     alt="Line" 
                     className="h-6 object-contain" />
              </button>
            </div>

            <div className="text-center">
              <span className="text-gray-600">มีบัญชีอยู่แล้ว? </span>
              <Link to="/login" className="text-purple-600 hover:text-purple-500 font-medium">
                เข้าสู่ระบบ
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
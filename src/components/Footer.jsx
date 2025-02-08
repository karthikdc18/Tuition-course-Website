import { GraduationCap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <GraduationCap size={32} className="text-blue-400" />
              <span className="ml-2 text-xl font-bold">EduTuition</span>
            </div>
            <p className="text-gray-400">
              Empowering students with quality education and personalized attention.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#courses" className="text-gray-400 hover:text-white">Courses</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-white">Portfolio</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Courses</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Grade 5-6</li>
              <li className="text-gray-400">Grade 7-8</li>
              <li className="text-gray-400">Grade 9-10</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Working Hours</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Monday - Friday: 9 AM - 6 PM</li>
              <li className="text-gray-400">Saturday: 9 AM - 4 PM</li>
              <li className="text-gray-400">Sunday: Closed</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} EduTuition. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
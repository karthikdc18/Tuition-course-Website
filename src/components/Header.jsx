import { Phone, Mail, MapPin } from 'lucide-react';

export default function Header() {
  return (
    <div className="bg-blue-50 py-2">
      <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-sm">
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <Phone size={16} className="text-blue-600 mr-2" />
            <a href="tel:+12345678900" className="text-blue-600 hover:underline">
              +1 234 567 8900
            </a>
          </div>
          <div className="flex items-center">
            <Mail size={16} className="text-blue-600 mr-2" />
            <a href="mailto:contact@edutuition.com" className="text-blue-600 hover:underline">
              contact@edutuition.com
            </a>
          </div>
        </div>
        <div className="flex items-center">
          <MapPin size={16} className="text-blue-600 mr-2" />
          <a
            href="https://www.google.com/maps?q=123+Education+Street,+Learning+City"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            123 Education Street, Learning City
          </a>
        </div>
      </div>
    </div>
  );
}

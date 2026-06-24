import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const UtilityBar = () => {
  return (
    <div className="bg-navy text-white/80 py-2 text-xs hidden md:block border-b border-white/10">
      <div className="container flex justify-between items-center">
        <div className="flex space-x-6">
          <div className="flex items-center space-x-2">
            <Phone size={14} className="text-blue" />
            <span>+91 98844 78792</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail size={14} className="text-blue" />
            <span>jkindimpex@gmail.com</span>
          </div>
        </div>
        <div className="flex space-x-6">
          <div className="flex items-center space-x-2">
            <Clock size={14} className="text-blue" />
            <span>Mon - Sat: 08:00 - 18:00</span>
          </div>
          <Link to="/contact" className="flex items-center space-x-2 hover:text-blue transition-colors">
            <MapPin size={14} className="text-blue" />
            <span>Global Locations</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UtilityBar;

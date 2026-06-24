import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-16 pb-8 border-t-4 border-blue">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div>
          <h3 className="text-xl font-bold tracking-tight mb-6 flex items-center">
            J.K <span className="text-blue ml-1.5">Industrial Impex</span>
          </h3>
          <p className="text-sm text-gray-300 leading-relaxed mb-6">
            J.K Industrial Impex, powering industries with reliable electrical solutions. Authorized distributor of premium engineering products since 2007.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><Link to="/about" className="hover:text-blue transition-colors">About Us</Link></li>
            <li><Link to="/products" className="hover:text-blue transition-colors">Products</Link></li>
            <li><Link to="/brands" className="hover:text-blue transition-colors">Brands</Link></li>
            <li><Link to="/clients" className="hover:text-blue transition-colors">Clients</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 uppercase tracking-wider text-sm">Resources</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><a href="/jki_profile.pptx" download className="hover:text-blue transition-colors">Company Profile</a></li>
            <li><Link to="/products" className="hover:text-blue transition-colors">Product Catalogs</Link></li>
            <li><Link to="/about" className="hover:text-blue transition-colors">Certifications</Link></li>
            <li><Link to="/contact" className="hover:text-blue transition-colors">Support</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 uppercase tracking-wider text-sm">Contact</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>No: 117, Thambu chetty St, Parrys, Chennai – 600001</li>
            <li>+91 98844 78792 / 044-42037536</li>
            <li>jkindimpex@gmail.com</li>
          </ul>
        </div>
      </div>
      
      <div className="container pt-8 border-t border-gray-800 text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} JK Industrial Impex. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

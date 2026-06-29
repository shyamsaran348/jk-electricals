import { Link } from 'react-router-dom';

const Footer = () => {
 return (
 <footer className="bg-forest text-white pt-16 pb-8 border-t-4 border-gold">
 <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
 <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="h-14 w-8 rounded-sm overflow-hidden shadow-sm flex items-center justify-center shrink-0">
                <img src="/logo.png" alt="JK Industrial Impex Logo" className="w-full h-full object-cover object-center scale-[1.35]" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-white leading-none">J.K Industrial</span>
                <span className="text-xs font-bold text-gold uppercase tracking-widest mt-1">Impex</span>
              </div>
            </Link>
 <p className="text-sm text-gray-300 leading-relaxed">
 J.K Industrial Impex, powering industries with reliable electrical solutions. Authorized distributor of premium engineering products since 2007.
 </p>
 </div>
 
 <div>
 <h4 className="font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
 <ul className="space-y-3 text-sm text-gray-300">
 <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
 <li><Link to="/products" className="hover:text-gold transition-colors">Products</Link></li>
 <li><Link to="/brands" className="hover:text-gold transition-colors">Brands</Link></li>
 <li><Link to="/clients" className="hover:text-gold transition-colors">Clients</Link></li>
 </ul>
 </div>

 <div>
 <h4 className="font-bold mb-6 uppercase tracking-wider text-sm">Resources</h4>
 <ul className="space-y-3 text-sm text-gray-300">
 <li><a href="/jki_profile.pptx" download className="hover:text-gold transition-colors">Company Profile</a></li>
 <li><Link to="/products" className="hover:text-gold transition-colors">Product Catalogs</Link></li>
 <li><Link to="/contact" className="hover:text-gold transition-colors">Support</Link></li>
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

import { useRef, useState } from 'react';
import * as htmlToImage from 'html-to-image';
import { Download, CheckCircle2, ShieldCheck, Zap, Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Catalog = () => {
  const catalogRef = useRef(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadCatalogImage = async () => {
    if (!catalogRef.current) return;
    setIsDownloading(true);

    try {
      // Temporarily adjust styles for better capturing
      const element = catalogRef.current;
      
      const dataUrl = await htmlToImage.toPng(element, {
        quality: 1.0,
        backgroundColor: '#FFFFFF',
        pixelRatio: 2, // High resolution
      });

      const link = document.createElement('a');
      link.download = 'JK_Industrial_Impex_Brochure.png';
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error('Failed to generate image', error);
      alert('There was an issue generating the brochure. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Download Action Bar */}
        <div className="bg-white rounded-2xl shadow-sm border border-border p-6 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-black text-forest">Digital Brochure</h1>
            <p className="text-muted font-medium text-sm">Download our complete company profile as a high-resolution image.</p>
          </div>
          <button 
            onClick={downloadCatalogImage}
            disabled={isDownloading}
            className={`flex items-center gap-3 px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest transition-all duration-300 focus-ring shadow-xl ${isDownloading ? 'bg-muted text-white cursor-not-allowed' : 'bg-forest text-white hover:bg-gold hover:text-forest'}`}
          >
            <Download size={20} />
            {isDownloading ? 'Generating...' : 'Download Image'}
          </button>
        </div>

        {/* --- ACTUAL BROCHURE CONTENT (This gets captured) --- */}
        <div 
          ref={catalogRef} 
          className="bg-white shadow-2xl overflow-hidden print-container"
          style={{ width: '100%', maxWidth: '1000px', margin: '0 auto', position: 'relative' }}
        >
          {/* Header Section */}
          <div className="bg-forest text-white p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-start justify-between gap-8">
              <div>
                  <div className="flex items-center gap-4 mb-6">
                    {/* Company Logo Added Here */}
                    <div className="w-16 h-24 flex items-center justify-center">
                       <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
                    </div>
                  <div>
                    <h1 className="text-5xl font-black tracking-tight text-white drop-shadow-md">J.K Industrial</h1>
                    <h2 className="text-xl font-bold text-gold uppercase tracking-widest mt-1">Impex</h2>
                  </div>
                </div>
                <p className="text-lg text-white/90 font-medium max-w-xl leading-relaxed">
                  Southern India's premium B2B electrical distributor. Providing you all kinds of Industrial Materials with consistent professionalism since 2007.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 min-w-[280px]">
                <h3 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">Contact Us</h3>
                <div className="flex items-center gap-3 mb-3 text-sm font-medium">
                  <Phone size={16} className="text-gold" />
                  <span>044 – 42037536 <br/> +91 98844 78792</span>
                </div>
                <div className="flex items-center gap-3 mb-3 text-sm font-medium">
                  <Mail size={16} className="text-gold" />
                  <span>jkindimpex@gmail.com</span>
                </div>
                <div className="flex items-start gap-3 text-sm font-medium">
                  <MapPin size={16} className="text-gold shrink-0 mt-1" />
                  <span>No: 117, Thambu Chetty St,<br/>Parrys, Chennai – 600001</span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="bg-gold px-12 py-6 flex flex-wrap gap-x-12 gap-y-4 justify-between items-center text-forest font-bold text-sm uppercase tracking-wider">
            <span className="flex items-center gap-2"><CheckCircle2 size={18} /> Highest Quality</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={18} /> Greatest Quantity</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={18} /> Largest Variety</span>
          </div>

          <div className="p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              
              {/* Left Column */}
              <div className="space-y-12">
                {/* Profile */}
                <section>
                  <h3 className="text-2xl font-black text-forest mb-6 flex items-center gap-3">
                    <ShieldCheck className="text-gold" size={28} /> Company Profile
                  </h3>
                  <div className="bg-surface p-6 rounded-xl border border-border space-y-3">
                    <div className="flex justify-between border-b border-border/50 pb-2">
                      <span className="text-muted font-semibold">Commencement</span>
                      <span className="text-forest font-bold">September 2007</span>
                    </div>
                    <div className="flex justify-between border-b border-border/50 pb-2">
                      <span className="text-muted font-semibold">Total Area</span>
                      <span className="text-forest font-bold">2500 sqft (inc. Godown)</span>
                    </div>
                    <div className="flex justify-between border-b border-border/50 pb-2">
                      <span className="text-muted font-semibold">Total Employees</span>
                      <span className="text-forest font-bold">8 Dedicated Staff</span>
                    </div>
                    <div className="flex justify-between pb-2">
                      <span className="text-muted font-semibold">Annual Turnover</span>
                      <span className="text-forest font-bold">₹1Cr - ₹1.5Cr</span>
                    </div>
                  </div>
                </section>

                {/* Brands */}
                <section>
                  <h3 className="text-2xl font-black text-forest mb-6 flex items-center gap-3">
                    <Zap className="text-gold" size={28} /> Authorized Dealers
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {['HAVELLS', 'L&T', 'POLYCAB', 'PHILIPS', 'SUPERLITE', 'ORBIT', 'MENNEKES', 'STANDARD', 'MDS'].map(brand => (
                      <span key={brand} className="bg-forest text-white px-4 py-2 rounded-md font-bold text-sm tracking-wider">
                        {brand}
                      </span>
                    ))}
                  </div>
                </section>

                {/* Statutory */}
                <section>
                  <h3 className="text-lg font-bold text-forest mb-4 border-b-2 border-gold pb-2 inline-block">Statutory Details</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm font-medium text-slate-700">
                    <div><span className="text-muted block text-xs">GSTIN</span>33AOTPS9550A1ZN</div>
                    <div><span className="text-muted block text-xs">PAN</span>AOTPS9550A</div>
                    <div><span className="text-muted block text-xs">IEC Number</span>0407020471</div>
                    <div><span className="text-muted block text-xs">CST No</span>83031</div>
                  </div>
                </section>
              </div>

              {/* Right Column */}
              <div className="space-y-12">
                {/* Major Products */}
                <section>
                  <h3 className="text-2xl font-black text-forest mb-6 border-l-4 border-gold pl-4">
                    Quality Products We Deal In
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Contactors, Control & Thermal Overload Relays",
                      "Motor Starters, Limit & Selector Switches",
                      "Moulded Case Circuit Breakers (MCCBs)",
                      "HRC Fuses, Fuse Distribution Boards",
                      "Power Factor Capacitors (EPCOS & TIBCON)",
                      "Temperature Controllers & Timers",
                      "MCB, DB & ELCBS (Telemechanic / Merlin Gerin)",
                      "Industrial Heating Elements (upto 5000W)",
                      "XLP Power Cables & HT Cables",
                      "GI Cable Trays, Copper Flat & Strips",
                      "Industrial Cold Room Fittings & Sirens"
                    ].map((product, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm font-semibold text-slate-700 bg-surface p-3 rounded-lg border border-border">
                        <div className="w-2 h-2 rounded-full bg-gold mt-1.5 shrink-0"></div>
                        {product}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

            </div>

            {/* Clients Section spanning full width */}
            <div className="mt-12 pt-12 border-t-2 border-dashed border-border">
              <h3 className="text-2xl font-black text-forest mb-8 text-center uppercase tracking-widest">
                Our Esteemed Clients
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "HATSUN AGRO PRODUCTS", "INDIAN COAST GUARDS", "ASTON SHOES", 
                  "PARAG MILK FOODS", "CREAMLINE DIARY", "EMAS ENGINEERING", 
                  "FARIDA SHOES", "AL KUHAIMI METAL (KSA)"
                ].map((client, i) => (
                  <div key={i} className="text-center p-4 bg-surface rounded-xl border border-border">
                    <span className="text-xs font-bold text-forest uppercase">{client}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Summary */}
            <div className="mt-12 bg-forest/5 p-6 rounded-xl border border-gold/30 text-center">
              <p className="font-bold text-forest italic leading-relaxed">
                "Our mission is to become the authorized dealer for 10+ premium companies and the major distributor in Industrial materials in Southern India. Our Strength is supplying Quality Products with competitive Pricing."
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Catalog;

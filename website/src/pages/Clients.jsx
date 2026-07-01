import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../animations/fadeUp';
import { fadeIn } from '../animations/fadeIn';
import { Helmet } from 'react-helmet-async';
import { Settings, Leaf } from 'lucide-react';

const domesticClients = [
  { name: 'Hatsun Agro Products', logo: 'https://www.google.com/s2/favicons?domain=hap.in&sz=128' },
  { name: 'Indian Coast Guards', logo: 'https://www.google.com/s2/favicons?domain=indiancoastguard.gov.in&sz=128' },
  { name: 'Parag Milk Foods', logo: 'https://www.google.com/s2/favicons?domain=paragmilkfoods.com&sz=128' },
  { name: 'Creamline Dairy (Jersey)', logo: 'https://www.google.com/s2/favicons?domain=creamlinedairy.com&sz=128' },
  { name: 'IGP Engineers Ltd', logo: 'https://www.google.com/s2/favicons?domain=igpengineers.com&sz=128' },
  { name: 'EMAS Engineering', logo: 'https://www.google.com/s2/favicons?domain=emas.com&sz=128' },
  { name: 'PSL Holdings Ltd', logo: 'https://www.google.com/s2/favicons?domain=pslholdings.com.sg&sz=128' },
  { name: 'Farida Shoes Pvt Ltd', logo: 'https://www.google.com/s2/favicons?domain=faridagroup.com&sz=128' },
  { name: 'Aston Shoes Pvt Ltd', logo: 'https://www.google.com/s2/favicons?domain=aston.com&sz=128' },
  { name: 'Delta Shoes Pvt Ltd', logo: 'https://www.google.com/s2/favicons?domain=deltashoes.com&sz=128' }
];

const overseasClients = [
  { name: 'Al Kuhaimi Metal Industries', logo: 'https://www.google.com/s2/favicons?domain=alkuhaimi.com&sz=128', location: 'Dammam, KSA' },
  { name: 'Al Khaleej Holding & Co', logo: 'https://www.google.com/s2/favicons?domain=alkhaleejholding.com&sz=128', location: 'Alkhobar, KSA' }
];

const ClientLogo = ({ client }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-surface border border-border rounded-2xl hover:shadow-md hover:border-gold/30 transition-all duration-300 h-32 group text-center">
      {client.logo && !imgError ? (
        <img 
          src={client.logo} 
          alt={`${client.name} Logo`} 
          className="max-h-16 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
          onError={() => setImgError(true)}
        />
      ) : (
        <span className="text-sm font-bold text-forest/70 group-hover:text-forest transition-colors">
          {client.name}
        </span>
      )}
      {client.location && (
        <span className="text-[10px] font-bold uppercase tracking-widest text-muted mt-3">
          {client.location}
        </span>
      )}
    </div>
  );
};

const Clients = () => {
  return (
    <div className="w-full bg-white pb-24 pt-32">
      <Helmet>
        <title>Our Clients & Partners | JK Industrial Impex</title>
        <meta name="description" content="Trusted by leading industrial conglomerates and manufacturing plants across Southern India." />
      </Helmet>

      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-20 text-center max-w-3xl">
        <motion.span initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.2em] text-gold mb-4 block">Trusted Enterprise Partners</motion.span>
        <motion.h1 initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-display font-bold text-forest mb-6">Our Global Industrial Ecosystem</motion.h1>
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-lg text-muted">
          Providing precision-engineered solutions for the world's most demanding industrial environments. We build relationships on reliability and technical excellence.
        </motion.p>
      </section>

      {/* Clients Visual Grid */}
      <section className="py-24 bg-surface border-y border-border mb-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Domestic Partners */}
            <div className="flex-1">
              <h2 className="text-xl font-bold uppercase tracking-widest text-forest mb-8 border-b border-border pb-4">Our Regular Customers</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {domesticClients.map((client, i) => (
                  <ClientLogo key={i} client={client} />
                ))}
              </div>
            </div>

            {/* Overseas Customers */}
            <div className="lg:w-1/3">
              <h2 className="text-xl font-bold uppercase tracking-widest text-gold mb-8 border-b border-border pb-4">Our Overseas Customers</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {overseasClients.map((client, i) => (
                  <ClientLogo key={i} client={client} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Success Stories - Bento Grid */}
      <section className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-h2 font-bold text-forest mb-4">Featured Success Stories</h2>
          <div className="w-20 h-1 bg-gold"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Case Study 1 (Large Image Block) */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-8 group relative overflow-hidden bg-white border border-border shadow-sm rounded-3xl flex flex-col">
            <div className="h-2/3 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
              <div className="absolute inset-0 bg-gold/10"></div>
            </div>
            <div className="p-10 bg-white flex-1 flex flex-col justify-center">
              <div>
                <span className="bg-gold/10 text-gold px-4 py-2 text-[10px] font-bold uppercase tracking-widest mb-6 inline-block rounded-full">Industrial Delivery</span>
                <h3 className="text-h3 font-black text-forest mb-4 tracking-tight">Complete Plant Electrification for Hatsun Agro</h3>
                <p className="text-lg text-muted mb-0 max-w-xl font-medium">
                  Supplied all standard electrical distribution boards, switchgear, and contactors to power a new ISO-certified dairy processing plant safely and effectively.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Case Study 2 & 3 (Stacked Block) */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="lg:col-span-4 flex flex-col gap-6">
            
            <div className="flex-1 bg-white border border-border p-10 hover:shadow-lg transition-all duration-300 shadow-sm flex flex-col justify-center rounded-3xl group">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Settings className="text-gold w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xl font-black text-forest mb-4 tracking-tight">Facility Setup for Aston Shoes</h3>
              <p className="text-muted mb-8 font-medium">Delivered end-to-end industrial automation components, switchgears, and heavy-duty lighting for large-scale shoe manufacturing units.</p>
              <span className="text-xs font-bold uppercase tracking-widest text-forest border-t border-border pt-4">100% Quality Rating</span>
            </div>

            <div className="flex-1 bg-surface border border-border p-10 hover:shadow-lg transition-all duration-300 shadow-sm flex flex-col justify-center rounded-3xl group">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Leaf className="text-gold w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xl font-black text-forest mb-4 tracking-tight">Maritime Supply for Indian Coast Guards</h3>
              <p className="text-muted mb-8 font-medium">Provided heavy-duty specialized cables and reliable electrical components for coastal security operations and vessel maintenance.</p>
              <span className="text-xs font-bold uppercase tracking-widest text-forest border-t border-border pt-4">Reliability Milestone</span>
            </div>

          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Clients;

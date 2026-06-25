import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../animations/fadeUp';
import { fadeIn } from '../animations/fadeIn';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';

const Contact = () => {
 const [formData, setFormData] = useState({
 name: '',
 company: '',
 email: '',
 phone: '',
 department: 'Sales',
 message: ''
 });

 const handleChange = (e) => {
 setFormData({ ...formData, [e.target.name]: e.target.value });
 };

 const handleSubmit = (e) => {
 e.preventDefault();
 // Simulate sending email via EmailJS or similar later
 toast.success("Inquiry submitted successfully to our Procurement team.");
 setFormData({
 name: '',
 company: '',
 email: '',
 phone: '',
 department: 'Sales',
 message: ''
 });
 };

 return (
 <div className="w-full bg-surface pb-24 pt-32">
 <Helmet>
 <title>Contact Us | JK Industrial Impex</title>
 <meta name="description" content="Get in touch with JK Industrial Impex for your electrical distribution needs." />
 </Helmet>
 
 {/* Header */}
 <section className="container mx-auto px-4 mb-20 text-center max-w-3xl relative">
 <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gold/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
 <motion.span initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.2em] text-gold mb-4 block relative z-10">Get In Touch</motion.span>
 <motion.h1 initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-display font-black text-forest mb-6 tracking-tight relative z-10">Contact Our Experts</motion.h1>
 <motion.p initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-lg text-muted font-medium relative z-10">
 Have a project in mind? Our engineering and procurement teams are ready to provide the precision solutions you need.
 </motion.p>
 </section>

 <section className="container mx-auto px-4">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
 
 {/* Contact Information & Map */}
 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeIn} className="space-y-8">
 <div className="bg-white border border-border p-10 shadow-sm rounded-3xl">
 <h3 className="text-h3 font-black text-forest mb-8 border-b border-border pb-6 tracking-tight">Corporate Headquarters</h3>
 
 <div className="space-y-8">
 <div className="flex items-start gap-4">
 <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
 <MapPin className="text-gold w-5 h-5" />
 </div>
 <div>
 <h4 className="text-sm font-bold uppercase tracking-widest text-forest mb-2">Location</h4>
 <p className="text-muted leading-relaxed font-medium">
 No: 117, Thambu chetty St,<br/>
 Parrys, Chennai – 600001
 </p>
 </div>
 </div>

 <div className="flex items-start gap-4">
 <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
 <Phone className="text-gold w-5 h-5" />
 </div>
 <div>
 <h4 className="text-sm font-bold uppercase tracking-widest text-forest mb-2">Direct Line</h4>
 <p className="text-muted leading-relaxed font-medium">+91 98844 78792<br/>044 - 42037536 / 25215123</p>
 </div>
 </div>

 <div className="flex items-start gap-4">
 <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
 <Mail className="text-gold w-5 h-5" />
 </div>
 <div>
 <h4 className="text-sm font-bold uppercase tracking-widest text-forest mb-2">Email Desk</h4>
 <p className="text-muted leading-relaxed font-medium">jkindimpex@gmail.com</p>
 </div>
 </div>

 <div className="flex items-start gap-4">
 <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
 <Clock className="text-gold w-5 h-5" />
 </div>
 <div>
 <h4 className="text-sm font-bold uppercase tracking-widest text-forest mb-2">Operating Hours</h4>
 <p className="text-muted leading-relaxed font-medium">Monday - Saturday: 08:00 - 18:00</p>
 </div>
 </div>
 </div>
 </div>

 {/* Google Map Embed */}
 <div className="bg-surface border border-border h-64 flex items-center justify-center overflow-hidden rounded-3xl shadow-sm">
 <iframe 
 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3886.136450630656!2d80.28581721482343!3d13.090538990778001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f582f3a2c5b%3A0x6b4fb6c5db617d5c!2sThambu%20Chetty%20St%2C%20Parrys%2C%20George%20Town%2C%20Chennai%2C%20Tamil%20Nadu%20600001!5e0!3m2!1sen!2sin!4v1689345214088!5m2!1sen!2sin" 
 width="100%" 
 height="100%" 
 style={{ border: 0 }} 
 allowFullScreen="" 
 loading="lazy" 
 referrerPolicy="no-referrer-when-downgrade"
 ></iframe>
 </div>
 </motion.div>

 {/* Contact Form */}
 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="bg-white rounded-3xl p-10 shadow-lg border border-border">
 <h3 className="text-h3 font-black text-forest mb-2 tracking-tight">Request a Quote</h3>
 <p className="text-muted font-medium mb-8 border-b border-border pb-6">Fill out the form below and our procurement specialists will get back to you within 24 hours.</p>

 <form onSubmit={handleSubmit} className="space-y-6">
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div>
 <label className="block text-xs font-bold text-forest uppercase tracking-widest mb-2 ml-2">Full Name *</label>
 <input 
 type="text" 
 name="name"
 required
 value={formData.name}
 onChange={handleChange}
 className="w-full h-14 bg-surface border border-border px-6 rounded-2xl text-forest focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all font-medium"
 />
 </div>
 <div>
 <label className="block text-xs font-bold text-forest uppercase tracking-widest mb-2 ml-2">Company Name *</label>
 <input 
 type="text" 
 name="company"
 required
 value={formData.company}
 onChange={handleChange}
 className="w-full h-14 bg-surface border border-border px-6 rounded-2xl text-forest focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all font-medium"
 />
 </div>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div>
 <label className="block text-xs font-bold text-forest uppercase tracking-widest mb-2 ml-2">Email Address *</label>
 <input 
 type="email" 
 name="email"
 required
 value={formData.email}
 onChange={handleChange}
 className="w-full h-14 bg-surface border border-border px-6 rounded-2xl text-forest focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all font-medium"
 />
 </div>
 <div>
 <label className="block text-xs font-bold text-forest uppercase tracking-widest mb-2 ml-2">Phone Number</label>
 <input 
 type="tel" 
 name="phone"
 value={formData.phone}
 onChange={handleChange}
 className="w-full h-14 bg-surface border border-border px-6 rounded-2xl text-forest focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all font-medium"
 />
 </div>
 </div>

 <div>
 <label className="block text-xs font-bold text-forest uppercase tracking-widest mb-2 ml-2">Department</label>
 <select 
 name="department"
 value={formData.department}
 onChange={handleChange}
 className="w-full h-14 bg-surface border border-border px-6 rounded-2xl text-forest focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all font-medium appearance-none"
 >
 <option value="Sales">Sales & Procurement</option>
 <option value="Technical">Technical Support</option>
 <option value="General">General Inquiry</option>
 </select>
 </div>

 <div>
 <label className="block text-xs font-bold text-forest uppercase tracking-widest mb-2 ml-2">Project Details / Inquiry *</label>
 <textarea 
 name="message"
 required
 rows="5"
 value={formData.message}
 onChange={handleChange}
 className="w-full bg-surface border border-border p-6 rounded-2xl text-forest focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all font-medium resize-none"
 ></textarea>
 </div>

 <button type="submit" className="w-full h-16 bg-forest text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3 rounded-full hover:bg-gold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
 <Send className="w-4 h-4" />
 Submit Inquiry
 </button>
 </form>
 </motion.div>

 </div>
 </section>

 </div>
 );
};

export default Contact;

import { motion } from 'framer-motion';
import { fadeUp } from '../animations/fadeUp';

const Resources = () => {
  return (
    <div className="w-full bg-surface min-h-[60vh] flex flex-col items-center justify-center pt-24 pb-24">
      <div className="container mx-auto text-center">
        <motion.span initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.2em] text-blue mb-4 block">Knowledge Base</motion.span>
        <motion.h1 initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-display font-bold text-navy mb-6">Technical Resources</motion.h1>
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-lg text-muted max-w-2xl mx-auto">
          Access product manuals, technical compliance certificates, and CAD schematics for our enterprise inventory. Portal coming soon.
        </motion.p>
      </div>
    </div>
  );
};

export default Resources;

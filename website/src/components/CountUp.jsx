import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const CountUp = ({ end, duration = 2, suffix = "", prefix = "" }) => {
 const [count, setCount] = useState(0);
 const ref = useRef(null);
 const isInView = useInView(ref, { once: true, margin: "-50px" });

 useEffect(() => {
 if (isInView) {
 let startTime;
 let animationFrame;

 const animate = (timestamp) => {
 if (!startTime) startTime = timestamp;
 const progress = (timestamp - startTime) / (duration * 1000);
 
 if (progress < 1) {
 // Use easeOutQuart for a smooth deceleration
 const easeOut = 1 - Math.pow(1 - progress, 4);
 setCount(Math.floor(end * easeOut));
 animationFrame = requestAnimationFrame(animate);
 } else {
 setCount(end);
 }
 };

 animationFrame = requestAnimationFrame(animate);

 return () => cancelAnimationFrame(animationFrame);
 }
 }, [isInView, end, duration]);

 return (
 <span ref={ref}>
 {prefix}{count.toLocaleString()}{suffix}
 </span>
 );
};

export default CountUp;

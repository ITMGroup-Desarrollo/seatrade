import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AnimatedNumber({ value, duration = 500 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (typeof value !== "number" || isNaN(value)) return;

    let start = 0;
    const increment = value / (duration / 16); 

    const animate = () => {
      start += increment;
      if (start >= value) {
        setCount(value);
      } else {
        setCount(Math.round(start));
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [value, duration]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {count.toLocaleString()}
    </motion.span>
  );
}

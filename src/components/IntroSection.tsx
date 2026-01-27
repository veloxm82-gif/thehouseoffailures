import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const IntroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="intro" className="py-24 md:py-32 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary" />
            <div className="w-3 h-3 rotate-45 border border-primary" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary" />
          </div>

          <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-muted-foreground font-light">
            A warm, bustling space where the tantalizing aroma of spices dances in the air, 
            and the clinking of glasses mingles with laughter and lively conversation. 
            This is{" "}
            <span className="text-primary font-serif font-semibold">
              The House of Failures
            </span>{" "}
            — more than just a restaurant;{" "}
            <span className="text-foreground font-medium italic">
              Where Every Mistake Becomes a Masterpiece.
            </span>
          </p>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary" />
            <div className="w-3 h-3 rotate-45 border border-primary" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

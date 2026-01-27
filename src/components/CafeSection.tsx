import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Coffee } from "lucide-react";

export const CafeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cafe" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <Coffee className="w-6 h-6 text-primary" />
              <span className="text-primary uppercase tracking-wider text-sm font-medium">In-House Cafe</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Fresh Quality <span className="text-primary">Kaffe Nasha</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-gold-light mb-8" />

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                <span className="text-primary font-semibold">KAFFE NASHA</span> is a relaxed café space 
                within our restaurant, created for slow sips, meaningful conversations, and moments of pause. 
                Designed with comfort in mind, it's the perfect spot to unwind, catch up, or simply enjoy 
                the café atmosphere alongside great food.
              </p>
              <p>
                With its easygoing ambience and inviting layout, the café creates an environment where 
                time feels unhurried. It's a place meant for everyday moments — from casual conversations 
                to quiet time — all within a warm and pleasant setting.
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-4 mt-8">
              {["Specialty Coffee", "Fresh Shakes", "Cozy Ambiance", "Free WiFi"].map((feature) => (
                <span
                  key={feature}
                  className="px-4 py-2 rounded-full bg-secondary text-foreground text-sm border border-border/50"
                >
                  {feature}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80"
                  alt="Cafe interior"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&q=80"
                  alt="Coffee preparation"
                  className="w-full h-40 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="pt-8 space-y-4">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&q=80"
                  alt="Coffee cup"
                  className="w-full h-40 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80"
                  alt="Latte art"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

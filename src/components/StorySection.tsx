import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const StorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="story" className="py-24 md:py-32 bg-card/50">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Images Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80"
                    alt="Restaurant interior"
                    className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="overflow-hidden rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80"
                    alt="Delicious food"
                    className="w-full h-32 md:h-40 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="pt-8 space-y-4">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80"
                    alt="Cafe ambiance"
                    className="w-full h-32 md:h-40 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="overflow-hidden rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&q=80"
                    alt="Chef cooking"
                    className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-primary/30 rounded-xl -z-10" />
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Our <span className="text-primary">Story</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-gold-light mb-8" />

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                From a humble roadside outlet in Vadodara of 65 sq ft area outlet in 2022, starting as 
                The Failure's Kitchen - a Chinese & Punjabi restaurant, and then slowly we expanded in 
                January 2023 to a bigger space of 650 sq ft because of the love and support of our loyal customers.
              </p>
              <p>
                And in January 2025 The Failures Kitchen evolved into{" "}
                <span className="text-primary font-semibold">The House of Failures</span> - a 6500 sq ft 
                global multi-cuisine restaurant. The House of Failures has grown into a flagship destination, 
                embracing community connections whilst also coming into the top 10 restaurants of Vadodara.
              </p>

              <div className="pt-4">
                <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  Our <span className="text-primary">Speciality</span>
                </h3>
                <p>
                  By delivering authentic global vegetarian multi-cuisine with uncompromising quality 
                  and a differentiated dining experience, The House of Failures has successfully captured 
                  a significant share of Vadodara's premium dining market — validating strong, scalable 
                  demand for the concept.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border/50">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-serif font-bold text-primary">65</p>
                <p className="text-muted-foreground text-sm">sq ft start</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-serif font-bold text-primary">6,500</p>
                <p className="text-muted-foreground text-sm">sq ft now</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-serif font-bold text-primary">Top 10</p>
                <p className="text-muted-foreground text-sm">in Vadodara</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

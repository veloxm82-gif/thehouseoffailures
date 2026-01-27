import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const DifferenceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-card/50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">
            What Makes Us <span className="text-primary">Different?</span>
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              Blending global vegetarian cuisine with bold architectural storytelling,{" "}
              <span className="text-primary font-semibold">The House of Failures</span> stands as Gujarat's 
              only <span className="text-foreground font-medium">Gabion-themed alfresco restaurant</span> — 
              a dining experience designed not just to be visited, but remembered.
            </p>
            <p>
              So, come, join us at The House of Failures and Kaffe Nasha, where every bite is a brushstroke 
              on the canvas of your soul, and every moment a celebration of the human connection, fuelled 
              by love, flavour, and the shared joy of coming together.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { value: "Gabion", label: "Themed Design" },
              { value: "Global", label: "Vegetarian Cuisine" },
              { value: "Alfresco", label: "Dining Experience" },
              { value: "Premium", label: "Quality Standards" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="glass-card p-6 rounded-xl border border-border/50"
              >
                <p className="text-2xl md:text-3xl font-serif font-bold text-primary mb-2">
                  {item.value}
                </p>
                <p className="text-muted-foreground text-sm">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

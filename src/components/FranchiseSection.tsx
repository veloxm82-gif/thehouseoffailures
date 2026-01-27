import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";

const supportFeatures = [
  "End-to-end SOPs & structured onboarding",
  "Kitchen planning & menu standardisation",
  "Founder-led academy-style training",
  "Periodic performance & marketing audits",
  "Strategic campaigns & content direction",
  "Sustained visibility & brand consistency",
];

export const FranchiseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-card/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Franchise <span className="text-primary">Support</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-gold-light mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                THF provides a fully institutionalised franchise support system designed to reduce 
                execution risk and operational complexity. Franchise partners receive end-to-end 
                support including SOPs, structured onboarding and training, kitchen planning, 
                menu standardisation, and periodic performance and marketing audits.
              </p>
            </div>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Founder-led, academy-style training ensures direct knowledge transfer, enabling 
                franchisees to operate with clarity, consistency, and confidence. Marketing is 
                centrally driven by the THF brand, with launch support, strategic campaigns, 
                content direction, and ongoing reviews.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {supportFeatures.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50 border border-border/50"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground text-sm">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

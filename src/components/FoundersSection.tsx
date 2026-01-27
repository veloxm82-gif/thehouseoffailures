import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface FounderCardProps {
  title: string;
  subtitle: string;
  content: string[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
}

const FounderCard = ({ title, subtitle, content, image, imageAlt, reverse }: FounderCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? "lg:flex-row-reverse" : ""}`}>
      <motion.div
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className={reverse ? "lg:order-2" : ""}
      >
        <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">
          {title} <span className="text-primary">{subtitle}</span>
        </h3>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-gold-light mb-8" />
        <div className="space-y-4">
          {content.map((paragraph, index) => (
            <p key={index} className="text-muted-foreground leading-relaxed text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: reverse ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`relative ${reverse ? "lg:order-1" : ""}`}
      >
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-[400px] md:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        </div>
        {/* Decorative frame */}
        <div className="absolute -inset-4 border-2 border-primary/30 rounded-2xl -z-10" />
        <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
      </motion.div>
    </div>
  );
};

export const FoundersSection = () => {
  return (
    <section id="journey" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Our <span className="text-primary">Founders</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-gold-light mx-auto" />
        </div>

        {/* Founders */}
        <div className="space-y-32">
          <FounderCard
            title="The"
            subtitle="Brothers"
            content={[
              "Founded by brothers Hritik Dhone (younger) and Yash Dhone (elder), The House of Failures is rooted in early entrepreneurship and disciplined execution. At the ages of 15 and 17, the brothers launched a wholesale-to-retail clothing venture, sourcing from Mumbai and selling in Vadodara—an early failure that shaped their entrepreneurial mindset.",
              "During their graduation years, both founders gained extensive hands-on experience in the catering industry, building deep expertise in food operations and large-scale event management. In 2022, they launched Failure's Kitchen, which evolved into The House of Failures, scaling from a 65 sq. ft outlet to a 6,500 sq. ft premium global multi-cuisine restaurant within four years.",
            ]}
            image="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
            imageAlt="Founders of The House of Failures"
          />

          <FounderCard
            title="The"
            subtitle="Partner"
            content={[
              "Mr. Sameet Pandit, an early venture investor and long-time mentor to Hritik and Yash Dhone, played a pivotal role in the journey of The House of Failures. Having mentored the brothers since their school years, Mr. Pandit recognized their entrepreneurial potential early on and placed his trust in their vision.",
              "His early investment and continued guidance proved instrumental in transforming their dream into a high-growth, high-impact venture. With his support, The House of Failures has delivered strong returns while also establishing itself as a defining cultural and culinary landmark within the Vadodara community.",
            ]}
            image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
            imageAlt="Partner Mr. Sameet Pandit"
            reverse
          />
        </div>
      </div>
    </section>
  );
};

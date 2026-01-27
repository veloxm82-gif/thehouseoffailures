import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80", label: "Restaurant" },
  { id: 2, src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", label: "Dining" },
  { id: 3, src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80", label: "Ambiance" },
  { id: 4, src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80", label: "Food" },
  { id: 5, src: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&q=80", label: "Cuisine" },
  { id: 6, src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80", label: "Experience" },
  { id: 7, src: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&q=80", label: "Desserts" },
  { id: 8, src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80", label: "Coffee" },
  { id: 9, src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", label: "Moments" },
  { id: 10, src: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800&q=80", label: "Quality" },
];

export const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="py-24 md:py-32 bg-card/30" ref={ref}>
      {/* Section Header */}
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Explore Our <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover the ambiance and culinary delights
          </p>
        </motion.div>
      </div>

      {/* Horizontal Scroll Gallery */}
      <div className="relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="flex gap-4 overflow-x-auto scrollbar-hide px-8 md:px-16 pb-4 custom-scrollbar"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex-shrink-0 group cursor-pointer"
            >
              <div className="relative w-72 h-96 rounded-xl overflow-hidden">
                <img
                  src={image.src}
                  alt={image.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <span className="inline-block px-4 py-2 bg-primary/90 text-primary-foreground rounded-full text-sm font-medium">
                    {image.label}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-4 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-4 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

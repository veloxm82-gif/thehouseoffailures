import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const menuItems = [
  { id: 1, name: "Salads", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80" },
  { id: 2, name: "Indian", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80" },
  { id: 3, name: "Asian Woks", image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&q=80" },
  { id: 4, name: "Italian", image: "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?w=600&q=80" },
  { id: 5, name: "Cocktails", image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80" },
  { id: 6, name: "Continental", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80" },
  { id: 7, name: "Coffees & Shakes", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80" },
  { id: 8, name: "Desserts", image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&q=80" },
  { id: 9, name: "Mexican", image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80" },
];

export const MenuSection = () => {
  const ref = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(updateScrollButtons, 300);
    }
  };

  return (
    <section id="menu" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Our Dishes Tell <span className="text-primary">Interesting Stories</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience the finest global vegetarian cuisine, crafted with passion and served with love
          </p>
        </motion.div>
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Navigation Buttons */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="rounded-full bg-background/80 backdrop-blur-sm border border-border/50 hover:bg-primary hover:text-primary-foreground disabled:opacity-30"
          >
            <ChevronLeft />
          </Button>
        </div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="rounded-full bg-background/80 backdrop-blur-sm border border-border/50 hover:bg-primary hover:text-primary-foreground disabled:opacity-30"
          >
            <ChevronRight />
          </Button>
        </div>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          onScroll={updateScrollButtons}
          className="flex gap-6 overflow-x-auto scrollbar-hide px-8 md:px-16 pb-4"
        >
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex-shrink-0 group cursor-pointer"
            >
              <div className="relative w-64 h-80 rounded-2xl overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-2xl transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

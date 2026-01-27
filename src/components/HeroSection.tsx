import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

const slides = [
  {
    id: 1,
    location: "Vadodara",
    title: "The House Of Failures",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80",
  },
  {
    id: 2,
    location: "Vadodara",
    title: "Kaffe Nasha",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1920&q=80",
  },
];

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const scrollToReservation = () => {
    const element = document.querySelector("#reservation");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary uppercase tracking-[0.3em] text-sm md:text-base font-medium"
            >
              {slides[currentSlide].location}
            </motion.p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground leading-tight">
              {slides[currentSlide].title.split(" ").map((word, i) => (
                <span key={i} className={i === slides[currentSlide].title.split(" ").length - 1 ? "text-primary" : ""}>
                  {word}{" "}
                </span>
              ))}
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Where Every Mistake Becomes a Masterpiece
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
            >
              <Button variant="hero" size="xl" onClick={scrollToReservation}>
                Reserve a Table
              </Button>
              <Button variant="gold-outline" size="xl" onClick={() => document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" })}>
                View Menu
              </Button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="rounded-full border border-border/50 hover:border-primary hover:bg-primary/10"
        >
          <ChevronLeft className="text-foreground" />
        </Button>
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? "w-8 bg-primary" : "bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="rounded-full border border-border/50 hover:border-primary hover:bg-primary/10"
        >
          <ChevronRight className="text-foreground" />
        </Button>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        onClick={() => document.querySelector("#intro")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
      >
        <span className="text-xs uppercase tracking-wider">Scroll Down</span>
        <ChevronDown size={20} />
      </motion.button>
    </section>
  );
};

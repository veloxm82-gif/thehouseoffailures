import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "./ui/button";

const reviews = [
  {
    id: 1,
    name: "Dhananjay Jhala",
    initials: "DJ",
    rating: 5,
    title: "Excellent Ambience",
    text: "Very amazing ambience and lovely service and seating. The menu prices are a bit on the costly side I feel compared to portion sizes but decent sizes. Taste was very good. Servers were nice. Good experience.",
  },
  {
    id: 2,
    name: "Dishant Patel",
    initials: "DP",
    rating: 4,
    title: "Good Food",
    text: "Food is really good. You can taste different cuisine. We tried north indian and it was very delicious. Atmosphere and ambience is also nice. Seating is limited so you might need to wait during busy hours.",
  },
  {
    id: 3,
    name: "Vadodarazfoodie",
    initials: "VF",
    rating: 5,
    title: "Great Quality",
    text: "This restaurant is perfect for those who enjoy authentic flavors, good hospitality, and a welcoming vibe. The owners and staff treat you like family, which shows their true passion for food and service.",
  },
  {
    id: 4,
    name: "Shalu Sharma",
    initials: "SS",
    rating: 4,
    title: "Courteous Staff",
    text: "The food, the ambience, the live music.... You name it, and it was good. But the best part was the staff!!! The staff are so humble, soft spoken, helpful and courteous. I loved my experience there!",
  },
  {
    id: 5,
    name: "Prince Daiya",
    initials: "PD",
    rating: 4,
    title: "Great Service",
    text: "One of the best fine dining vegetarian restaurant in Vadodara. Menu includes Thai, Italian, North Indian and many other food items, with best of taste. They have nice options of mocktails and shakes.",
  },
];

export const ReviewsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const getVisibleReviews = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      result.push(reviews[(currentIndex + i) % reviews.length]);
    }
    return result;
  };

  return (
    <section id="reviews" className="py-24 md:py-32 bg-card/30" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            What Our <span className="text-primary">Guests Say</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-primary">
            <Star className="w-5 h-5 fill-current" />
            <span className="text-lg font-medium">4.6 rating on Google</span>
            <span className="text-muted-foreground">(1,079 reviews)</span>
          </div>
        </motion.div>

        {/* Reviews Carousel */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {getVisibleReviews().map((review, index) => (
              <motion.div
                key={`${review.id}-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl border border-border/50 hover:border-primary/30 transition-colors"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating ? "text-primary fill-current" : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                  {review.title}
                </h3>

                {/* Text */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "{review.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">{review.initials}</span>
                  </div>
                  <span className="text-foreground font-medium">{review.name}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-10">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevReview}
              className="rounded-full border border-border/50 hover:border-primary hover:bg-primary/10"
            >
              <ChevronLeft />
            </Button>
            <div className="flex items-center gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "w-6 bg-primary" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextReview}
              className="rounded-full border border-border/50 hover:border-primary hover:bg-primary/10"
            >
              <ChevronRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

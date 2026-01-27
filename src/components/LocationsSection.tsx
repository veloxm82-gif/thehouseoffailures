import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Phone } from "lucide-react";

export const LocationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="locations" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Our <span className="text-primary">Location</span>
          </h2>
          <p className="text-muted-foreground text-lg">Visit us at Vadodara's finest dining destination</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card p-6 rounded-xl border border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Address</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Plot no 2, Vasna - Bhayli Main Rd, opposite Earth Artica, 
                    Ashwamegh Nagar, Bhayli, Vadodara, Gujarat 390007
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl border border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Sunday<br />
                    <span className="text-primary font-medium">11:00 AM - 11:30 PM</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl border border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Contact</h3>
                  <p className="text-muted-foreground">
                    <a href="tel:+919408888617" className="hover:text-primary transition-colors">
                      +91 94088 88617
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm border border-primary/30">
                Dine-in
              </span>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm border border-primary/30">
                Takeaway
              </span>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm border border-primary/30">
                LGBTQ+ Friendly
              </span>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="rounded-2xl overflow-hidden border border-border/50 h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3709.635327681218!2d73.1388962!3d22.292996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc7003a7b5385%3A0xf77ec0caf55b18d3!2sThe%20house%20of%20failures%20-%20By%20Failure's%20Kitchen%20a%20global%20cuisine%20restaurant%20and%20speciality%20coffee%20bar!5e0!3m2!1sen!2sin!4v1719824077259!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

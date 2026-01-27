import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { UtensilsCrossed, Calendar, Clock, Users, MapPin, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const ReservationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    guests: "",
    venue: "",
    date: "",
    time: "",
    occasion: "",
    specialRequests: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("reservations").insert({
        full_name: formData.fullName.trim(),
        mobile: formData.mobile.trim(),
        guests: parseInt(formData.guests),
        venue: formData.venue,
        date: formData.date,
        time: formData.time,
        occasion: formData.occasion || null,
        special_requests: formData.specialRequests.trim() || null,
      });

      if (error) throw error;

      toast({
        title: "Reservation Submitted!",
        description: "We'll confirm your booking shortly. Thank you!",
      });

      setFormData({
        fullName: "",
        mobile: "",
        guests: "",
        venue: "",
        date: "",
        time: "",
        occasion: "",
        specialRequests: "",
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="reservation" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card p-8 md:p-12 border border-border/50 gold-glow">
            {/* Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6">
                <UtensilsCrossed className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">
                Reserve Your <span className="text-primary">Table</span>
              </h2>
              <p className="text-muted-foreground">Experience culinary excellence</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-foreground">
                  Full Name <span className="text-primary">*</span>
                </Label>
                <Input
                  id="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  required
                  className="bg-secondary/50 border-border/50 focus:border-primary"
                />
              </div>

              {/* Mobile */}
              <div className="space-y-2">
                <Label htmlFor="mobile" className="text-foreground">
                  Mobile Number <span className="text-primary">*</span>
                </Label>
                <Input
                  id="mobile"
                  type="tel"
                  placeholder="Enter your mobile number"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  required
                  className="bg-secondary/50 border-border/50 focus:border-primary"
                />
              </div>

              {/* Guests & Venue */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-foreground flex items-center gap-2">
                    <Users size={16} className="text-primary" />
                    Guests <span className="text-primary">*</span>
                  </Label>
                  <Select value={formData.guests} onValueChange={(value) => setFormData({ ...formData, guests: value })}>
                    <SelectTrigger className="bg-secondary/50 border-border/50">
                      <SelectValue placeholder="Select guests" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} {num === 1 ? "Guest" : "Guests"}
                        </SelectItem>
                      ))}
                      <SelectItem value="7">More than 6</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-foreground flex items-center gap-2">
                    <MapPin size={16} className="text-primary" />
                    Venue <span className="text-primary">*</span>
                  </Label>
                  <Select value={formData.venue} onValueChange={(value) => setFormData({ ...formData, venue: value })}>
                    <SelectTrigger className="bg-secondary/50 border-border/50">
                      <SelectValue placeholder="Select venue" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Restaurant">The House of Failures</SelectItem>
                      <SelectItem value="Cafe">Kaffé Nasha</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-foreground flex items-center gap-2">
                    <Calendar size={16} className="text-primary" />
                    Preferred Date <span className="text-primary">*</span>
                  </Label>
                  <Input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    required
                    min={new Date().toISOString().split("T")[0]}
                    className="bg-secondary/50 border-border/50 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-foreground flex items-center gap-2">
                    <Clock size={16} className="text-primary" />
                    Preferred Time <span className="text-primary">*</span>
                  </Label>
                  <Input
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    required
                    className="bg-secondary/50 border-border/50 focus:border-primary"
                  />
                </div>
              </div>

              {/* Occasion */}
              <div className="space-y-2">
                <Label className="text-foreground">
                  Special Occasion <span className="text-muted-foreground text-sm">(Optional)</span>
                </Label>
                <Select value={formData.occasion} onValueChange={(value) => setFormData({ ...formData, occasion: value })}>
                  <SelectTrigger className="bg-secondary/50 border-border/50">
                    <SelectValue placeholder="Select occasion" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Birthday">Birthday</SelectItem>
                    <SelectItem value="Anniversary">Anniversary</SelectItem>
                    <SelectItem value="Date Night">Date Night</SelectItem>
                    <SelectItem value="Business Meeting">Business Meeting</SelectItem>
                    <SelectItem value="Celebration">Celebration</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Special Requests */}
              <div className="space-y-2">
                <Label className="text-foreground">
                  Special Requests <span className="text-muted-foreground text-sm">(Optional)</span>
                </Label>
                <Textarea
                  placeholder="Any dietary restrictions, seating preferences, or special arrangements..."
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  className="bg-secondary/50 border-border/50 focus:border-primary min-h-[100px]"
                />
              </div>

              <Button
                type="submit"
                variant="reservation"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Send Reservation Request"
                )}
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

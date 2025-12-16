import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechFlow",
    quote: "Mujahid delivered our project on time and exceeded our expectations. His attention to detail and ability to translate complex designs into code is remarkable.",
    avatar: "SJ"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    company: "StartUp Inc",
    quote: "One of the best frontend developers I've worked with. He writes clean, maintainable code and has a great eye for design. Highly recommended!",
    avatar: "MC"
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Creative Director",
    company: "Design Studio",
    quote: "He brought our vision to life perfectly. The animations and interactions he implemented made our website feel truly alive and premium.",
    avatar: "ED"
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-background/50 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mt-2 mb-4 text-white">What Clients Say</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="bg-card/30 border-white/10 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 h-full">
                <CardContent className="p-8 flex flex-col h-full">
                  <Quote className="text-primary/50 mb-6 h-8 w-8" />
                  <p className="text-muted-foreground mb-6 flex-grow leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <Avatar className="h-10 w-10 border border-primary/20">
                      <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${testimonial.name}`} />
                      <AvatarFallback className="bg-primary/10 text-primary">{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold text-white text-sm">{testimonial.name}</h4>
                      <p className="text-xs text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

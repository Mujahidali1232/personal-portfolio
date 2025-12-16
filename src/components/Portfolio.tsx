import { motion } from "framer-motion";
import { DATA } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mt-2 mb-4 text-white">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DATA.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="bg-card/50 border-white/10 overflow-hidden group h-full flex flex-col hover:border-primary/50 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button size="icon" variant="secondary" className="rounded-full" asChild>
                      <a href={project.github} target="_blank" rel="noreferrer"><Github size={20} /></a>
                    </Button>
                    <Button size="icon" className="rounded-full bg-primary text-background hover:bg-primary/90" asChild>
                      <a href={project.link} target="_blank" rel="noreferrer"><ExternalLink size={20} /></a>
                    </Button>
                  </div>
                </div>
                
                <CardHeader className="p-6 pb-2">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-medium text-primary px-2 py-1 bg-primary/10 rounded-full">{project.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                </CardHeader>
                
                <CardContent className="p-6 py-4 flex-grow">
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                </CardContent>
                
                <CardFooter className="p-6 pt-2 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="border-white/10 text-xs text-muted-foreground">
                      {tech}
                    </Badge>
                  ))}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

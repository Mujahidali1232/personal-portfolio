import { DATA } from "@/data/portfolio";
import { Github, Linkedin, Twitter, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
             <h3 className="text-2xl font-bold font-heading text-white">
                Mujahid<span className="text-primary">.dev</span>
             </h3>
             <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
               Crafting digital experiences with pixel-perfect precision and modern technologies.
             </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Socials</h4>
            <div className="flex gap-4">
              <a href={DATA.profile.social.github} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-background transition-all duration-300">
                <Github size={20} />
              </a>
              <a href={DATA.profile.social.linkedin} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-background transition-all duration-300">
                <Linkedin size={20} />
              </a>
              <a href={DATA.profile.social.twitter} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-background transition-all duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Mujahid Ali. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart size={14} className="text-red-500 fill-red-500" />
            <span>in React & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

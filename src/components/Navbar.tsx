import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Portfolio", to: "portfolio" },
  { name: "Skills", to: "skills" },
  { name: "Services", to: "services" },
  { name: "Contact", to: "contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link 
          to="home" 
          smooth={true} 
          duration={500} 
          className="text-2xl font-bold font-heading cursor-pointer text-foreground"
        >
          Mujahid<span className="text-primary">.dev</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-80}
              className="text-muted-foreground hover:text-primary transition-colors cursor-pointer text-sm font-medium"
            >
              {item.name}
            </Link>
          ))}
          <ThemeToggle />
          <Button 
            variant="outline" 
            className="border-primary/50 text-primary hover:bg-primary/10 hover:text-primary"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Let's Talk
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)} className="text-foreground">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border p-6 flex flex-col space-y-4 shadow-2xl animate-in slide-in-from-top-5">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-80}
              className="text-foreground/80 hover:text-primary py-2 text-lg font-medium border-b border-border/50"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

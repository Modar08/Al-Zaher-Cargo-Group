import { Link, useLocation } from "react-router-dom";
import { Ship, Menu, X, Phone, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Track", path: "/track" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-slate-900 py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-rose-600 p-2 rounded-lg group-hover:bg-rose-500 transition-colors">
              <Ship className="w-6 h-6 text-white" />
            </div>
            <span className={cn(
              "text-xl font-bold tracking-tight transition-colors",
              isScrolled ? "text-slate-900" : "text-white"
            )}>
              Al Zaher Cargo
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-rose-500",
                      location.pathname === link.path
                        ? "text-rose-600"
                        : isScrolled ? "text-slate-600" : "text-slate-300"
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 border-l border-slate-700 pl-6">
              <Button asChild variant={isScrolled ? "default" : "outline"} className={cn(!isScrolled && "bg-transparent text-white border-slate-600 hover:bg-slate-800 hover:text-white")}>
                <Link to="/quote">Get Quote</Link>
              </Button>
            </div>
          </nav>

          {/* Mobile Toggle */}
          <button
            className={cn("md:hidden p-2", isScrolled ? "text-slate-900" : "text-white")}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-slate-100">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={cn(
                      "block py-2 text-base font-medium",
                      location.pathname === link.path ? "text-rose-600" : "text-slate-700"
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <Button asChild className="w-full justify-center">
                <Link to="/quote">Get Instant Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

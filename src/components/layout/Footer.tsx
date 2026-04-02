import { Link } from "react-router-dom";
import { Ship, MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-rose-600 p-2 rounded-lg">
                <Ship className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Al Zaher Cargo
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Global logistics solutions since 2000. Delivering speed, reliability, and competitive pricing for all your cargo needs across the UAE, China, Lebanon, and beyond.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-rose-400 transition-colors">About Us</Link></li>
              <li><Link to="/track" className="hover:text-rose-400 transition-colors">Track Shipment</Link></li>
              <li><Link to="/quote" className="hover:text-rose-400 transition-colors">Request a Quote</Link></li>
              <li><Link to="/contact" className="hover:text-rose-400 transition-colors">Contact Us</Link></li>
              <li><Link to="#" className="hover:text-rose-400 transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services/air-freight" className="hover:text-rose-400 transition-colors">Air Freight</Link></li>
              <li><Link to="/services/sea-freight" className="hover:text-rose-400 transition-colors">Sea Freight</Link></li>
              <li><Link to="/services/land-transport" className="hover:text-rose-400 transition-colors">Land Transport</Link></li>
              <li><Link to="/services/customs-clearance" className="hover:text-rose-400 transition-colors">Customs Clearance</Link></li>
              <li><Link to="/services/warehousing" className="hover:text-rose-400 transition-colors">Warehousing</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <span>Al Quoz Industrial Area 3,<br />Dubai, United Arab Emirates</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-rose-500 shrink-0" />
                <span>+971 4 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-rose-500 shrink-0" />
                <span>info@alzahercargo.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Al Zaher Cargo Group. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Plane, Ship, Truck, FileCheck, ArrowRight, ShieldCheck, Clock, Globe2, CheckCircle2, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541889811956-621d9600f600?q=80&w=2070&auto=format&fit=crop" 
            alt="Global Logistics Cargo" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 pt-24 pb-32 md:pt-32 md:pb-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-300 text-sm font-medium mb-6">
              <ShieldCheck className="w-4 h-4" />
              Trusted Global Logistics Since 2000
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Fast, Secure & Global <span className="text-rose-500">Freight Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              We deliver your cargo across the world with unmatched speed, safety, and competitive pricing. From the UAE to China, Lebanon, and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-base">
                <Link to="/quote">Get Instant Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base bg-transparent border-slate-600 text-white hover:bg-slate-800 hover:text-white">
                <Link to="/track">Track Shipment</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base bg-green-600 border-none text-white hover:bg-green-700">
                <a href="https://wa.me/971501234567" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
            <div className="px-4">
              <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">24+</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="px-4">
              <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">10k+</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Happy Clients</div>
            </div>
            <div className="px-4">
              <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">50+</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Countries Served</div>
            </div>
            <div className="px-4">
              <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">3</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Global Hubs</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SNAPSHOT */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Comprehensive Logistics Services</h2>
            <p className="text-lg text-slate-600">End-to-door solutions tailored for your business needs, handling all cargo types including normal, refrigerated, and dangerous goods.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Plane, title: "Air Freight", desc: "Fast, sensitive cargo handling with global shipping reach.", link: "/services/air-freight" },
              { icon: Ship, title: "Sea Freight", desc: "Cost-effective FCL & LCL solutions with competitive rates.", link: "/services/sea-freight" },
              { icon: Truck, title: "Land Transport", desc: "Reliable trucking across GCC, Europe, Turkey & Middle East.", link: "/services/land-transport" },
              { icon: FileCheck, title: "Customs Clearance", desc: "Hassle-free clearance at ports, airports, and free zones.", link: "/services/customs-clearance" },
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                <div className="w-14 h-14 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.desc}</p>
                <Link to={service.link} className="inline-flex items-center text-rose-600 font-medium hover:text-rose-700">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Partner With Al Zaher Cargo?</h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                We don't just move cargo; we optimize your supply chain. Our deep industry expertise and global network ensure your goods arrive on time, every time.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Unmatched Speed", desc: "Optimized routing for the fastest possible delivery times." },
                  { title: "Competitive Pricing", desc: "Leveraging our network to get you the best rates." },
                  { title: "Global Network", desc: "Strategic offices in UAE, China, and Lebanon." },
                  { title: "Door-to-Door Solutions", desc: "Complete end-to-end management of your shipments." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 bg-rose-500/20 p-1 rounded-full h-fit">
                      <CheckCircle2 className="w-5 h-5 text-rose-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                      <p className="text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-rose-500 blur-[100px] opacity-20 rounded-full" />
              <img 
                src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2070&auto=format&fit=crop" 
                alt="Logistics Operations" 
                className="relative rounded-2xl shadow-2xl border border-slate-800"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
            <p className="text-lg text-slate-600">A streamlined, transparent process designed to give you peace of mind from origin to destination.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-slate-100" />
            
            {[
              { step: "01", title: "Request Quote", desc: "Fill out our quick form and get pricing within 30 minutes." },
              { step: "02", title: "Pickup & Pack", desc: "We collect your cargo and ensure it's securely packed." },
              { step: "03", title: "Transit & Clear", desc: "Fast shipping and seamless customs clearance." },
              { step: "04", title: "Safe Delivery", desc: "On-time delivery to the final destination." }
            ].map((item, i) => (
              <div key={i} className="relative text-center pt-8 md:pt-0">
                <div className="w-16 h-16 mx-auto bg-white border-4 border-slate-50 text-rose-600 font-bold text-xl rounded-full flex items-center justify-center shadow-sm relative z-10 mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-rose-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Ship? Get Your Quote in Minutes.</h2>
          <p className="text-rose-100 text-lg mb-10 max-w-2xl mx-auto">
            Experience the reliability of Al Zaher Cargo. Fast response times, competitive rates, and dedicated support.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" variant="dark" className="text-base">
              <Link to="/quote">Request a Quote Now</Link>
            </Button>
            <Button asChild size="lg" className="text-base bg-white text-rose-600 hover:bg-slate-100">
              <a href="tel:+97141234567">Call +971 4 123 4567</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

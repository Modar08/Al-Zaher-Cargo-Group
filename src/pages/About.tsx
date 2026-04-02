import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe2, Users, Award, TrendingUp } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Al Zaher Cargo</h1>
          <p className="text-lg text-slate-300">
            Delivering trust, speed, and reliability across the globe since 2000.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>
                  Established in 2000, Al Zaher Cargo Group began with a simple mission: to simplify global logistics for businesses of all sizes. Over the past two decades, we have grown from a local forwarder into a comprehensive international logistics provider.
                </p>
                <p>
                  With strategic hubs in the UAE, China, and Lebanon, we have built a robust network that spans the globe. Our growth is driven by our commitment to competitive pricing, unmatched speed, and handling every shipment with the utmost care.
                </p>
                <p>
                  Whether it's normal commercial goods, temperature-sensitive cargo, or dangerous materials, our experienced team ensures your supply chain remains uninterrupted.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1565891741441-64926e441838?q=80&w=800&auto=format&fit=crop" alt="Warehouse" className="rounded-2xl w-full h-64 object-cover" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=800&auto=format&fit=crop" alt="Logistics" className="rounded-2xl w-full h-64 object-cover mt-8" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, stat: "2000", label: "Year Established" },
              { icon: Globe2, stat: "3", label: "Global Hubs (UAE, China, Lebanon)" },
              { icon: Users, stat: "10,000+", label: "Satisfied Clients" },
              { icon: TrendingUp, stat: "1M+", label: "Shipments Delivered" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl text-center shadow-sm border border-slate-100">
                <div className="w-12 h-12 mx-auto bg-rose-50 text-rose-600 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">{item.stat}</div>
                <div className="text-slate-600 font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-rose-600 text-white text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-6">Partner with a Logistics Leader</h2>
          <p className="text-rose-100 text-lg mb-8 max-w-2xl mx-auto">
            Experience the difference of working with a team that prioritizes your cargo's safety and speed.
          </p>
          <Button asChild size="lg" variant="dark">
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

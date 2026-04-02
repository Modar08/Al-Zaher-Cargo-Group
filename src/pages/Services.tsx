import { Link } from "react-router-dom";
import { Plane, Ship, Truck, FileCheck, Package, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Services() {
  const services = [
    {
      id: "air-freight",
      icon: Plane,
      title: "Air Freight",
      desc: "When time is critical, our air freight solutions deliver. We offer fast, secure, and globally connected air cargo services for sensitive and urgent shipments.",
      features: ["Express Delivery", "Global Reach", "Sensitive Cargo Handling", "Charter Services"],
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "sea-freight",
      icon: Ship,
      title: "Sea Freight",
      desc: "Cost-effective and reliable sea freight solutions. We handle both Full Container Load (FCL) and Less than Container Load (LCL) with competitive global rates.",
      features: ["FCL & LCL", "Project Cargo", "Refrigerated Containers", "Port-to-Port"],
      image: "https://images.unsplash.com/photo-1494412519320-ce3e59b248ce?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "land-transport",
      icon: Truck,
      title: "Land Transport",
      desc: "Extensive road network connecting the GCC, Europe, Turkey, and the Middle East. Safe and efficient overland transport for all cargo types.",
      features: ["FTL & LTL", "Cross-border", "GPS Tracking", "Specialized Vehicles"],
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "customs-clearance",
      icon: FileCheck,
      title: "Customs Clearance",
      desc: "Navigate complex customs regulations with ease. Our experts ensure swift clearance at ports, airports, and free zones to avoid delays.",
      features: ["Import/Export Docs", "Duty Calculation", "Free Zone Clearance", "Regulatory Compliance"],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "warehousing",
      icon: Package,
      title: "Warehousing & Consolidation",
      desc: "Secure storage and efficient consolidation services. Optimize your inventory management with our strategically located facilities.",
      features: ["Short/Long Term", "Inventory Management", "Pick & Pack", "Distribution"],
      image: "https://images.unsplash.com/photo-1565891741441-64926e441838?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Logistics Services</h1>
          <p className="text-lg text-slate-300">
            Comprehensive, end-to-end supply chain solutions tailored to your specific industry requirements.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12">
            {services.map((service, index) => (
              <div key={service.id} className={`flex flex-col md:flex-row gap-8 items-center bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 space-y-6">
                  <div className="w-16 h-16 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">{service.title}</h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {service.desc}
                  </p>
                  <ul className="grid grid-cols-2 gap-3 pt-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-6">
                    <Button asChild>
                      <Link to={`/services/${service.id}`}>View Service Details</Link>
                    </Button>
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <div className="aspect-video bg-slate-100 rounded-2xl overflow-hidden">
                    {/* Placeholder for service specific image */}
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-slate-100 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Need a Custom Solution?</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            We understand that every business is unique. Contact our experts to design a logistics strategy that perfectly fits your needs.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Talk to an Expert</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

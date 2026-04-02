import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Globe2, Clock, ShieldCheck } from "lucide-react";

const serviceData = {
  "air-freight": {
    title: "Air Freight",
    subtitle: "Fast, reliable, and globally connected.",
    desc: "When time is of the essence, Al Zaher Cargo's Air Freight services provide the speed and reliability you need. We handle everything from small urgent packages to oversized cargo, ensuring safe and timely delivery to airports worldwide.",
    benefits: [
      { title: "Speed", desc: "The fastest transit times available for urgent shipments." },
      { title: "Global Reach", desc: "Access to major airports across all continents." },
      { title: "Security", desc: "Enhanced security protocols for sensitive or high-value cargo." }
    ],
    useCases: ["E-commerce fulfillment", "Perishable goods", "High-value electronics", "Urgent medical supplies"],
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2070&auto=format&fit=crop"
  },
  "sea-freight": {
    title: "Sea Freight",
    subtitle: "Cost-effective global shipping solutions.",
    desc: "Our Sea Freight services offer the most economical way to move large volumes of cargo internationally. With strong relationships with major shipping lines, we guarantee space and competitive rates for both FCL and LCL shipments.",
    benefits: [
      { title: "Cost-Effective", desc: "The most economical choice for heavy and bulky cargo." },
      { title: "Capacity", desc: "Ability to handle massive volumes and oversized items." },
      { title: "Flexibility", desc: "Options for Full Container (FCL) or Less than Container (LCL)." }
    ],
    useCases: ["Heavy machinery", "Automotive parts", "Bulk raw materials", "Large retail inventory"],
    image: "/sea-freight.jpg"
  },
  "land-transport": {
    title: "Land Transport",
    subtitle: "Connecting regions with reliable trucking.",
    desc: "Al Zaher Cargo provides comprehensive overland transportation across the GCC, Europe, Turkey, and the Middle East. Our modern fleet and experienced drivers ensure your cargo arrives safely and on schedule.",
    benefits: [
      { title: "Door-to-Door", desc: "Seamless pickup and delivery directly to your facility." },
      { title: "Regional Coverage", desc: "Extensive network across the Middle East and Europe." },
      { title: "Versatility", desc: "Handling standard, refrigerated, and hazardous materials." }
    ],
    useCases: ["Cross-border trade", "Regional distribution", "Construction materials", "FMCG delivery"],
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop"
  },
  "customs-clearance": {
    title: "Customs Clearance",
    subtitle: "Navigating regulations for smooth transit.",
    desc: "Avoid costly delays at the border. Our dedicated customs clearance experts stay up-to-date with the latest regulations to ensure your shipments clear customs quickly and efficiently at ports, airports, and free zones.",
    benefits: [
      { title: "Expertise", desc: "Deep knowledge of local and international trade laws." },
      { title: "Speed", desc: "Pre-clearance processing to minimize border wait times." },
      { title: "Compliance", desc: "Ensuring all documentation meets legal requirements." }
    ],
    useCases: ["Importing new products", "Exporting manufactured goods", "Free zone transfers", "Complex regulatory items"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop"
  }
};

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const service = serviceData[id as keyof typeof serviceData];

  if (!service) {
    return <div className="py-20 text-center">Service not found.</div>;
  }

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative bg-slate-900 text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <Link to="/services" className="text-rose-400 hover:text-rose-300 font-medium mb-6 inline-flex items-center">
              &larr; Back to Services
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl text-slate-300 mb-8">{service.subtitle}</p>
            <Button asChild size="lg">
              <Link to="/quote">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Overview</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Key Benefits</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                      <p className="text-slate-600">{benefit.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Process</h2>
                <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                  {[
                    "Consultation & Quote Generation",
                    "Documentation & Compliance Check",
                    "Cargo Pickup & Processing",
                    "Transit & Tracking",
                    "Final Delivery"
                  ].map((step, i) => (
                    <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-rose-100 text-rose-600 font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                        {i + 1}
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                        <h4 className="font-bold text-slate-900">{step}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Ideal For</h3>
                <ul className="space-y-4">
                  {service.useCases.map((useCase, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium">{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-rose-600 text-white p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Ready to start?</h3>
                <p className="text-rose-100 mb-6">Get a fast, competitive quote for your {service.title.toLowerCase()} needs.</p>
                <Button asChild variant="dark" className="w-full">
                  <Link to="/quote">Get Quote Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

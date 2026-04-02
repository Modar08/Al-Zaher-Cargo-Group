import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg text-slate-300">
            Our team is ready to assist you with all your logistics needs. Reach out to us via phone, email, or visit our offices.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg mb-1">Phone & WhatsApp</h3>
                      <p className="text-slate-600 mb-2">Available Mon-Sat, 9am to 6pm</p>
                      <a href="tel:+97141234567" className="text-rose-600 font-medium hover:underline block">+971 4 123 4567</a>
                      <a href="https://wa.me/971501234567" className="text-green-600 font-medium hover:underline block mt-1">WhatsApp: +971 50 123 4567</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg mb-1">Email</h3>
                      <p className="text-slate-600 mb-2">We aim to reply within 2 hours</p>
                      <a href="mailto:info@alzahercargo.com" className="text-rose-600 font-medium hover:underline">info@alzahercargo.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg mb-1">Headquarters</h3>
                      <p className="text-slate-600">
                        Al Quoz Industrial Area 3<br />
                        P.O. Box 12345<br />
                        Dubai, United Arab Emirates
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Global Offices */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Global Offices</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl border border-slate-200">
                    <h4 className="font-bold text-slate-900 mb-2">China Hub</h4>
                    <p className="text-sm text-slate-600">Guangzhou, China<br />china@alzahercargo.com</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-slate-200">
                    <h4 className="font-bold text-slate-900 mb-2">Lebanon Hub</h4>
                    <p className="text-sm text-slate-600">Beirut, Lebanon<br />lebanon@alzahercargo.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Simple Form */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">First Name</label>
                    <input type="text" className="w-full h-12 px-4 rounded-lg border border-slate-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Last Name</label>
                    <input type="text" className="w-full h-12 px-4 rounded-lg border border-slate-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Email Address</label>
                  <input type="email" className="w-full h-12 px-4 rounded-lg border border-slate-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all" placeholder="john@company.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Subject</label>
                  <select className="w-full h-12 px-4 rounded-lg border border-slate-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all bg-white">
                    <option>General Inquiry</option>
                    <option>Partnership</option>
                    <option>Careers</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Message</label>
                  <textarea className="w-full p-4 rounded-lg border border-slate-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all min-h-[120px]" placeholder="How can we help you?"></textarea>
                </div>
                <Button type="submit" size="lg" className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

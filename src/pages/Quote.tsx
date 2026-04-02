import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Quote() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const nextStep = () => setStep((s) => Math.min(s + 1, 3));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 py-20">
        <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100 text-center max-w-md mx-auto">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Quote Requested!</h2>
          <p className="text-slate-600 mb-8">
            Thank you for choosing Al Zaher Cargo. One of our logistics experts will review your request and contact you within 30 minutes with a competitive rate.
          </p>
          <Button onClick={() => window.location.href = "/"} size="lg" className="w-full">
            Return to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-[80vh] py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Get Your Shipping Quote</h1>
          <p className="text-slate-600">Fast quotes within 30 minutes. Fill out the details below.</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12 relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-200 -translate-y-1/2 rounded-full z-0" />
          <div 
            className="absolute top-1/2 left-0 h-1 bg-rose-600 -translate-y-1/2 rounded-full z-0 transition-all duration-300"
            style={{ width: `${((step - 1) / 2) * 100}%` }}
          />
          <div className="relative z-10 flex justify-between">
            {[1, 2, 3].map((num) => (
              <div 
                key={num}
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300",
                  step >= num ? "bg-rose-600 text-white" : "bg-white text-slate-400 border-2 border-slate-200"
                )}
              >
                {num}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-3 px-1">
            <span className={cn("text-xs font-medium", step >= 1 ? "text-rose-600" : "text-slate-400")}>Route</span>
            <span className={cn("text-xs font-medium", step >= 2 ? "text-rose-600" : "text-slate-400")}>Details</span>
            <span className={cn("text-xs font-medium", step >= 3 ? "text-rose-600" : "text-slate-400")}>Contact</span>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-slate-100">
          <form onSubmit={step === 3 ? handleSubmit : (e) => { e.preventDefault(); nextStep(); }}>
            
            {/* STEP 1: Route & Type */}
            {step === 1 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Where are you shipping?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Origin Country/City *</label>
                    <input required type="text" className="w-full h-12 px-4 rounded-lg border border-slate-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all" placeholder="e.g. Dubai, UAE" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Destination Country/City *</label>
                    <input required type="text" className="w-full h-12 px-4 rounded-lg border border-slate-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all" placeholder="e.g. London, UK" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Type of Goods *</label>
                  <select required className="w-full h-12 px-4 rounded-lg border border-slate-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all bg-white">
                    <option value="">Select goods type...</option>
                    <option>General Commercial Goods</option>
                    <option>Electronics</option>
                    <option>Perishables / Refrigerated</option>
                    <option>Dangerous Goods / Hazardous</option>
                    <option>Personal Effects</option>
                    <option>Vehicles / Machinery</option>
                  </select>
                </div>
              </div>
            )}

            {/* STEP 2: Details */}
            {step === 2 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Cargo Details</h2>
                
                <div className="space-y-3">
                  <label className="text-sm font-medium text-slate-700">Preferred Shipping Method *</label>
                  <div className="grid grid-cols-3 gap-4">
                    {['Air Freight', 'Sea Freight', 'Land Transport'].map((method) => (
                      <label key={method} className="cursor-pointer">
                        <input type="radio" name="method" className="peer sr-only" required />
                        <div className="text-center p-4 rounded-xl border-2 border-slate-200 peer-checked:border-rose-600 peer-checked:bg-rose-50 hover:border-rose-300 transition-all">
                          <span className="text-sm font-medium text-slate-700 peer-checked:text-rose-700">{method}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 pt-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Total Weight (kg) *</label>
                    <input required type="number" min="1" className="w-full h-12 px-4 rounded-lg border border-slate-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all" placeholder="e.g. 500" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Volume (CBM) / Dimensions</label>
                    <input type="text" className="w-full h-12 px-4 rounded-lg border border-slate-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all" placeholder="e.g. 2 CBM or L x W x H" />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: Contact Info */}
            {step === 3 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Your Contact Details</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Full Name *</label>
                    <input required type="text" className="w-full h-12 px-4 rounded-lg border border-slate-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Company Name</label>
                    <input type="text" className="w-full h-12 px-4 rounded-lg border border-slate-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all" placeholder="Acme Corp" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Email Address *</label>
                    <input required type="email" className="w-full h-12 px-4 rounded-lg border border-slate-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Phone / WhatsApp *</label>
                    <input required type="tel" className="w-full h-12 px-4 rounded-lg border border-slate-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all" placeholder="+971 50 123 4567" />
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-10 pt-6 border-t border-slate-100">
              {step > 1 ? (
                <Button type="button" variant="outline" onClick={prevStep} className="gap-2">
                  <ArrowLeft className="w-4 h-4" /> Back
                </Button>
              ) : (
                <div></div> // Spacer
              )}
              
              <Button type="submit" size="lg" className="gap-2 px-8">
                {step === 3 ? "Submit Request" : "Continue"} 
                {step !== 3 && <ArrowRight className="w-4 h-4" />}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

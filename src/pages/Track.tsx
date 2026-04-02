import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Package, Truck, CheckCircle2 } from "lucide-react";

export default function Track() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [isTracking, setIsTracking] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      setIsTracking(true);
    }
  };

  return (
    <div className="flex flex-col w-full min-h-[80vh] bg-slate-50">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Track Your Shipment</h1>
          <p className="text-lg text-slate-300 mb-10">
            Enter your tracking number below to get real-time updates on your cargo's location and status.
          </p>
          
          <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input 
                type="text" 
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder="Enter Tracking Number (e.g. AZC-12345678)" 
                className="w-full h-14 pl-12 pr-4 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:bg-slate-800 text-lg transition-colors"
                required
              />
            </div>
            <Button type="submit" size="lg" className="h-14 px-8 text-lg shrink-0">
              Track Now
            </Button>
          </form>
        </div>
      </section>

      {/* Results Area */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          {!isTracking ? (
            <div className="text-center py-12 text-slate-500">
              <Package className="w-16 h-16 mx-auto mb-4 text-slate-300" />
              <p className="text-lg">Enter a valid tracking number to see shipment details.</p>
            </div>
          ) : (
            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* Shipment Header */}
              <div className="bg-slate-50 p-6 md:p-8 border-b border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <p className="text-sm font-medium text-slate-500 mb-1">Tracking Number</p>
                  <h2 className="text-2xl font-bold text-slate-900">{trackingNumber.toUpperCase()}</h2>
                </div>
                <div className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium">
                  <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
                  In Transit
                </div>
              </div>

              <div className="p-6 md:p-8">
                {/* Route Overview */}
                <div className="flex items-center justify-between mb-12 relative">
                  <div className="absolute top-1/2 left-8 right-8 h-1 bg-slate-100 -translate-y-1/2 z-0" />
                  <div className="absolute top-1/2 left-8 right-1/2 h-1 bg-rose-500 -translate-y-1/2 z-0" />
                  
                  <div className="relative z-10 flex flex-col items-center gap-2 bg-white px-2">
                    <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center border-4 border-white shadow-sm">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-slate-900">Dubai, UAE</span>
                    <span className="text-xs text-slate-500">Origin</span>
                  </div>
                  
                  <div className="relative z-10 flex flex-col items-center gap-2 bg-white px-2">
                    <div className="w-12 h-12 rounded-full bg-rose-600 text-white flex items-center justify-center border-4 border-white shadow-sm shadow-rose-200">
                      <Truck className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-rose-600">In Transit</span>
                    <span className="text-xs text-slate-500">Current</span>
                  </div>

                  <div className="relative z-10 flex flex-col items-center gap-2 bg-white px-2">
                    <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center border-4 border-white shadow-sm">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-slate-400">London, UK</span>
                    <span className="text-xs text-slate-400">Destination</span>
                  </div>
                </div>

                {/* Timeline */}
                <h3 className="text-lg font-bold text-slate-900 mb-6">Tracking History</h3>
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[120px] before:h-full before:w-0.5 before:bg-slate-200">
                  
                  <div className="relative flex items-start gap-6 md:gap-8">
                    <div className="hidden md:block w-20 text-right shrink-0 pt-1">
                      <div className="text-sm font-bold text-slate-900">Today</div>
                      <div className="text-xs text-slate-500">09:45 AM</div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-rose-100 border-4 border-white flex items-center justify-center shrink-0 z-10 shadow-sm relative">
                      <div className="w-3 h-3 rounded-full bg-rose-600" />
                    </div>
                    <div className="pt-1">
                      <div className="md:hidden mb-1">
                        <span className="text-sm font-bold text-slate-900 mr-2">Today</span>
                        <span className="text-xs text-slate-500">09:45 AM</span>
                      </div>
                      <h4 className="font-bold text-slate-900">Departed Transit Hub</h4>
                      <p className="text-sm text-slate-600">Istanbul, Turkey</p>
                    </div>
                  </div>

                  <div className="relative flex items-start gap-6 md:gap-8">
                    <div className="hidden md:block w-20 text-right shrink-0 pt-1">
                      <div className="text-sm font-bold text-slate-900">Yesterday</div>
                      <div className="text-xs text-slate-500">14:20 PM</div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-slate-100 border-4 border-white flex items-center justify-center shrink-0 z-10 shadow-sm relative">
                      <CheckCircle2 className="w-5 h-5 text-slate-400" />
                    </div>
                    <div className="pt-1">
                      <div className="md:hidden mb-1">
                        <span className="text-sm font-bold text-slate-900 mr-2">Yesterday</span>
                        <span className="text-xs text-slate-500">14:20 PM</span>
                      </div>
                      <h4 className="font-bold text-slate-600">Arrived at Transit Hub</h4>
                      <p className="text-sm text-slate-500">Istanbul, Turkey</p>
                    </div>
                  </div>

                  <div className="relative flex items-start gap-6 md:gap-8">
                    <div className="hidden md:block w-20 text-right shrink-0 pt-1">
                      <div className="text-sm font-bold text-slate-900">Oct 24</div>
                      <div className="text-xs text-slate-500">08:00 AM</div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-slate-100 border-4 border-white flex items-center justify-center shrink-0 z-10 shadow-sm relative">
                      <CheckCircle2 className="w-5 h-5 text-slate-400" />
                    </div>
                    <div className="pt-1">
                      <div className="md:hidden mb-1">
                        <span className="text-sm font-bold text-slate-900 mr-2">Oct 24</span>
                        <span className="text-xs text-slate-500">08:00 AM</span>
                      </div>
                      <h4 className="font-bold text-slate-600">Customs Cleared</h4>
                      <p className="text-sm text-slate-500">Dubai, UAE</p>
                    </div>
                  </div>

                  <div className="relative flex items-start gap-6 md:gap-8">
                    <div className="hidden md:block w-20 text-right shrink-0 pt-1">
                      <div className="text-sm font-bold text-slate-900">Oct 23</div>
                      <div className="text-xs text-slate-500">16:30 PM</div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-slate-100 border-4 border-white flex items-center justify-center shrink-0 z-10 shadow-sm relative">
                      <CheckCircle2 className="w-5 h-5 text-slate-400" />
                    </div>
                    <div className="pt-1">
                      <div className="md:hidden mb-1">
                        <span className="text-sm font-bold text-slate-900 mr-2">Oct 23</span>
                        <span className="text-xs text-slate-500">16:30 PM</span>
                      </div>
                      <h4 className="font-bold text-slate-600">Shipment Picked Up</h4>
                      <p className="text-sm text-slate-500">Al Quoz, Dubai, UAE</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

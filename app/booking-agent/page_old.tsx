'use client';
import React from 'react';
import Link from 'next/link';

export default function BookingAgentPage() {
  return (
    <div className="min-h-screen bg-gray-500 text-white" style={{ fontFamily: 'monospace, Courier, "Courier New"' }}>
      {/* Desktop Background Pattern */}
      <div className="min-h-screen bg-gray-500 p-8" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23404040' fill-opacity='0.1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v22H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z'/%3E%3C/g%3E%3C/svg%3E")`
      }}>
        
        {/* Main Application Window */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gray-300 border-4 border-gray-600" style={{
            borderStyle: 'outset',
            borderTopColor: '#ffffff',
            borderLeftColor: '#ffffff', 
            borderRightColor: '#404040',
            borderBottomColor: '#404040'
          }}>
            
            {/* Window Title Bar */}
            <div className="bg-red-600 px-2 py-1 flex items-center justify-between border-b-2 border-black">
              <div className="flex items-center space-x-2">
                <div className="text-white font-bold text-sm tracking-wider">
                  📅 BOOKING.EXE - BOOK THE COMIC
                </div>
              </div>
              <div className="flex space-x-1">
                <button className="bg-gray-400 border border-gray-600 px-2 py-0 text-black text-xs font-bold hover:bg-gray-300"
                        style={{
                          borderStyle: 'outset',
                          borderTopColor: '#ffffff',
                          borderLeftColor: '#ffffff',
                          borderRightColor: '#404040', 
                          borderBottomColor: '#404040'
                        }}>
                  _
                </button>
                <button className="bg-gray-400 border border-gray-600 px-2 py-0 text-black text-xs font-bold hover:bg-gray-300"
                        style={{
                          borderStyle: 'outset',
                          borderTopColor: '#ffffff',
                          borderLeftColor: '#ffffff',
                          borderRightColor: '#404040',
                          borderBottomColor: '#404040'
                        }}>
                  □
                </button>
                <Link href="/">
                  <button className="bg-gray-400 border border-gray-600 px-2 py-0 text-black text-xs font-bold hover:bg-red-500"
                          style={{
                            borderStyle: 'outset',
                            borderTopColor: '#ffffff',
                            borderLeftColor: '#ffffff',
                            borderRightColor: '#404040',
                            borderBottomColor: '#404040'
                          }}>
                    ×
                  </button>
                </Link>
              </div>
            </div>

        {/* Main Content */}
        <main className="pb-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Glass */}
            <div className="relative overflow-hidden bg-white/10 backdrop-blur-xl rounded-3xl p-10 md:p-12 border border-white/15 shadow-2xl shadow-emerald-500/10">
              <div className="absolute -top-10 -right-10 w-56 h-56 rounded-full bg-emerald-400/20 blur-2xl" />
              <div className="text-center">
                <div className="mb-6 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-400/15 border border-emerald-300/20 text-emerald-200">
                  <FontAwesomeIcon icon={faMasksTheater} className="h-4 w-4" />
                  <span className="text-sm font-medium">Office Entertainer • MC • Roast Master</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
                  "I'll host, roast, and coast your event
                  <span className="text-emerald-300"> without toasting HR.</span>"
                </h2>
                <p className="text-lg md:text-xl text-emerald-100/90 max-w-2xl mx-auto mb-8">
                  One link. Zero back-and-forth. A calendar that respects timezones, buffer windows,
                  and your VP's suspicious "hard stop."
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <div className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-lime-500 text-white font-semibold shadow-lg shadow-emerald-500/25">
                    <FontAwesomeIcon icon={faCalendarCheck} className="mr-2 h-4 w-4" />
                    Coming Soon
                  </div>
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/10 text-emerald-200 hover:bg-white/15 border border-white/15 transition-all"
                  >
                    <FontAwesomeIcon icon={faArrowLeft} className="mr-2 h-4 w-4" />
                    Back to Stage
                  </Link>
                </div>
              </div>
            </div>

            {/* Features */}
            <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/8 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-emerald-300/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-500/20 p-3 rounded-xl">
                    <FontAwesomeIcon icon={faCalendarDays} className="h-6 w-6 text-emerald-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Smart Scheduling</h3>
                    <p className="text-emerald-200/80 text-sm">
                      Lindy's AI handles the back-and-forth so you don't have to. 
                      Finds time slots that actually work for humans.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/8 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-lime-300/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="bg-lime-500/20 p-3 rounded-xl">
                    <FontAwesomeIcon icon={faHandshake} className="h-6 w-6 text-lime-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Event Contracts</h3>
                    <p className="text-emerald-200/80 text-sm">
                      Automated agreements that cover everything from payment to 
                      your rider requirements (yes, even the green M&Ms).
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/8 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-teal-300/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="bg-teal-500/20 p-3 rounded-xl">
                    <FontAwesomeIcon icon={faClock} className="h-6 w-6 text-teal-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Buffer Management</h3>
                    <p className="text-emerald-200/80 text-sm">
                      Automatically adds setup time, breakdown time, and 
                      "recover from that one brutal roast" time.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/8 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-emerald-300/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-500/20 p-3 rounded-xl">
                    <FontAwesomeIcon icon={faShieldHalved} className="h-6 w-6 text-emerald-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">HR-Safe Defaults</h3>
                    <p className="text-emerald-200/80 text-sm">
                      Pre-configured settings that keep the comedy corporate-friendly 
                      and the lawyers happy.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Booking Flow Preview */}
            <div className="mt-12 bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">How It Works</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-emerald-300">1</span>
                  </div>
                  <h4 className="font-semibold text-emerald-200 mb-2">Share Your Link</h4>
                  <p className="text-sm text-emerald-300/80">
                    Send one magic link that handles everything from availability to preferences
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-lime-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-lime-300">2</span>
                  </div>
                  <h4 className="font-semibold text-emerald-200 mb-2">AI Handles Details</h4>
                  <p className="text-sm text-emerald-300/80">
                    Lindy negotiates timing, requirements, and sets expectations automatically
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-teal-300">3</span>
                  </div>
                  <h4 className="font-semibold text-emerald-200 mb-2">Show Up & Roast</h4>
                  <p className="text-sm text-emerald-300/80">
                    Everything's handled. You just need to bring the entertainment
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="mt-12 bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">What Event Planners Say</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-emerald-500/10 rounded-xl p-6">
                  <p className="text-emerald-200/90 mb-4 italic">
                    "Finally, a booking system that doesn't make me want to quit event planning. 
                    It even remembered our company's weird no-swearing policy."
                  </p>
                  <p className="text-emerald-300 font-medium">— Sarah, Corporate Events</p>
                </div>
                <div className="bg-lime-500/10 rounded-xl p-6">
                  <p className="text-emerald-200/90 mb-4 italic">
                    "The AI understood 'family-friendly but still funny' better than most humans. 
                    Our kids' party was a hit without traumatizing anyone."
                  </p>
                  <p className="text-emerald-300 font-medium">— Mike, Birthday Dad</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

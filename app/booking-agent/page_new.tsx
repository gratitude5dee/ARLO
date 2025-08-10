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

            {/* Window Content */}
            <div className="p-8 bg-black">
              {/* Header */}
              <div className="border-2 border-red-600 p-6 mb-8 bg-black">
                <div className="text-center">
                  <div className="text-red-600 text-5xl font-bold mb-4 tracking-wider">
                    BOOK THE COMIC
                  </div>
                  <div className="bg-red-600 text-black px-4 py-2 inline-block font-bold text-sm mb-4">
                    [LINDY-POWERED SCHEDULING • GREEN M&MS INCLUDED]
                  </div>
                  <div className="text-white text-lg font-mono max-w-3xl mx-auto">
                    &gt; AUTOMATED BOOKING AGENT
                    <br />
                    &gt; HANDLES RIDERS, SCHEDULES, NEGOTIATIONS  
                    <br />
                    &gt; NO HUMAN INTERVENTION REQUIRED
                  </div>
                </div>
              </div>

              {/* Coming Soon Notice */}
              <div className="border-4 border-red-600 p-8 mb-8 bg-black text-center">
                <div className="text-red-600 text-4xl font-bold mb-4">
                  [SYSTEM INITIALIZING...]
                </div>
                <div className="text-white text-xl font-mono mb-6">
                  BOOKING AGENT CURRENTLY IN DEVELOPMENT
                  <br />
                  STAND BY FOR AUTOMATED COMEDY SCHEDULING
                </div>
                <div className="bg-black border-2 border-red-600 text-red-600 px-6 py-3 inline-block text-lg font-bold">
                  [COMING SOON]
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                
                <div className="border-2 border-red-600 p-6 bg-black">
                  <div className="text-center">
                    <div className="text-4xl mb-4">📅</div>
                    <div className="text-red-600 font-bold text-xl mb-4">SMART SCHEDULING</div>
                    <div className="text-sm font-mono text-white">
                      LINDY AI HANDLES THE BACK-AND-FORTH
                      <br />
                      FINDS TIME SLOTS THAT WORK
                      <br />
                      NO MORE EMAIL PING-PONG
                    </div>
                  </div>
                </div>

                <div className="border-2 border-red-600 p-6 bg-black">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🤝</div>
                    <div className="text-red-600 font-bold text-xl mb-4">CONTRACT NEGOTIATION</div>
                    <div className="text-sm font-mono text-white">
                      AUTOMATICALLY HANDLES RIDERS
                      <br />
                      NEGOTIATES RATES & TERMS
                      <br />
                      ENSURES GREEN M&MS CLAUSE
                    </div>
                  </div>
                </div>

                <div className="border-2 border-red-600 p-6 bg-black">
                  <div className="text-center">
                    <div className="text-4xl mb-4">⏰</div>
                    <div className="text-red-600 font-bold text-xl mb-4">24/7 AVAILABILITY</div>
                    <div className="text-sm font-mono text-white">
                      RESPONDS TO INQUIRIES INSTANTLY
                      <br />
                      HANDLES MULTIPLE TIMEZONES
                      <br />
                      NEVER SLEEPS, NEVER EATS
                    </div>
                  </div>
                </div>

                <div className="border-2 border-red-600 p-6 bg-black">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🛡️</div>
                    <div className="text-red-600 font-bold text-xl mb-4">HR-COMPLIANT</div>
                    <div className="text-sm font-mono text-white">
                      AUTOMATIC CONTENT FILTERING
                      <br />
                      CORPORATE-FRIENDLY ROASTS
                      <br />
                      ZERO LAWSUITS GUARANTEED*
                    </div>
                  </div>
                </div>

              </div>

              {/* Quote Section */}
              <div className="border-4 border-red-600 p-6 mb-8 bg-black">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-red-600 mb-4">
                    "FINALLY, A BOOKING AGENT THAT DOESN'T TAKE 20%
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-4">
                    AND ACTUALLY RETURNS CALLS."
                  </div>
                  <div className="text-sm font-mono text-white">
                    &gt; AUTOMATED SCHEDULING • RIDER MANAGEMENT • TALENT COORDINATION
                    <br />
                    &gt; ALL THE EFFICIENCY, NONE OF THE ATTITUDE
                  </div>
                </div>
              </div>

              {/* Back Button */}
              <div className="text-center">
                <Link href="/">
                  <div className="border-4 border-red-600 bg-black hover:bg-red-600 hover:text-black transition-colors duration-150 px-8 py-4 inline-block">
                    <div className="font-bold text-xl">
                      ← BACK TO MAIN PROGRAM
                    </div>
                  </div>
                </Link>
              </div>

              {/* Footer */}
              <div className="mt-8 text-center">
                <div className="text-xs font-mono text-red-600">
                  * LEGAL DISCLAIMER: WE'RE NOT LAWYERS, JUST COMEDIANS WITH AI
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

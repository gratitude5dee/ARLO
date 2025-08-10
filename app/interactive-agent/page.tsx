'use client';
import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBrain, 
  faArrowLeft, 
  faCog, 
  faMasksTheater, 
  faWandMagicSparkles,
  faMicrophoneLines,
  faShieldHalved,
  faStar,
  faTimes
} from '@fortawesome/free-solid-svg-icons';

export default function InteractiveAgentPage() {
  return (
    <div className="min-h-screen bg-black text-white font-mono">
      {/* Neo-Brutalist Window Frame */}
      <div className="min-h-screen bg-black p-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Window */}
          <div className="border-4 border-red-600 bg-black">
            {/* Title Bar */}
            <div className="bg-red-600 px-4 py-2 flex items-center justify-between border-b-4 border-red-600">
              <div className="text-white font-bold text-sm tracking-wider">
                VIRTUALMC.EXE
              </div>
              <Link href="/" className="text-white font-bold text-lg hover:bg-red-700 px-2">
                <FontAwesomeIcon icon={faTimes} className="h-4 w-4" />
              </Link>
            </div>

            {/* Window Content */}
            <div className="p-8 bg-black">
              {/* Header */}
              <div className="border-2 border-red-600 p-6 mb-8 bg-black">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎭</div>
                  <div className="text-red-600 text-4xl font-bold mb-4 tracking-wider">
                    VIRTUAL MC
                  </div>
                  <div className="bg-red-600 text-black px-4 py-2 inline-block font-bold text-sm mb-4">
                    [HEDRA-POWERED AVATARS • REAL PERSONALITY]
                  </div>
                  <div className="text-white text-lg font-mono">
                    &gt; "I'M BASICALLY A HOLOGRAM WITH BETTER TIMING."
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="border-4 border-red-600 p-6 mb-8 bg-black">
                <div className="text-center mb-8">
                  <div className="bg-black border-2 border-red-600 text-red-600 px-6 py-3 inline-block text-xl font-bold mb-6">
                    [COMING SOON]
                  </div>
                  <div className="text-white text-lg font-mono mb-6">
                    &gt; HEDRA'S VISUAL AI MEETS COMEDY GOLD
                    <br />
                    &gt; DEPLOY LIFELIKE AVATARS THAT HOST EVENTS
                    <br />
                    &gt; ROAST ATTENDEES, NEVER NEED BATHROOM BREAKS
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                  <Link
                    href="/voice-agent-original"
                    className="bg-red-600 text-black hover:bg-black hover:text-red-600 border-2 border-red-600 transition-colors px-6 py-3 font-bold text-sm"
                  >
                    [TRY ROAST MASTER INSTEAD]
                  </Link>
                  <Link
                    href="/"
                    className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-black transition-colors px-6 py-3 font-bold text-sm"
                  >
                    &lt; BACK TO STAGE
                  </Link>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="border-2 border-red-600 p-4 bg-black">
                  <div className="text-red-600 font-bold mb-2 text-sm">[LIFELIKE AVATARS]</div>
                  <div className="text-white text-xs font-mono">
                    HEDRA'S CUTTING-EDGE VISUAL AI
                    <br />
                    CREATES AVATARS SO REALISTIC
                    <br />
                    YOU'LL FORGET THEY'RE NOT JUDGING
                    <br />
                    YOUR POWERPOINT
                  </div>
                </div>

                <div className="border-2 border-red-600 p-4 bg-black">
                  <div className="text-red-600 font-bold mb-2 text-sm">[INSTANT HOSTING]</div>
                  <div className="text-white text-xs font-mono">
                    DEPLOY AN MC THAT NEVER GETS
                    <br />
                    STAGE FRIGHT, NEVER GOES OVERTIME
                    <br />
                    NEVER ASKS FOR DRINK TICKETS
                  </div>
                </div>

                <div className="border-2 border-red-600 p-4 bg-black">
                  <div className="text-red-600 font-bold mb-2 text-sm">[HR-SAFE COMEDY]</div>
                  <div className="text-white text-xs font-mono">
                    SMART ENOUGH TO ROAST
                    <br />
                    WISE ENOUGH TO KNOW WHEN TO STOP
                    <br />
                    PERFECT FOR CORPORATE EVENTS
                    <br />
                    WHERE FUN HAS BOUNDARIES
                  </div>
                </div>

                <div className="border-2 border-red-600 p-4 bg-black">
                  <div className="text-red-600 font-bold mb-2 text-sm">[ZERO PREP TIME]</div>
                  <div className="text-white text-xs font-mono">
                    NO REHEARSALS, NO RIDER DEMANDS
                    <br />
                    NO DIVA MOMENTS
                    <br />
                    POINT, CLICK, WATCH MAGIC HAPPEN
                  </div>
                </div>
              </div>

              {/* Coming Soon Details */}
              <div className="border-4 border-red-600 p-6 mb-8 bg-black">
                <div className="text-center mb-6">
                  <div className="text-red-600 font-bold text-xl mb-4">[DEVELOPMENT ROADMAP]</div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-red-600 p-4">
                    <div className="text-center">
                      <div className="text-2xl mb-2">🎭</div>
                      <div className="text-red-600 font-bold mb-2 text-sm">[MULTIPLE PERSONALITIES]</div>
                      <div className="text-white text-xs font-mono">
                        CHOOSE YOUR MC STYLE:
                        <br />
                        • CORPORATE FRIENDLY
                        <br />
                        • SLIGHTLY EDGY
                        <br />
                        • FULL ROAST MODE
                      </div>
                    </div>
                  </div>

                  <div className="border border-red-600 p-4">
                    <div className="text-center">
                      <div className="text-2xl mb-2">🎯</div>
                      <div className="text-red-600 font-bold mb-2 text-sm">[EVENT-AWARE]</div>
                      <div className="text-white text-xs font-mono">
                        AVATARS THAT KNOW:
                        <br />
                        • YOUR AGENDA
                        <br />
                        • YOUR ATTENDEES
                        <br />
                        • YOUR INSIDE JOKES
                      </div>
                    </div>
                  </div>

                  <div className="border border-red-600 p-4">
                    <div className="text-center">
                      <div className="text-2xl mb-2">📱</div>
                      <div className="text-red-600 font-bold mb-2 text-sm">[MULTI-PLATFORM]</div>
                      <div className="text-white text-xs font-mono">
                        DEPLOY ON:
                        <br />
                        • ZOOM / TEAMS
                        <br />
                        • PROJECT ON OFFICE WALL
                        <br />
                        • HOLOGRAPHIC DISPLAYS
                      </div>
                    </div>
                  </div>

                  <div className="border border-red-600 p-4">
                    <div className="text-center">
                      <div className="text-2xl mb-2">⚡</div>
                      <div className="text-red-600 font-bold mb-2 text-sm">[REAL-TIME REACTIONS]</div>
                      <div className="text-white text-xs font-mono">
                        RESPONDS TO AUDIENCE
                        <br />
                        ADAPTS PERFORMANCE
                        <br />
                        ON THE FLY
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status Bar */}
              <div className="border-2 border-red-600 p-3 bg-black">
                <div className="flex items-center justify-between text-xs font-mono">
                  <div className="text-red-600">STATUS: DEVELOPMENT IN PROGRESS</div>
                  <div className="text-white">HEDRA_INTEGRATION.DLL LOADING...</div>
                  <div className="text-red-600">MEMORY: 0% USED</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

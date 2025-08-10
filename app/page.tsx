'use client';
import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Neural Network Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="neural-grid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="5" cy="5" r="0.5" fill="currentColor" className="text-blue-400"/>
                <line x1="0" y1="5" x2="10" y2="5" stroke="currentColor" strokeWidth="0.1" className="text-blue-300"/>
                <line x1="5" y1="0" x2="5" y2="10" stroke="currentColor" strokeWidth="0.1" className="text-blue-300"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#neural-grid)"/>
          </svg>
        </div>
        {/* Animated Data Streams */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-1 h-20 bg-gradient-to-b from-blue-400 to-transparent animate-pulse"></div>
          <div className="absolute top-40 right-20 w-1 h-32 bg-gradient-to-b from-purple-400 to-transparent animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/4 w-1 h-24 bg-gradient-to-b from-cyan-400 to-transparent animate-pulse animation-delay-4000"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="p-6 border-b border-blue-800/30">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl animate-pulse opacity-50"></div>
                <svg className="w-7 h-7 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  ARLO
                </h1>
                <p className="text-sm text-blue-300 font-mono">Audio-visual Reinforcement Learning Optimizer</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#capabilities" className="text-blue-300 hover:text-white transition-colors font-mono text-sm">CAPABILITIES</a>
              <a href="#framework" className="text-blue-300 hover:text-white transition-colors font-mono text-sm">FRAMEWORK</a>
              <Link href="/voice-agent-original" className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-mono text-sm border border-blue-500/30">
                INITIALIZE SYSTEM
              </Link>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <main className="flex-1 flex items-center justify-center px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-12">
              <div className="mb-6">
                <span className="inline-block bg-blue-900/50 border border-blue-700/50 px-4 py-2 rounded-lg text-blue-300 font-mono text-sm mb-4">
                  [SYSTEM STATUS: ONLINE]
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold mb-8 font-mono">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  MULTIMODAL
                </span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  RL OPTIMIZER
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-blue-200 max-w-5xl mx-auto leading-relaxed font-mono">
                Advanced AI assistant specialized in training, analyzing, and optimizing reinforcement learning systems 
                that process multimodal audio-visual input with real-time observational capabilities.
              </p>
            </div>

            {/* Core Capabilities Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-blue-700/30 hover:border-blue-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 font-mono text-blue-300">COMPUTER VISION</h3>
                <p className="text-blue-200 text-sm leading-relaxed">
                  Object detection, scene understanding, visual feature extraction for policy networks with real-time analysis capabilities.
                </p>
                <div className="mt-4 text-xs text-blue-400 font-mono">
                  [FEATURES: YOLO, ResNet, Attention Maps]
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-700/30 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 font-mono text-purple-300">AUDIO PROCESSING</h3>
                <p className="text-purple-200 text-sm leading-relaxed">
                  Speech recognition, sound event detection, audio feature engineering for decision making with spectral analysis.
                </p>
                <div className="mt-4 text-xs text-purple-400 font-mono">
                  [FEATURES: Mel-Scale, FFT, MFCC]
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-cyan-700/30 hover:border-cyan-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 font-mono text-cyan-300">RL ALGORITHMS</h3>
                <p className="text-cyan-200 text-sm leading-relaxed">
                  PPO, SAC, A3C, Rainbow DQN with multimodal adaptations and real-time policy optimization.
                </p>
                <div className="mt-4 text-xs text-cyan-400 font-mono">
                  [ALGORITHMS: PPO, SAC, A3C, DQN]
                </div>
              </div>
            </div>

            {/* System Metrics Display */}
            <div className="bg-slate-800/30 backdrop-blur-lg rounded-2xl p-8 border border-blue-700/30 mb-12">
              <h3 className="text-2xl font-bold mb-6 font-mono text-blue-300">REAL-TIME SYSTEM METRICS</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 font-mono">99.7%</div>
                  <div className="text-sm text-blue-300 font-mono">UPTIME</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 font-mono">2.3ms</div>
                  <div className="text-sm text-purple-300 font-mono">LATENCY</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 font-mono">1.2M</div>
                  <div className="text-sm text-cyan-300 font-mono">PARAMETERS</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 font-mono">24/7</div>
                  <div className="text-sm text-green-300 font-mono">MONITORING</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/voice-agent-original" className="group bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-2xl border border-blue-500/30 font-mono">
                <span className="flex items-center space-x-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>INITIALIZE ARLO SYSTEM</span>
                </span>
              </Link>
              <button className="group bg-slate-800/50 backdrop-blur-lg px-8 py-4 rounded-xl text-lg font-semibold border border-blue-700/30 hover:border-blue-500/50 transition-all duration-200 font-mono">
                <span className="flex items-center space-x-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <span>VIEW ANALYTICS</span>
                </span>
              </button>
            </div>
          </div>
        </main>

        {/* Operational Framework Section */}
        <section id="framework" className="py-20 px-6 border-t border-blue-800/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold mb-6 font-mono">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  OPERATIONAL FRAMEWORK
                </span>
              </h3>
              <p className="text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed font-mono">
                Advanced multimodal processing pipeline with real-time feedback loops and adaptive optimization strategies.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold font-mono">01</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 font-mono text-blue-300">OBSERVATION PROCESSING</h4>
                    <p className="text-blue-200 text-sm leading-relaxed">
                      Analyze visual components, process audio signals, identify multimodal correlations and temporal dependencies.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold font-mono">02</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 font-mono text-purple-300">LEARNING OPTIMIZATION</h4>
                    <p className="text-purple-200 text-sm leading-relaxed">
                      Monitor training metrics, identify convergence issues, recommend architecture modifications for better integration.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold font-mono">03</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 font-mono text-cyan-300">REAL-TIME FEEDBACK</h4>
                    <p className="text-cyan-200 text-sm leading-relaxed">
                      Observe agent performance, provide immediate diagnostic insights, suggest policy adjustments based on patterns.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-blue-700/30">
                <div className="aspect-video bg-gradient-to-br from-slate-900 to-blue-900 rounded-xl flex items-center justify-center border border-blue-700/30">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <p className="text-blue-300 font-mono text-sm">LIVE SYSTEM MONITORING</p>
                    <p className="text-blue-400 font-mono text-xs mt-2">[REAL-TIME METRICS]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-blue-800/30">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-mono">
                ARLO
              </span>
            </div>
            <p className="text-blue-300 mb-6 font-mono text-sm">
              Advanced AI assistant specialized in audio-visual reinforcement learning optimization.
            </p>
            <div className="flex justify-center space-x-8 text-sm text-blue-400 font-mono">
              <a href="#" className="hover:text-white transition-colors">DOCUMENTATION</a>
              <a href="#" className="hover:text-white transition-colors">API REFERENCE</a>
              <a href="#" className="hover:text-white transition-colors">SYSTEM STATUS</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '@fortawesome/fontawesome-svg-core/styles.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ARLO - Audio-visual Reinforcement Learning Optimizer",
  description: "Advanced AI assistant specialized in training, analyzing, and optimizing reinforcement learning systems that process multimodal audio-visual input with real-time observational capabilities.",
  keywords: ["reinforcement learning", "audio-visual", "multimodal AI", "RL optimization", "computer vision", "audio processing", "PPO", "SAC", "A3C", "DQN", "neural networks", "policy optimization"],
  authors: [{ name: "ARLO AI System" }],
  openGraph: {
    title: "ARLO - Audio-visual Reinforcement Learning Optimizer",
    description: "Advanced AI assistant specialized in training, analyzing, and optimizing reinforcement learning systems that process multimodal audio-visual input with real-time observational capabilities.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ARLO - Audio-visual Reinforcement Learning Optimizer",
    description: "Advanced AI assistant specialized in training, analyzing, and optimizing reinforcement learning systems that process multimodal audio-visual input with real-time observational capabilities.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}

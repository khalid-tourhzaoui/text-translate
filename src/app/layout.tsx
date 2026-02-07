
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Black_Ops_One, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

// Local Fonts (Geist)
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Google Fonts - Neobrutalist Style
const blackOpsOne = Black_Ops_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

// Metadata
export const metadata: Metadata = {
  title: {
    default: "Smart Language Converter | Instant Translation",
    template: "%s | Smart Language Converter"
  },
  description: "Revolutionize communication with instant translations in multiple languages. Translate text, files, and links effortlessly with our AI-powered Smart Language Converter.",
  keywords: [
    "Language Converter",
    "Translation App",
    "Text Translation",
    "File Translation",
    "Instant Translator",
    "Smart Translator",
    "AI Translation",
    "Multilingual",
    "Real-time Translation",
    "Document Translation",
    "Speech to Text",
    "Text to Speech",
  ],
  authors: [
    { 
      name: "KHALID TOURHZAOUI", 
      url: "https://khalid-tourhzaoui.vercel.app/" 
    }
  ],
  creator: "KHALID TOURHZAOUI",
  publisher: "KHALID TOURHZAOUI",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://khalid-tourhzaoui.vercel.app/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://khalid-tourhzaoui.vercel.app/",
    title: "Smart Language Converter | Instant Translation",
    description: "Revolutionize communication with instant translations in multiple languages.",
    siteName: "Smart Language Converter",
    images: [
      {
        url: "/og-image.png", // Add your OG image
        width: 1200,
        height: 630,
        alt: "Smart Language Converter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Language Converter | Instant Translation",
    description: "Revolutionize communication with instant translations in multiple languages.",
    images: ["/twitter-image.png"], // Add your Twitter image
    creator: "@yourusername", // Add your Twitter handle
  },
  icons: {
    icon: [
      { url: "/traduction.png" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
    shortcut: ["/traduction.png"],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className={`${blackOpsOne.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/traduction.png" />
        
        {/* Preconnect to Google Fonts for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#F97316" />
        
        {/* Apple Web App */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Smart Translator" />
      </head>
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-body antialiased`}
        suppressHydrationWarning
      >
        {/* Main Content */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Preline Script */}
        <Script
          src="/node_modules/preline/dist/preline.js"
          strategy="afterInteractive"
        />
        
        {/* Analytics (Optional - Add your analytics) */}
        {/* 
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'YOUR_GA_ID');
          `}
        </Script>
        */}
      </body>
    </html>
  );
}
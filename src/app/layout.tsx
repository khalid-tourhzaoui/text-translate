import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Smart Language Converter",
  description: "Revolutionize communication with instant translations in multiple languages. Translate text, files, and links effortlessly.",
  keywords: [
    "Language Converter",
    "Translation App",
    "Text Translation",
    "File Translation",
    "Instant Translator",
    "Smart Translator",
  ],
  authors: [{ name: "KHALID", url: "https://khalid-tourhzaoui.vercel.app/" }],
  viewport: "width=device-width, initial-scale=1",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" type="image/png" href="/traduction.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      <script src="./node_modules/preline/dist/preline.js"></script>
      </body>
    </html>
  );
}


import localFont from "next/font/local";
import { Suspense } from "react";
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

export const metadata = {
  title: "Seacology Portal",
  description: "Field Representative Portal",
  icons: [
    {
      rel: 'icon',
      type: 'image/jpg',
      sizes: '32x32',
      url: 'https://cdn.vectorstock.com/i/1000v/41/85/water-drop-icon-vector-9694185.jpg',
    },
  ]
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Suspense>
          {children}
        </Suspense>
      </body>
    </html>
  );
}

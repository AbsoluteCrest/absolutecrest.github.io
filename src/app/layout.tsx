import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/app/components/NavBar";

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

const poppinsRegular = localFont({
  src: "./fonts/PoppinsRegular.woff",
  variable: "--font-poppin-regular",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "AbsoluteCrest - portfolio",
  description: "My portfolio",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body
          className={`${geistSans.variable} ${geistMono.variable} ${poppinsRegular.variable}antialiased`}
      >
      //<NavBar />
      {children}

      </body>
      </html>
  );
}

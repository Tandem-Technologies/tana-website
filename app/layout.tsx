import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tana - AI Clinic Receptionist",
  description:
    "Meet Tana. Your 24/7 Patient Concierge. Tana handles patient calls, books appointments, and answers queries instantly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import React from "react";
import '../global.css';

export const metadata: Metadata = {
  title: "TalkerBook",
  description: "Bilblioteca online gratuita",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="font-montserrat">{children}</body>
    </html>
  );
}
import './globals.css';
import {IBM_Plex_Sans} from 'next/font/google';
import React from 'react';
import {Metadata} from 'next';

const IBMPlexSans = IBM_Plex_Sans({
  weight: ['300', '400', '500'],
  display: 'swap',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Siklid',
  description: 'Spaced Repetition Flashcards',
};

export type HomeLayoutProps = {
  children: React.ReactNode;
}

export default function RootLayout({children}: HomeLayoutProps) {
  return (
      <html lang="en">
      <body className={IBMPlexSans.className}>{children}</body>
      </html>
  );
}

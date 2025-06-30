// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Geist, Geist_Mono, Montserrat } from 'next/font/google'
import Navbar from './components/Navbar'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
  // This is the only place you ever configure your origin
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_ORIGIN || 'http://localhost:3000'
  ),

  title: {
    default: 'Salon Lepote Goga – Frizerski & Kozmetički Salon u Pančevu',
    template: '%s | Salon Lepote Goga',
  },
  description:
    'Salon Lepote Goga je vodeći salon lepote u Pančevu. Nudimo frizerske, kozmetičke i anti-aging tretmane profesionalnim Mounir proizvodima.',
  keywords: [
    'salon lepote goga',
    'frizerski salon pančevo',
    'kozmetički salon pančevo',
    'Mounir proizvodi',
    'balayage pančevo',
    'anti-aging tretmani',
  ],

  openGraph: {
    // now uses relative path which is resolved against metadataBase
    images: [
      {
        url: '/salon-goga-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Salon Lepote Goga interijer',
      },
    ],
    title: 'Salon Lepote Goga – Frizerski & Kozmetički Salon u Pančevu',
    description:
      'Profesionalni frizerski i kozmetički tretmani u Pančevu, sa fokusom na kvalitet i Mounir proizvode.',
    siteName: 'Salon Lepote Goga',
    locale: 'sr_RS',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    images: ['/salon-goga-home.jpg'],
    title: 'Salon Lepote Goga – Frizerski & Kozmetički Salon u Pančevu',
    description:
      'Posetite nas za vrhunske frizerske, kozmetičke i anti-aging usluge u Pančevu.',
  },

  icons: {
    icon: '/favicon.ico',           // your favicon file in public/
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="sr"
      className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable}`}
    >
      <body className={montserrat.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

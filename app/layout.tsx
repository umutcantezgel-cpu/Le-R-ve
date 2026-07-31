import type { Metadata } from 'next'
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import StickyBookNow from '@/components/StickyBookNow'

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair'
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta'
})

export const metadata: Metadata = {
  title: 'Le Rêve - Ein Wahrer Traum',
  description: 'Ihr Rückzugsort für Entspannung und mütterliches Wohlbefinden.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${playfair.variable} ${jakarta.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL,GRAD,opsz@300,0..1,0,24&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body-md text-body-md bg-background text-on-background antialiased selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow pt-[88px] md:pt-[104px]">
          {children}
        </main>
        <Footer />
        <StickyBookNow />
      </body>
    </html>
  )
}

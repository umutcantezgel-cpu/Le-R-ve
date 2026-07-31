import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import StickyBookNow from '@/components/StickyBookNow'

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
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet" />
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

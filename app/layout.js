// app/layout.js
import './globals.css'
import Header from './components/header'
import Footer from './components/footer'
import { SearchProvider } from './context/SearchContext'
import { Inter } from 'next/font/google' // Import the font

// Configure the font
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Fonts',
  description: 'A curated collection of beautiful fonts to inspire your next creative project.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* This link remains for the preview fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Allura&family=Anton&family=Caveat:wght@400..700&family=Kaushan+Script&family=Noto+Color+Emoji&family=Noto+Sans+JP:wght@100..900&family=Oswald:wght@200..700&family=Pacifico&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Press+Start+2P&family=Winky+Rough:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet"></link>
      </head>
      {/* Apply the Inter font and a clean background to the entire app */}
      <body className={`${inter.className} bg-slate-50 text-slate-800 antialiased flex flex-col min-h-screen`}>
        <SearchProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </SearchProvider>
      </body>
    </html>
  )
}
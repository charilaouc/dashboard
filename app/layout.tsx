import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import NavBar from './components/header/NavBar'
import Footer from './components/footer/Footer'

const roboto = Roboto({ subsets: ['latin'], weight: ['400','700'] })

export const metadata: Metadata = {
  title: 'Cosmos Order Ltd',
  description: 'Assembly ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className="flex flex-col min-h-screen">
          <NavBar/>
          <main className="flex-grow">{children}</main>
          <Footer/>
        </div>
      </body>
    </html>
  )
}

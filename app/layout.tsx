import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ToasterContext from './context/ToasterContext'
import AuthContext from './context/AuthContext'
import ActiveStatus from './components/ActiveStatus'
import Navbar from './components/navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aggie Advise',
  description: 'Aggie Advise'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>

          <ToasterContext />
          <ActiveStatus />
          {children}
        </AuthContext>
      </body>
    </html>
  )
}

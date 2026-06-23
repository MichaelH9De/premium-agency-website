import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Premium Agency - Expert Services & Consulting',
  description: 'High-value information-based agency providing expert consulting and strategic guidance',
  keywords: 'agency, consulting, services, premium, expert',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}

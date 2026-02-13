import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tanvir Vhora - Full Stack Developer & UI/UX Designer',
  description: 'Portfolio of Tanvir Vhora - Full Stack Developer specializing in React, Next.js, and UI/UX Design. Building beautiful and responsive web applications.',
  keywords: ['Tanvir Vhora', 'Full Stack Developer', 'UI/UX Designer', 'React', 'Next.js', 'Web Developer', 'Portfolio'],
  authors: [{ name: 'Tanvir Vhora' }],
  openGraph: {
    title: 'Tanvir Vhora - Full Stack Developer & UI/UX Designer',
    description: 'Portfolio showcasing web development and UI/UX design projects',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

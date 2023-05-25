import './globals.css'

export const metadata = {
  title: 'Portifolio',
  description: 'Portifolio de Felipe Momesso',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      
    </html>
  )
}

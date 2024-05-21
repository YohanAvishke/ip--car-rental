import type { Metadata } from "next"
import { inter } from "@/app/components/fonts"
import "@/app/globals.css"

export const metadata: Metadata = {
  title: "Drive Easy",
  description: "Classical Car Rental Company"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}

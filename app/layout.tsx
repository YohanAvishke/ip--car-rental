import type { Metadata } from "next"
import { inter } from "@/app/components/fonts"
import "@/app/globals.css"
import { ThemeProvider } from "@/app/components/theme-provider"

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
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

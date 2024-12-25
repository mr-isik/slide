import { ClerkProvider } from "@clerk/nextjs"
import "./globals.css"
import { ThemeProvider } from "@/providers/theme-provider"

import { Plus_Jakarta_Sans } from "next/font/google"
import { Metadata } from "next"
import ReactQueryProvider from "@/providers/react-query-provider"
import { Toaster } from "@/components/ui/sonner"

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Slide",
  description: "Automate DMs and comments on Instagram",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body suppressHydrationWarning className={jakarta.className}>
          <ThemeProvider
            enableSystem
            attribute={"class"}
            defaultTheme="system"
            disableTransitionOnChange
          >
            <ReactQueryProvider>{children}</ReactQueryProvider>
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}

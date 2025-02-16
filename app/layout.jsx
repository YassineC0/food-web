import { Inter } from "next/font/google"
import { CartProvider } from "../contexts/CartContext"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}


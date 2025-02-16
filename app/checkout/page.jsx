"use client"

import { useState } from "react"
import { useCart } from "../../contexts/CartContext"
import { Button } from "@/components/ui/button"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

export default function Checkout() {
  const { cart, cartTotal } = useCart() || { cart: [], cartTotal: 0 }
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
    phoneNumber: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    console.log("Cart items:", cart)
    // Here you would typically send this data to your server or payment processor
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Your Order</h2>
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center mb-2">
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="text-xl font-bold mt-4">Total: ${cartTotal.toFixed(2)}</div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label htmlFor="address" className="block mb-1">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label htmlFor="city" className="block mb-1">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label htmlFor="zipCode" className="block mb-1">
                  ZIP Code
                </label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded"
                />
              </div>
              <Button type="submit" className="w-full bg-black hover:bg-gray-800 text-white">
                Place Order
              </Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}


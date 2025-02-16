import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import SlidingIcons from "../components/SlidingIcons"
import AboutSection from "../components/AboutSection"
import PopularMenu from "../components/PopularMenu"
import LatestNews from "../components/LatestNews"
import Footer from "../components/Footer"
import FoodCategories from "../components/FoodCategories"
import FloatingSocialIcons from "../components/FloatingSocialIcons"
import Testimonials from "../components/Testimonials"
import Contact from "../components/Contact"
import FloatingCart from "../components/FloatingCart"
import LazyLoad from "../components/LazyLoad"
import { CartProvider } from "../contexts/CartContext"

export default function Home() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <SlidingIcons />
        <LazyLoad>
          <AboutSection />
        </LazyLoad>
        <LazyLoad>
          <FoodCategories />
        </LazyLoad>
        <LazyLoad>
          <PopularMenu />
        </LazyLoad>
        <LazyLoad>
          <LatestNews />
        </LazyLoad>
        <LazyLoad>
          <Testimonials />
        </LazyLoad>
        <LazyLoad>
          <Contact />
        </LazyLoad>
        <Footer />
        <FloatingSocialIcons />
        <FloatingCart />
      </div>
    </CartProvider>
  )
}


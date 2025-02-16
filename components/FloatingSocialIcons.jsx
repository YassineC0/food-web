import { Facebook, Instagram, PhoneIcon as WhatsApp } from "lucide-react"
import Link from "next/link"

export default function FloatingSocialIcons() {
  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-50">
      <Link href="#" className="bg-[#25D366] p-2 rounded-full hover:bg-opacity-80 transition-all">
        <WhatsApp className="w-6 h-6 text-white" />
      </Link>
      <Link href="#" className="bg-[#3b5998] p-2 rounded-full hover:bg-opacity-80 transition-all">
        <Facebook className="w-6 h-6 text-white" />
      </Link>
      <Link href="#" className="bg-[#E1306C] p-2 rounded-full hover:bg-opacity-80 transition-all">
        <Instagram className="w-6 h-6 text-white" />
      </Link>
    </div>
  )
}


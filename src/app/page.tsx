import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Crown, Twitter } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 to-red-950 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-[#f0e6d2] border-4 border-[#c8a97e] shadow-2xl rounded-lg overflow-hidden">
        <div className="bg-[#8c7851] p-4 flex items-center justify-center">
          <Crown className="text-[#f0e6d2] mr-2" size={24} />
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#f0e6d2] font-serif">
            Canines of the Court
          </h1>
          <Crown className="text-[#f0e6d2] ml-2" size={24} />
        </div>
        <div className="p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <div className="w-full sm:w-1/2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dog-HBygqreW2M31zWvajdAFDsMFehz68Z.jpg"
                alt="Renaissance-style portrait of a dog in ornate clothing"
                width={500}
                height={500}
                className="rounded-lg shadow-md border-2 border-[#c8a97e]"
              />
            </div>
            <div className="w-full sm:w-1/2 space-y-4">
              <h2 className="text-2xl font-semibold text-[#4a3728] font-serif">The Noble Hound of House Barksley</h2>
              <p className="text-[#5c4434] font-serif">
                Hark! And bear witness to our grand tapestry of canine nobility. This esteemed portrait doth capture the
                essence of Lord Woofington, first of his name, adorned in the finest silks of the realm.
              </p>
              <p className="text-[#5c4434] font-serif">
                Our hallowed halls showcase the majestic hounds that have graced the courts of kings and queens
                throughout the ages, immortalized by the master artisans of yore.
              </p>
              <Link href="https://x.com/historydogsol" target="_blank" rel="noopener noreferrer">
                <Button className="w-full sm:w-auto bg-[#8c7851] hover:bg-[#6a5a3d] text-[#f0e6d2] font-serif flex items-center justify-center">
                  <Twitter className="mr-2" size={16} />
                  Follow Our Royal Decrees on Twitter
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
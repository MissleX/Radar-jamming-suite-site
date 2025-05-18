import { Button } from "@/components/ui/button"
import { ArrowRight, Terminal, Radio } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-black to-gray-900">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="inline-block rounded-lg bg-emerald-500/10 px-3 py-1 text-sm text-emerald-500">
              Advanced Electronic Warfare
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Radar Jamming Suite</h1>
              <p className="max-w-[600px] text-gray-400 md:text-xl">
                A comprehensive toolkit for radar signal analysis, spoofing, and jamming. Designed for security
                researchers and electronic warfare specialists.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link href="#docs">
                <Button variant="outline" className="border-gray-700 hover:bg-gray-800">
                  <Terminal className="mr-2 h-4 w-4" />
                  View Documentation
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-[350px] rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-emerald-500/20 animate-pulse"></div>
              <div className="absolute h-[250px] w-[250px] rounded-full border border-emerald-500/40 flex items-center justify-center">
                <div className="absolute h-[150px] w-[150px] rounded-full border border-emerald-500/60 flex items-center justify-center">
                  <Radio className="h-16 w-16 text-emerald-500 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
